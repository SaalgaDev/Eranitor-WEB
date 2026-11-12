import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, Subject, catchError, combineLatest, forkJoin, map, of, switchMap } from 'rxjs';
import { API_BASE } from '../../../core/api/api.config';
import { AuthService } from '../../../core/auth/auth.service';
import { ParcelasPrioridade, calcularPrioridade, hojeISO } from './prioridade';

export type TipoEventoAgenda = 'Prova' | 'Atividade' | 'Apresentação' | 'Trabalho';
export type StatusTarefa = 'pendente' | 'concluida' | 'atrasada';

export interface EventoAgenda {
  id: number;
  uid: string;
  data: string;
  titulo: string;
  tipo: TipoEventoAgenda;
  fonte: 'agenda' | 'tarefa';
  tarefaId?: number;
  materiaId?: number;
  concluida?: boolean;
  cor?: string;
}

export interface Tarefa {
  id: number;
  titulo: string;
  materiaId: number;
  prazo: string | null;
  status: StatusTarefa;
  descricao: string;
  cor?: string;
  /** Cálculo da fórmula de prioridade, parcela por parcela (só para pendentes). */
  parcelas?: ParcelasPrioridade;
}

export interface Topico {
  id: number;
  nome: string;
  concluido: boolean;
}

export type TipoEstudo = 'atividade' | 'video' | 'apostila';

/** Soma dos registros de tempo de uma matéria em um mês. */
export interface RegistroTempo {
  id: number;
  materiaId: number;
  mes: number;
  ano: number;
  minutosAtividade: number;
  minutosVideo: number;
  minutosApostila: number;
}

export interface ResumoTempo {
  totalMinutos: number;
  materiaPrincipal: string;
  minutosMateriaPrincipal: number;
  percentualMateriaPrincipal: number;
}

export interface Materia {
  id: number;
  nome: string;
  ativa: boolean;
  dificuldade: number;
  topicos: Topico[];
}

export interface BarraPorcentagem {
  categoria: string;
  atividade: number;
  video: number;
  apostila: number;
}

export interface DesempenhoSetor {
  rotulo: string;
  percentual: number;
  cor: string;
}

// ---- Formatos que a API devolve -------------------------------------------------

interface MateriaApi { idMateria: number; nome: string; ativa: boolean | null; dificuldade: number | null }
interface TopicoApi { idTopico: number; nome: string; concluido: boolean | null }
interface TarefaApi {
  idTarefa: number;
  titulo: string;
  descricao: string | null;
  dataVencimento: string | null;
  cor: string | null;
  concluida: boolean | null;
  materiaId: number | null;
}
interface AgendaApi { id: number; usuarioId: number; data: string; titulo: string; tipo: string }
interface TempoEstudoApi {
  id: number;
  materiaId: number;
  mes: number;
  ano: number;
  minutosAtividade: number | null;
  minutosVideo: number | null;
  minutosApostila: number | null;
}

const TIPO_API: Record<TipoEstudo, string> = { atividade: 'EXERCICIO', video: 'VIDEO', apostila: 'APOSTILA' };
const TIPOS_AGENDA: TipoEventoAgenda[] = ['Prova', 'Atividade', 'Apresentação', 'Trabalho'];
const CORES_GRAFICO = ['var(--chart-blue)', 'var(--chart-purple)', 'var(--chart-orange)', 'var(--chart-yellow)'];
const DIFICULDADE_PADRAO = 3;
const COR_PADRAO = '#ff3b40';

const mesmoNome = (a: string, b: string): boolean => a.trim().toLocaleLowerCase() === b.trim().toLocaleLowerCase();

/** Mensagem de erro amigável a partir da resposta da API. */
function mensagemDeErro(erro: unknown, padrao: string): string {
  if (erro instanceof HttpErrorResponse) {
    if (erro.status === 0) return 'Sem conexão com o servidor do Eranitor. Confira a internet e tente de novo.';
    const corpo = erro.error as { message?: string; errors?: string[] } | null;
    if (erro.status < 500 && corpo?.message) return corpo.errors?.length ? `${corpo.message}: ${corpo.errors.join('; ')}` : corpo.message;
  }
  return padrao;
}

interface Dados {
  materias: Materia[];
  tarefas: Tarefa[];
  eventos: EventoAgenda[];
  tempos: RegistroTempo[];
}

const VAZIO: Dados = { materias: [], tarefas: [], eventos: [], tempos: [] };

/**
 * Dados da área do estudante, lidos e gravados na API do Eranitor.
 *
 * As telas chamam métodos síncronos (como faziam com o mock): o serviço faz a
 * alteração na tela na hora, envia para a API e, quando a API responde, recarrega
 * os dados do servidor. Se der erro, os dados voltam ao que está no servidor e
 * a mensagem aparece em `avisos$`.
 */
@Injectable({ providedIn: 'root' })
export class DashboardService {
  private readonly http = inject(HttpClient);
  private readonly auth = inject(AuthService);

  private readonly tarefasSource = new BehaviorSubject<Tarefa[]>([]);
  private readonly materiasSource = new BehaviorSubject<Materia[]>([]);
  private readonly eventosSource = new BehaviorSubject<EventoAgenda[]>([]);
  private readonly temposSource = new BehaviorSubject<RegistroTempo[]>([]);
  private readonly selecionadaSource = new BehaviorSubject<number>(0);
  private readonly carregandoSource = new BehaviorSubject<boolean>(false);
  private readonly avisosSource = new Subject<string>();
  private readonly recarregar$ = new Subject<void>();
  private usuarioId: number | null = null;
  private selecionarPorNome: string | null = null;

  readonly carregando$ = this.carregandoSource.asObservable();
  readonly avisos$ = this.avisosSource.asObservable();

  /**
   * Tarefas com status e prioridade calculados. Pendentes primeiro, da maior para a
   * menor prioridade (mesma ordem de GET /tarefas/priorizadas); concluídas no fim.
   */
  readonly tarefas$ = combineLatest([this.tarefasSource, this.materiasSource]).pipe(map(([tarefas, materias]) => {
    const hoje = hojeISO();
    const progresso = new Map<number, number>();
    for (const m of materias) {
      const daMateria = tarefas.filter((t) => t.materiaId === m.id);
      progresso.set(m.id, daMateria.length ? daMateria.filter((t) => t.status === 'concluida').length / daMateria.length : 0);
    }
    const dificuldade = new Map(materias.map((m) => [m.id, m.dificuldade]));
    return tarefas
      .map((tarefa): Tarefa => {
        const concluida = tarefa.status === 'concluida';
        return {
          ...tarefa,
          status: !concluida && !!tarefa.prazo && tarefa.prazo < hoje ? 'atrasada' : tarefa.status,
          parcelas: concluida ? undefined : calcularPrioridade(
            { prazo: tarefa.prazo, concluida },
            dificuldade.get(tarefa.materiaId) ?? DIFICULDADE_PADRAO,
            progresso.get(tarefa.materiaId) ?? 0,
            hoje
          ),
        };
      })
      .sort((a, b) => {
        if (!a.parcelas !== !b.parcelas) return a.parcelas ? -1 : 1;
        return (b.parcelas?.total ?? 0) - (a.parcelas?.total ?? 0) || (a.prazo ?? '9999').localeCompare(b.prazo ?? '9999');
      });
  }));

  /** As 3 tarefas pendentes de maior prioridade: "o que estudar hoje". */
  readonly sugestaoDoDia$ = this.tarefas$.pipe(map((tarefas) => tarefas.filter((t) => t.parcelas).slice(0, 3)));
  readonly materias$ = this.materiasSource.asObservable();
  readonly materiaNomes$ = this.materias$.pipe(map((materias) => materias.filter((m) => m.ativa).map((m) => m.nome)));
  readonly materiaSelecionada$ = this.selecionadaSource.asObservable();
  readonly eventos$ = combineLatest([this.eventosSource, this.tarefasSource]).pipe(
    map(([eventos, tarefas]) => [
      ...eventos,
      ...tarefas
        .filter((tarefa) => !!tarefa.prazo)
        .map((tarefa): EventoAgenda => ({
          id: tarefa.id,
          uid: `tarefa:${tarefa.id}`,
          data: tarefa.prazo!,
          titulo: tarefa.titulo,
          tipo: 'Atividade',
          fonte: 'tarefa',
          tarefaId: tarefa.id,
          materiaId: tarefa.materiaId,
          concluida: tarefa.status === 'concluida',
          cor: tarefa.cor,
        })),
    ].sort((a, b) => a.data.localeCompare(b.data)))
  );
  readonly tempos$ = this.temposSource.asObservable();

  private readonly doMes$ = combineLatest([this.temposSource, this.materiasSource]).pipe(map(([tempos, materias]) => {
    const now = new Date();
    return tempos
      .filter((r) => r.mes === now.getMonth() + 1 && r.ano === now.getFullYear())
      .map((r) => ({
        registro: r,
        nome: materias.find((m) => m.id === r.materiaId)?.nome ?? 'Matéria arquivada',
        minutos: r.minutosAtividade + r.minutosVideo + r.minutosApostila,
      }))
      .filter((item) => item.minutos > 0)
      .sort((a, b) => b.minutos - a.minutos);
  }));

  readonly resumoTempo$ = this.doMes$.pipe(map((porMateria): ResumoTempo => {
    const totalMinutos = porMateria.reduce((total, item) => total + item.minutos, 0);
    const principal = porMateria[0];
    return {
      totalMinutos,
      materiaPrincipal: principal?.nome ?? 'Sem registros',
      minutosMateriaPrincipal: principal?.minutos ?? 0,
      percentualMateriaPrincipal: totalMinutos ? Math.round((principal.minutos / totalMinutos) * 100) : 0,
    };
  }));

  /** Horas do mês por tipo de estudo, nas 4 matérias mais estudadas. */
  readonly barrasPorcentagem$ = this.doMes$.pipe(map((porMateria): BarraPorcentagem[] => porMateria.slice(0, 4).map((item) => ({
    categoria: item.nome,
    atividade: Math.round((item.registro.minutosAtividade / 60) * 10) / 10,
    video: Math.round((item.registro.minutosVideo / 60) * 10) / 10,
    apostila: Math.round((item.registro.minutosApostila / 60) * 10) / 10,
  }))));

  /** Parte do tempo do mês dedicada a cada matéria (as 3 maiores e "Outras"). */
  readonly desempenho$ = this.doMes$.pipe(map((porMateria): DesempenhoSetor[] => {
    const total = porMateria.reduce((soma, item) => soma + item.minutos, 0);
    if (!total) return [];
    const principais = porMateria.length > 4 ? porMateria.slice(0, 3) : porMateria;
    const outras = porMateria.slice(principais.length).reduce((soma, item) => soma + item.minutos, 0);
    const setores = principais.map((item) => ({ rotulo: item.nome, minutos: item.minutos }));
    if (outras) setores.push({ rotulo: 'Outras', minutos: outras });
    return setores.map((setor, i) => ({
      rotulo: setor.rotulo,
      percentual: Math.round((setor.minutos / total) * 1000) / 10,
      cor: CORES_GRAFICO[i % CORES_GRAFICO.length],
    }));
  }));

  constructor() {
    this.recarregar$.pipe(
      switchMap(() => {
        const id = this.usuarioId;
        if (!id) return of(VAZIO);
        this.carregandoSource.next(true);
        return this.buscarTudo(id).pipe(catchError((erro) => {
          this.avisar(mensagemDeErro(erro, 'Não foi possível carregar seus dados agora. Tente atualizar a página.'));
          return of(null);
        }));
      })
    ).subscribe((dados) => {
      this.carregandoSource.next(false);
      if (dados) this.aplicar(dados);
    });

    this.auth.currentUser$.subscribe((user) => {
      const id = user?.id ?? null;
      if (id === this.usuarioId) return;
      this.usuarioId = id;
      this.aplicar(VAZIO);
      this.recarregar();
    });
  }

  getTarefas(): Observable<Tarefa[]> { return this.tarefas$; }
  getEventos(): Observable<EventoAgenda[]> { return this.eventos$; }
  getMaterias(): Observable<Materia[]> { return this.materias$; }

  recarregar(): void { this.recarregar$.next(); }

  nomeMateria(id: number): string {
    return this.materiasSource.value.find((materia) => materia.id === id)?.nome ?? 'Matéria removida';
  }

  // ---- Tarefas -------------------------------------------------------------------

  alternarConclusao(id: number): void {
    const tarefa = this.tarefasSource.value.find((t) => t.id === id);
    if (!tarefa) return;
    const reabrir = tarefa.status === 'concluida';
    this.tarefasSource.next(this.tarefasSource.value.map((t) => t.id === id ? { ...t, status: reabrir ? 'pendente' : 'concluida' } : t));
    this.enviar(
      this.http.post(`${API_BASE}/tarefas/${id}/${reabrir ? 'reabrir' : 'concluir'}`, null),
      reabrir ? 'Não foi possível reabrir a tarefa.' : 'Não foi possível concluir a tarefa.'
    );
  }

  adicionarTarefa(titulo: string, prazo: string | null = null, materiaId?: number, cor = COR_PADRAO, descricao = ''): Tarefa | null {
    const tituloLimpo = titulo.trim();
    const materia = materiaId ?? this.selecionadaSource.value;
    if (!tituloLimpo || !this.usuarioId) return null;
    if (!this.materiasSource.value.some((m) => m.id === materia)) {
      this.avisar('Escolha uma matéria para a tarefa. Se ainda não tiver nenhuma, crie uma em Minhas matérias.');
      return null;
    }
    const nova: Tarefa = {
      id: -Date.now(), titulo: tituloLimpo, materiaId: materia, prazo: prazo || null,
      status: 'pendente', descricao: descricao.trim(), cor,
    };
    this.tarefasSource.next([nova, ...this.tarefasSource.value]);
    this.enviar(
      this.http.post(`${API_BASE}/tarefas/${this.usuarioId}/materia/${materia}`, this.corpoTarefa(nova)),
      'Não foi possível criar a tarefa.'
    );
    return nova;
  }

  removerTarefa(id: number): void {
    this.tarefasSource.next(this.tarefasSource.value.filter((tarefa) => tarefa.id !== id));
    this.enviar(this.http.delete(`${API_BASE}/tarefas/${id}`), 'Não foi possível excluir a tarefa.');
  }

  salvarTarefa(editada: Tarefa): void {
    const anterior = this.tarefasSource.value.find((t) => t.id === editada.id);
    if (!anterior || !this.usuarioId) return;
    this.tarefasSource.next(this.tarefasSource.value.map((t) => t.id === editada.id ? editada : t));

    // O PUT aceita materiaId para trocar a tarefa de matéria.
    const salvar = this.http.put(`${API_BASE}/tarefas/${editada.id}`, { ...this.corpoTarefa(editada), materiaId: editada.materiaId });
    const estavaConcluida = anterior.status === 'concluida';
    const ficaConcluida = editada.status === 'concluida';
    const status = estavaConcluida === ficaConcluida ? null : ficaConcluida ? 'concluir' : 'reabrir';
    this.enviar(
      status ? salvar.pipe(switchMap(() => this.http.post(`${API_BASE}/tarefas/${editada.id}/${status}`, null))) : salvar,
      'Não foi possível salvar a tarefa.'
    );
  }

  // ---- Matérias e tópicos ----------------------------------------------------------

  selecionarMateria(id: number): void { this.selecionadaSource.next(id); }

  adicionarMateria(nome: string, dificuldade = DIFICULDADE_PADRAO): boolean {
    const nomeLimpo = nome.trim();
    if (!nomeLimpo || !this.usuarioId || this.materiasSource.value.some((m) => mesmoNome(m.nome, nomeLimpo))) return false;
    const nivel = Math.min(5, Math.max(1, Math.round(dificuldade)));
    this.materiasSource.next([...this.materiasSource.value, { id: -Date.now(), nome: nomeLimpo, ativa: true, dificuldade: nivel, topicos: [] }]);
    this.selecionarPorNome = nomeLimpo;
    this.enviar(
      this.http.post(`${API_BASE}/materias/usuario/${this.usuarioId}`, { nome: nomeLimpo, ativa: true, dificuldade: nivel }),
      'Não foi possível criar a matéria.'
    );
    return true;
  }

  renomearMateria(id: number, nome: string): boolean {
    const nomeLimpo = nome.trim();
    const materia = this.materiasSource.value.find((m) => m.id === id);
    if (!materia || !nomeLimpo || this.materiasSource.value.some((m) => m.id !== id && mesmoNome(m.nome, nomeLimpo))) return false;
    this.atualizarMateria({ ...materia, nome: nomeLimpo }, 'Não foi possível renomear a matéria.');
    return true;
  }

  /** Dificuldade de 1 a 5; entra na fórmula de prioridade das tarefas da matéria. */
  definirDificuldade(id: number, dificuldade: number): boolean {
    const materia = this.materiasSource.value.find((m) => m.id === id);
    const nivel = Math.round(dificuldade);
    if (!materia || nivel < 1 || nivel > 5) return false;
    if (materia.dificuldade !== nivel) this.atualizarMateria({ ...materia, dificuldade: nivel }, 'Não foi possível salvar a dificuldade.');
    return true;
  }

  arquivarMateria(id: number): boolean {
    const materia = this.materiasSource.value.find((m) => m.id === id);
    if (!materia) return false;
    this.atualizarMateria({ ...materia, ativa: false }, 'Não foi possível arquivar a matéria.');
    if (this.selecionadaSource.value === id) this.selecionadaSource.next(this.materiasSource.value.find((m) => m.ativa)?.id ?? 0);
    return true;
  }

  adicionarTopico(materiaId: number, nome: string): boolean {
    const nomeLimpo = nome.trim();
    const materia = this.materiasSource.value.find((item) => item.id === materiaId);
    if (!materia || !nomeLimpo || materia.topicos.some((t) => mesmoNome(t.nome, nomeLimpo))) return false;
    this.trocarTopicos(materiaId, [...materia.topicos, { id: -Date.now(), nome: nomeLimpo, concluido: false }]);
    this.enviar(this.http.post(`${API_BASE}/topicos/materia/${materiaId}`, { nome: nomeLimpo }), 'Não foi possível criar o tópico.');
    return true;
  }

  salvarTopico(materiaId: number, topicoId: number, nome: string, concluido: boolean): boolean {
    const nomeLimpo = nome.trim();
    const materia = this.materiasSource.value.find((item) => item.id === materiaId);
    if (!materia || !nomeLimpo || materia.topicos.some((t) => t.id !== topicoId && mesmoNome(t.nome, nomeLimpo))) return false;
    this.trocarTopicos(materiaId, materia.topicos.map((t) => t.id === topicoId ? { ...t, nome: nomeLimpo, concluido } : t));
    this.enviar(
      this.http.put(`${API_BASE}/topicos/${topicoId}/materia/${materiaId}`, { nome: nomeLimpo, concluido }),
      'Não foi possível salvar o tópico.'
    );
    return true;
  }

  alternarTopico(materiaId: number, topicoId: number): void {
    const materia = this.materiasSource.value.find((item) => item.id === materiaId);
    const topico = materia?.topicos.find((item) => item.id === topicoId);
    if (materia && topico) this.salvarTopico(materiaId, topicoId, topico.nome, !topico.concluido);
  }

  removerTopico(materiaId: number, topicoId: number): void {
    const materia = this.materiasSource.value.find((item) => item.id === materiaId);
    if (!materia) return;
    this.trocarTopicos(materiaId, materia.topicos.filter((t) => t.id !== topicoId));
    this.enviar(this.http.delete(`${API_BASE}/topicos/${topicoId}`), 'Não foi possível excluir o tópico.');
  }

  // ---- Agenda ----------------------------------------------------------------------

  adicionarEvento(evento: Omit<EventoAgenda, 'id' | 'uid' | 'fonte' | 'tarefaId' | 'concluida'>): void {
    if (!this.usuarioId) return;
    const id = -Date.now();
    this.eventosSource.next([...this.eventosSource.value, { ...evento, id, uid: `agenda:${id}`, fonte: 'agenda' }]);
    this.enviar(
      this.http.post(`${API_BASE}/agenda/${this.usuarioId}`, { data: evento.data, titulo: evento.titulo, tipo: evento.tipo }),
      'Não foi possível salvar o evento.'
    );
  }

  salvarEvento(evento: EventoAgenda): void {
    if (evento.fonte !== 'agenda') return;
    this.eventosSource.next(this.eventosSource.value.map((item) => item.id === evento.id ? evento : item));
    this.enviar(
      this.http.put(`${API_BASE}/agenda/${evento.id}`, { data: evento.data, titulo: evento.titulo, tipo: evento.tipo }),
      'Não foi possível salvar o evento.'
    );
  }

  removerEvento(id: number): void {
    this.eventosSource.next(this.eventosSource.value.filter((evento) => evento.id !== id));
    this.enviar(this.http.delete(`${API_BASE}/agenda/${id}`), 'Não foi possível excluir o evento.');
  }

  // ---- Tempo de estudo -------------------------------------------------------------

  registrarTempo(materiaId: number, tipo: TipoEstudo, minutos: number): boolean {
    const quantidade = Math.floor(minutos);
    if (!this.usuarioId || !this.materiasSource.value.some((m) => m.id === materiaId && m.ativa) || quantidade < 1 || quantidade > 1440) return false;
    const now = new Date();
    const mes = now.getMonth() + 1;
    const ano = now.getFullYear();
    const campo = ({ atividade: 'minutosAtividade', video: 'minutosVideo', apostila: 'minutosApostila' } as const)[tipo];
    const existente = this.temposSource.value.find((r) => r.materiaId === materiaId && r.mes === mes && r.ano === ano);
    this.temposSource.next(existente
      ? this.temposSource.value.map((r) => r === existente ? { ...r, [campo]: r[campo] + quantidade } : r)
      : [...this.temposSource.value, {
        id: -Date.now(), materiaId, mes, ano, minutosAtividade: 0, minutosVideo: 0, minutosApostila: 0, [campo]: quantidade,
      }]);
    this.enviar(
      this.http.post(`${API_BASE}/tempos-estudo/${this.usuarioId}`, { tipo: TIPO_API[tipo], minutos: quantidade, materiaId }),
      'Não foi possível registrar o tempo de estudo.'
    );
    return true;
  }

  // ---- Interno -----------------------------------------------------------------------

  private buscarTudo(usuarioId: number): Observable<Dados> {
    const materias$ = this.http.get<MateriaApi[]>(`${API_BASE}/materias/usuario/${usuarioId}`).pipe(
      switchMap((materias) => materias.length
        ? forkJoin(materias.map((m) => this.http.get<TopicoApi[]>(`${API_BASE}/topicos/materia/${m.idMateria}`).pipe(
          catchError(() => of([] as TopicoApi[])),
          map((topicos) => ({ materia: m, topicos }))
        )))
        : of([]))
    );
    // Todas as tarefas do usuário, pendentes e concluídas.
    const tarefas$ = this.http.get<TarefaApi[]>(`${API_BASE}/tarefas/usuario/${usuarioId}`);
    const agenda$ = this.http.get<AgendaApi[]>(`${API_BASE}/agenda/usuario/${usuarioId}`).pipe(catchError(() => of([] as AgendaApi[])));
    const tempos$ = this.http.get<TempoEstudoApi[]>(`${API_BASE}/tempos-estudo/usuario/${usuarioId}`).pipe(catchError(() => of([] as TempoEstudoApi[])));

    return forkJoin({ materias: materias$, tarefas: tarefas$, agenda: agenda$, tempos: tempos$ }).pipe(
      map(({ materias, tarefas, agenda, tempos }): Dados => ({
        materias: materias.map(({ materia, topicos }) => ({
          id: materia.idMateria,
          nome: materia.nome,
          ativa: materia.ativa !== false,
          dificuldade: materia.dificuldade ?? DIFICULDADE_PADRAO,
          topicos: topicos.map((t) => ({ id: t.idTopico, nome: t.nome, concluido: !!t.concluido })),
        })),
        // A ordem por prioridade é feita em tarefas$ (prioridade.ts).
        tarefas: tarefas.filter((t) => t.materiaId != null).map((t) => ({
          id: t.idTarefa,
          titulo: t.titulo,
          materiaId: t.materiaId!,
          prazo: t.dataVencimento,
          status: t.concluida ? 'concluida' as const : 'pendente' as const,
          descricao: t.descricao ?? '',
          cor: t.cor ?? COR_PADRAO,
        })),
        eventos: agenda.map((a) => ({
          id: a.id,
          uid: `agenda:${a.id}`,
          data: a.data,
          titulo: a.titulo,
          tipo: (TIPOS_AGENDA as string[]).includes(a.tipo) ? a.tipo as TipoEventoAgenda : 'Atividade',
          fonte: 'agenda' as const,
        })),
        tempos: this.somarTempos(tempos),
      }))
    );
  }

  /** A API grava um registro por lançamento; a tela mostra a soma por matéria e mês. */
  private somarTempos(registros: TempoEstudoApi[]): RegistroTempo[] {
    const soma = new Map<string, RegistroTempo>();
    for (const r of registros) {
      const chave = `${r.materiaId}-${r.mes}-${r.ano}`;
      const atual = soma.get(chave) ?? { id: r.id, materiaId: r.materiaId, mes: r.mes, ano: r.ano, minutosAtividade: 0, minutosVideo: 0, minutosApostila: 0 };
      atual.minutosAtividade += r.minutosAtividade ?? 0;
      atual.minutosVideo += r.minutosVideo ?? 0;
      atual.minutosApostila += r.minutosApostila ?? 0;
      soma.set(chave, atual);
    }
    return [...soma.values()];
  }

  /** A API exige título, descrição, data e cor (TarefaDTO). */
  private corpoTarefa(t: Tarefa): Record<string, string | null> {
    return { titulo: t.titulo, descricao: t.descricao || t.titulo, dataVencimento: t.prazo, cor: t.cor ?? COR_PADRAO };
  }

  private atualizarMateria(materia: Materia, erro: string): void {
    this.materiasSource.next(this.materiasSource.value.map((m) => m.id === materia.id ? materia : m));
    this.enviar(
      this.http.put(`${API_BASE}/materias/${materia.id}/usuario/${this.usuarioId}`, { nome: materia.nome, ativa: materia.ativa, dificuldade: materia.dificuldade }),
      erro
    );
  }

  private trocarTopicos(materiaId: number, topicos: Topico[]): void {
    this.materiasSource.next(this.materiasSource.value.map((m) => m.id === materiaId ? { ...m, topicos } : m));
  }

  private enviar(requisicao: Observable<unknown>, erro: string): void {
    requisicao.subscribe({
      next: () => this.recarregar(),
      error: (e: unknown) => {
        this.avisar(mensagemDeErro(e, erro));
        this.recarregar();
      },
    });
  }

  private aplicar(dados: Dados): void {
    this.materiasSource.next(dados.materias);
    this.tarefasSource.next(dados.tarefas);
    this.eventosSource.next(dados.eventos);
    this.temposSource.next(dados.tempos);

    const ativas = dados.materias.filter((m) => m.ativa);
    const porNome = this.selecionarPorNome ? ativas.find((m) => mesmoNome(m.nome, this.selecionarPorNome!)) : undefined;
    if (porNome) {
      this.selecionarPorNome = null;
      this.selecionadaSource.next(porNome.id);
    } else if (!ativas.some((m) => m.id === this.selecionadaSource.value)) {
      this.selecionadaSource.next(ativas[0]?.id ?? 0);
    }
  }

  private avisar(mensagem: string): void {
    this.avisosSource.next(mensagem);
  }
}
