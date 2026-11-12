import { Component, inject } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { AuthService } from '../../core/auth/auth.service';
import { User } from '../../core/auth/models/user.model';
import { IconComponent } from './components/icon/icon.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { DificuldadeComponent } from './components/dificuldade/dificuldade.component';
import { detalharConta, explicarPrioridade } from './services/prioridade';
import { ConfirmService } from './services/confirm.service';
import { BarraPorcentagem, DashboardService, DesempenhoSetor, Tarefa } from './services/dashboard.service';

const capitalizar = (texto: string): string => texto.charAt(0).toUpperCase() + texto.slice(1);

type ChaveEstudo = 'atividade' | 'video' | 'apostila';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AsyncPipe, DatePipe, FormsModule, RouterLink, IconComponent, DialogComponent, DificuldadeComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  private readonly auth = inject(AuthService);
  private readonly confirm = inject(ConfirmService);
  readonly mock = inject(DashboardService);

  user: User | null = this.auth.getCurrentUser();

  readonly tarefas$ = this.mock.tarefas$;
  readonly sugestao$ = this.mock.sugestaoDoDia$;
  readonly explicar = explicarPrioridade;
  readonly conta = detalharConta;
  readonly materiasAtivas$ = this.mock.materias$.pipe(map((materias) => materias.filter((m) => m.ativa)));
  readonly barras$ = this.mock.barrasPorcentagem$.pipe(map((barras) => {
    const maior = Math.max(0, ...barras.map((b) => b.atividade + b.video + b.apostila));
    const passo = [1, 2, 5, 10, 20, 50].find((p) => p * 5 >= maior) ?? 100;
    this.eixo = [5, 4, 3, 2, 1, 0].map((n) => n * passo);
    return barras;
  }));
  readonly desempenho$ = this.mock.desempenho$;
  readonly tempoResumo$ = this.mock.resumoTempo$;

  readonly tiposEstudo: Array<{ chave: ChaveEstudo; rotulo: string; cor: string }> = [
    { chave: 'atividade', rotulo: 'Atividade', cor: 'var(--chart-blue)' },
    { chave: 'video', rotulo: 'Vídeo', cor: 'var(--chart-purple)' },
    { chave: 'apostila', rotulo: 'Apostila', cor: 'var(--chart-orange)' },
  ];
  /** Eixo do gráfico de barras, ajustado ao maior valor (em horas). */
  eixo = [5, 4, 3, 2, 1, 0];

  readonly mesAtual = capitalizar(new Date().toLocaleDateString('pt-BR', { month: 'long' }));

  adicionarAberto = false;
  novoTitulo = '';
  novoPrazo = '';
  novaMateriaId = 0;

  adicionarMateriaAberto = false;
  novaMateria = '';
  novaDificuldade = 3;
  erroMateria = '';

  editando: Tarefa | null = null;
  edicaoTitulo = '';
  edicaoMateriaId = 0;
  edicaoPrazo = '';
  edicaoDescricao = '';

  constructor() {
    this.auth.currentUser$.pipe(takeUntilDestroyed()).subscribe((u) => (this.user = u));
    this.mock.materiaSelecionada$.pipe(takeUntilDestroyed()).subscribe((id) => (this.novaMateriaId = id));
  }

  get primeiroNome(): string {
    return this.user?.nome?.split(' ')[0] || 'estudante';
  }

  concluidas(tarefas: Tarefa[]): number {
    return tarefas.filter((t) => t.status === 'concluida').length;
  }

  percentual(tarefas: Tarefa[]): number {
    return tarefas.length ? Math.round((this.concluidas(tarefas) / tarefas.length) * 100) : 0;
  }

  adicionarTarefa(): void {
    const criada = this.mock.adicionarTarefa(this.novoTitulo, this.novoPrazo || null, this.novaMateriaId);
    if (!criada) return;
    this.novoTitulo = '';
    this.novoPrazo = '';
    this.adicionarAberto = false;
  }

  adicionarMateria(): void {
    if (this.mock.adicionarMateria(this.novaMateria, this.novaDificuldade)) {
      this.novaMateria = '';
      this.novaDificuldade = 3;
      this.erroMateria = '';
      this.adicionarMateriaAberto = false;
    } else {
      this.erroMateria = 'Informe um nome que ainda não esteja na lista.';
    }
  }

  abrirEdicao(tarefa: Tarefa): void {
    this.editando = tarefa;
    this.edicaoTitulo = tarefa.titulo;
    this.edicaoMateriaId = tarefa.materiaId;
    this.edicaoPrazo = tarefa.prazo ?? '';
    this.edicaoDescricao = tarefa.descricao ?? '';
  }

  fecharEdicao(): void {
    this.editando = null;
  }

  salvarEdicao(): void {
    if (!this.editando) return;
    this.mock.salvarTarefa({
      ...this.editando,
      titulo: this.edicaoTitulo.trim() || this.editando.titulo,
      materiaId: this.edicaoMateriaId,
      prazo: this.edicaoPrazo || null,
      descricao: this.edicaoDescricao.trim(),
    });
    this.fecharEdicao();
  }

  async excluirDaEdicao(): Promise<void> {
    const tarefa = this.editando;
    if (!tarefa) return;
    this.fecharEdicao();
    if (await this.confirm.ask('Excluir tarefa', `“${tarefa.titulo}” sai da lista e da agenda.`)) {
      this.mock.removerTarefa(tarefa.id);
    }
  }

  escala(horas: number): number {
    return Math.min(100, (horas / this.eixo[0]) * 100);
  }

  descreverBarras(barras: BarraPorcentagem[]): string {
    return 'Horas por tipo de estudo: ' + barras
      .map((b) => `${b.categoria}: atividade ${b.atividade}, vídeo ${b.video}, apostila ${b.apostila}`)
      .join('; ');
  }

  descreverDesempenho(setores: DesempenhoSetor[]): string {
    return 'Distribuição de desempenho: ' + setores.map((s) => `${s.rotulo} ${s.percentual}%`).join(', ');
  }

  gradientePizza(setores: DesempenhoSetor[]): string {
    let acumulado = 0;
    const stops = setores.map((setor) => {
      const inicio = acumulado;
      acumulado += (setor.percentual / 100) * 360;
      return `${setor.cor} ${inicio}deg ${acumulado}deg`;
    });
    return `conic-gradient(${stops.join(', ')})`;
  }

  formatarTempo(minutos: number): string {
    const horas = Math.floor(minutos / 60);
    const resto = minutos % 60;
    if (!horas) return `${resto} min`;
    return resto ? `${horas}h ${String(resto).padStart(2, '0')}min` : `${horas}h`;
  }
}
