import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map, of } from 'rxjs';
import { AuthService } from '../../../core/auth/auth.service';

export type TipoEventoAgenda = 'Prova' | 'Atividade' | 'Apresentação' | 'Trabalho';
export type StatusTarefa = 'pendente' | 'concluida' | 'atrasada';

export interface EstatisticasDashboard {
  materias: number;
  tarefasPendentes: number;
  horasEstudadas: number;
  progressoPercent: number;
}

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
}

export interface Topico {
  id: number;
  nome: string;
  concluido: boolean;
}

export type TipoEstudo = 'atividade' | 'video' | 'apostila';

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

interface MockStore {
  tarefas: Tarefa[];
  materias: Materia[];
  eventos: EventoAgenda[];
  tempos: RegistroTempo[];
}

const pad = (n: number): string => String(n).padStart(2, '0');
const localISO = (date: Date): string => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
const dateOffset = (days: number): string => {
  const date = new Date();
  date.setHours(12, 0, 0, 0);
  date.setDate(date.getDate() + days);
  return localISO(date);
};

const MATERIAS_INICIAIS: Materia[] = [
  { id: 1, nome: 'Matemática', ativa: true, topicos: [
    { id: 1, nome: 'Álgebra', concluido: true }, { id: 2, nome: 'Equações', concluido: false },
  ] },
  { id: 2, nome: 'Geografia', ativa: true, topicos: [
    { id: 3, nome: 'Clima e vegetação', concluido: false }, { id: 4, nome: 'Cartografia', concluido: true },
  ] },
  { id: 3, nome: 'Ciências', ativa: true, topicos: [
    { id: 5, nome: 'Citologia', concluido: false }, { id: 6, nome: 'Sistema respiratório', concluido: false },
  ] },
  { id: 4, nome: 'História', ativa: true, topicos: [
    { id: 7, nome: 'Grécia antiga', concluido: true }, { id: 8, nome: 'Segunda Guerra', concluido: false }, { id: 9, nome: 'Guerra dos Canudos', concluido: false },
  ] },
  { id: 5, nome: 'Português', ativa: true, topicos: [
    { id: 10, nome: 'Interpretação de texto', concluido: false },
  ] },
];

const TAREFAS_INICIAIS: Tarefa[] = [
  { id: 1, titulo: 'Grécia antiga', materiaId: 4, prazo: dateOffset(-1), status: 'concluida', descricao: 'Página 33, exercícios 1 a 8', cor: '#23447f' },
  { id: 2, titulo: 'Citologia', materiaId: 3, prazo: dateOffset(1), status: 'pendente', descricao: '', cor: '#ff3b40' },
  { id: 3, titulo: 'Álgebra', materiaId: 1, prazo: dateOffset(2), status: 'concluida', descricao: '', cor: '#23447f' },
  { id: 4, titulo: 'Equações', materiaId: 1, prazo: dateOffset(4), status: 'pendente', descricao: '', cor: '#ff3b40' },
  { id: 5, titulo: 'Segunda Guerra', materiaId: 4, prazo: dateOffset(6), status: 'concluida', descricao: '', cor: '#23447f' },
  { id: 6, titulo: 'Guerra dos Canudos', materiaId: 4, prazo: dateOffset(8), status: 'pendente', descricao: '', cor: '#ff3b40' },
];

const EVENTOS_INICIAIS: EventoAgenda[] = [
  { id: 1, uid: 'agenda:1', data: dateOffset(0), titulo: 'Revisão da semana', tipo: 'Atividade', fonte: 'agenda' },
  { id: 2, uid: 'agenda:2', data: dateOffset(1), titulo: 'Entrega da redação', tipo: 'Trabalho', fonte: 'agenda' },
  { id: 3, uid: 'agenda:3', data: dateOffset(4), titulo: 'Prova: Era Vargas', tipo: 'Prova', fonte: 'agenda' },
  { id: 4, uid: 'agenda:4', data: dateOffset(7), titulo: 'Apresentação em grupo', tipo: 'Apresentação', fonte: 'agenda' },
];

const TEMPOS_INICIAIS: RegistroTempo[] = [
  { id: 1, materiaId: 1, mes: new Date().getMonth() + 1, ano: new Date().getFullYear(), minutosAtividade: 65, minutosVideo: 35, minutosApostila: 25 },
  { id: 2, materiaId: 4, mes: new Date().getMonth() + 1, ano: new Date().getFullYear(), minutosAtividade: 45, minutosVideo: 50, minutosApostila: 30 },
];

const BARRAS_INICIAIS: BarraPorcentagem[] = [
  { categoria: 'História', atividade: 12, video: 8, apostila: 6 },
  { categoria: 'Geografia', atividade: 10, video: 12, apostila: 10 },
  { categoria: 'Matemática', atividade: 14, video: 16, apostila: 12 },
  { categoria: 'Ciência', atividade: 18, video: 14, apostila: 16 },
];
const DESEMPENHO_INICIAL: DesempenhoSetor[] = [
  { rotulo: 'Ciência', percentual: 37, cor: 'var(--chart-blue)' },
  { rotulo: 'Matemática', percentual: 25.9, cor: 'var(--chart-purple)' },
  { rotulo: 'Geografia', percentual: 22.2, cor: 'var(--chart-orange)' },
  { rotulo: 'História', percentual: 14.8, cor: 'var(--chart-yellow)' },
];

@Injectable({ providedIn: 'root' })
export class DashboardMockService {
  private readonly auth = inject(AuthService);
  private storageKey = this.keyFor(this.auth.getCurrentUser()?.id);
  private readonly initial = this.readStore();

  private readonly tarefasSource = new BehaviorSubject<Tarefa[]>(this.initial.tarefas);
  private readonly materiasSource = new BehaviorSubject<Materia[]>(this.initial.materias);
  private readonly eventosSource = new BehaviorSubject<EventoAgenda[]>(this.initial.eventos);
  private readonly temposSource = new BehaviorSubject<RegistroTempo[]>(this.initial.tempos);
  private readonly selecionadaSource = new BehaviorSubject<number>(this.initial.materias.find((m) => m.ativa)?.id ?? 1);

  readonly tarefas$ = this.tarefasSource.asObservable().pipe(map((tarefas) => tarefas.map((tarefa) => ({
    ...tarefa,
    status: tarefa.status !== 'concluida' && !!tarefa.prazo && tarefa.prazo < localISO(new Date())
      ? 'atrasada' as const
      : tarefa.status,
  }))));
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
  readonly resumoTempo$ = combineLatest([this.temposSource, this.materiasSource]).pipe(map(([tempos, materias]): ResumoTempo => {
    const now = new Date();
    const doMes = tempos.filter((registro) => registro.mes === now.getMonth() + 1 && registro.ano === now.getFullYear());
    const porMateria = doMes.map((registro) => ({
      nome: materias.find((materia) => materia.id === registro.materiaId)?.nome ?? 'Matéria arquivada',
      minutos: registro.minutosAtividade + registro.minutosVideo + registro.minutosApostila,
    })).sort((a, b) => b.minutos - a.minutos);
    const totalMinutos = porMateria.reduce((total, item) => total + item.minutos, 0);
    const principal = porMateria[0];
    return {
      totalMinutos,
      materiaPrincipal: principal?.nome ?? 'Sem registros',
      minutosMateriaPrincipal: principal?.minutos ?? 0,
      percentualMateriaPrincipal: totalMinutos ? Math.round((principal.minutos / totalMinutos) * 100) : 0,
    };
  }));
  readonly barrasPorcentagem$ = of(BARRAS_INICIAIS);
  readonly desempenho$ = of(DESEMPENHO_INICIAL);

  constructor() {
    this.auth.currentUser$.subscribe((user) => {
      const nextKey = this.keyFor(user?.id);
      if (nextKey === this.storageKey) return;
      this.storageKey = nextKey;
      const store = this.readStore();
      this.tarefasSource.next(store.tarefas);
      this.materiasSource.next(store.materias);
      this.eventosSource.next(store.eventos);
      this.temposSource.next(store.tempos);
      this.selecionadaSource.next(store.materias.find((materia) => materia.ativa)?.id ?? 1);
    });
  }

  getTarefas(): Observable<Tarefa[]> { return this.tarefas$; }
  getEventos(): Observable<EventoAgenda[]> { return this.eventos$; }
  getMaterias(): Observable<Materia[]> { return this.materias$; }

  nomeMateria(id: number): string {
    return this.materiasSource.value.find((materia) => materia.id === id)?.nome ?? 'Matéria removida';
  }

  alternarConclusao(id: number): void {
    const tarefas = this.tarefasSource.value.map((tarefa) => {
      if (tarefa.id !== id) return tarefa;
      const status: StatusTarefa = tarefa.status === 'concluida' ? 'pendente' : 'concluida';
      return { ...tarefa, status };
    });
    this.tarefasSource.next(tarefas);
    this.persist();
  }

  adicionarTarefa(titulo: string, prazo: string | null = null, materiaId?: number, cor = '#ff3b40'): Tarefa | null {
    const tituloLimpo = titulo.trim();
    if (!tituloLimpo) return null;
    const id = this.nextId(this.tarefasSource.value.map((t) => t.id));
    const materia = materiaId ?? this.selecionadaSource.value;
    const nova: Tarefa = {
      id, titulo: tituloLimpo, materiaId: materia, prazo: prazo || null,
      status: 'pendente', descricao: '', cor,
    };
    this.tarefasSource.next([nova, ...this.tarefasSource.value]);
    this.persist();
    return nova;
  }

  removerTarefa(id: number): void {
    this.tarefasSource.next(this.tarefasSource.value.filter((tarefa) => tarefa.id !== id));
    this.persist();
  }

  salvarTarefa(editada: Tarefa): void {
    this.tarefasSource.next(this.tarefasSource.value.map((tarefa) => tarefa.id === editada.id ? editada : tarefa));
    this.persist();
  }

  selecionarMateria(id: number): void { this.selecionadaSource.next(id); }

  adicionarMateria(nome: string): boolean {
    const nomeLimpo = nome.trim();
    if (!nomeLimpo || this.materiasSource.value.some((m) => m.nome.toLocaleLowerCase() === nomeLimpo.toLocaleLowerCase())) return false;
    const id = this.nextId(this.materiasSource.value.map((m) => m.id));
    this.materiasSource.next([...this.materiasSource.value, { id, nome: nomeLimpo, ativa: true, topicos: [] }]);
    this.selecionadaSource.next(id);
    this.persist();
    return true;
  }

  renomearMateria(id: number, nome: string): boolean {
    const nomeLimpo = nome.trim();
    if (!nomeLimpo || this.materiasSource.value.some((m) => m.id !== id && m.nome.toLocaleLowerCase() === nomeLimpo.toLocaleLowerCase())) return false;
    this.materiasSource.next(this.materiasSource.value.map((m) => m.id === id ? { ...m, nome: nomeLimpo } : m));
    this.persist();
    return true;
  }

  arquivarMateria(id: number): boolean {
    this.materiasSource.next(this.materiasSource.value.map((m) => m.id === id ? { ...m, ativa: false } : m));
    if (this.selecionadaSource.value === id) this.selecionadaSource.next(this.materiasSource.value.find((m) => m.ativa)?.id ?? 0);
    this.persist();
    return true;
  }

  adicionarTopico(materiaId: number, nome: string): boolean {
    const nomeLimpo = nome.trim();
    const materia = this.materiasSource.value.find((item) => item.id === materiaId);
    if (!materia || !nomeLimpo || materia.topicos.some((t) => t.nome.toLocaleLowerCase() === nomeLimpo.toLocaleLowerCase())) return false;
    const id = this.nextId(this.materiasSource.value.flatMap((m) => m.topicos.map((t) => t.id)));
    this.materiasSource.next(this.materiasSource.value.map((m) => m.id === materiaId ? { ...m, topicos: [...m.topicos, { id, nome: nomeLimpo, concluido: false }] } : m));
    this.persist();
    return true;
  }

  salvarTopico(materiaId: number, topicoId: number, nome: string, concluido: boolean): boolean {
    const nomeLimpo = nome.trim();
    const materia = this.materiasSource.value.find((item) => item.id === materiaId);
    if (!materia || !nomeLimpo || materia.topicos.some((t) => t.id !== topicoId && t.nome.toLocaleLowerCase() === nomeLimpo.toLocaleLowerCase())) return false;
    this.materiasSource.next(this.materiasSource.value.map((m) => m.id !== materiaId ? m : {
      ...m, topicos: m.topicos.map((t) => t.id === topicoId ? { ...t, nome: nomeLimpo, concluido } : t),
    }));
    this.persist();
    return true;
  }

  alternarTopico(materiaId: number, topicoId: number): void {
    const materia = this.materiasSource.value.find((item) => item.id === materiaId);
    const topico = materia?.topicos.find((item) => item.id === topicoId);
    if (materia && topico) this.salvarTopico(materiaId, topicoId, topico.nome, !topico.concluido);
  }

  removerTopico(materiaId: number, topicoId: number): void {
    this.materiasSource.next(this.materiasSource.value.map((m) => m.id === materiaId ? { ...m, topicos: m.topicos.filter((t) => t.id !== topicoId) } : m));
    this.persist();
  }

  adicionarEvento(evento: Omit<EventoAgenda, 'id' | 'uid' | 'fonte' | 'tarefaId' | 'concluida'>): void {
    const id = this.nextId(this.eventosSource.value.map((item) => item.id));
    this.eventosSource.next([...this.eventosSource.value, { ...evento, id, uid: `agenda:${id}`, fonte: 'agenda' }]);
    this.persist();
  }

  salvarEvento(evento: EventoAgenda): void {
    if (evento.fonte !== 'agenda') return;
    this.eventosSource.next(this.eventosSource.value.map((item) => item.id === evento.id ? evento : item));
    this.persist();
  }

  removerEvento(id: number): void {
    this.eventosSource.next(this.eventosSource.value.filter((evento) => evento.id !== id));
    this.persist();
  }

  registrarTempo(materiaId: number, tipo: TipoEstudo, minutos: number): boolean {
    const quantidade = Math.floor(minutos);
    if (!this.materiasSource.value.some((materia) => materia.id === materiaId && materia.ativa) || quantidade < 1 || quantidade > 1440) return false;
    const now = new Date();
    const registro = this.temposSource.value.find((item) => item.materiaId === materiaId && item.mes === now.getMonth() + 1 && item.ano === now.getFullYear());
    const campo: Record<TipoEstudo, 'minutosAtividade' | 'minutosVideo' | 'minutosApostila'> = {
      atividade: 'minutosAtividade', video: 'minutosVideo', apostila: 'minutosApostila',
    };
    if (registro) {
      this.temposSource.next(this.temposSource.value.map((item) => item.id === registro.id ? { ...item, [campo[tipo]]: item[campo[tipo]] + quantidade } : item));
    } else {
      const novo: RegistroTempo = {
        id: this.nextId(this.temposSource.value.map((item) => item.id)),
        materiaId, mes: now.getMonth() + 1, ano: now.getFullYear(),
        minutosAtividade: tipo === 'atividade' ? quantidade : 0,
        minutosVideo: tipo === 'video' ? quantidade : 0,
        minutosApostila: tipo === 'apostila' ? quantidade : 0,
      };
      this.temposSource.next([...this.temposSource.value, novo]);
    }
    this.persist();
    return true;
  }

  private nextId(ids: number[]): number { return Math.max(0, ...ids) + 1; }

  private keyFor(userId: number | undefined): string {
    return `eranitor-demo-data-v1-${userId ?? 'guest'}`;
  }

  private readStore(): MockStore {
    const fallback: MockStore = { tarefas: TAREFAS_INICIAIS, materias: MATERIAS_INICIAIS, eventos: EVENTOS_INICIAIS, tempos: TEMPOS_INICIAIS };
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (!raw) return structuredClone(fallback);
      const parsed = JSON.parse(raw) as Partial<MockStore>;
      return {
        tarefas: Array.isArray(parsed.tarefas) ? parsed.tarefas : structuredClone(fallback.tarefas),
        materias: Array.isArray(parsed.materias) ? parsed.materias : structuredClone(fallback.materias),
        eventos: Array.isArray(parsed.eventos) ? parsed.eventos : structuredClone(fallback.eventos),
        tempos: Array.isArray(parsed.tempos) ? parsed.tempos : structuredClone(fallback.tempos),
      };
    } catch {
      return structuredClone(fallback);
    }
  }

  private persist(): void {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify({
        tarefas: this.tarefasSource.value,
        materias: this.materiasSource.value,
        eventos: this.eventosSource.value,
        tempos: this.temposSource.value,
      } satisfies MockStore));
    } catch { }
  }
}
