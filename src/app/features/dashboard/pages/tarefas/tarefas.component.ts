import { Component, inject } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { DashboardService, StatusTarefa, Tarefa } from '../../services/dashboard.service';
import { ConfirmService } from '../../services/confirm.service';
import { IconComponent } from '../../components/icon/icon.component';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { detalharConta, explicarPrioridade } from '../../services/prioridade';

type Filtro = 'todas' | StatusTarefa;

@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [AsyncPipe, DatePipe, FormsModule, IconComponent, DialogComponent],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.scss',
})
export class TarefasComponent {
  readonly mock = inject(DashboardService);
  private readonly confirm = inject(ConfirmService);

  readonly tarefas$ = this.mock.getTarefas();
  readonly materiasAtivas$ = this.mock.getMaterias().pipe(map((materias) => materias.filter((m) => m.ativa)));

  readonly filtros: Array<{ id: Filtro; rotulo: string }> = [
    { id: 'todas', rotulo: 'Todas' },
    { id: 'pendente', rotulo: 'Pendentes' },
    { id: 'atrasada', rotulo: 'Atrasadas' },
    { id: 'concluida', rotulo: 'Concluídas' },
  ];
  readonly rotuloStatus: Record<StatusTarefa, string> = { pendente: 'Pendente', atrasada: 'Atrasada', concluida: 'Concluída' };
  readonly cores = [
    { nome: 'Azul', valor: '#23447f' },
    { nome: 'Vermelho', valor: '#ff3b40' },
    { nome: 'Amarelo', valor: '#ffd954' },
    { nome: 'Verde', valor: '#00bf6f' },
  ];

  readonly explicar = explicarPrioridade;
  readonly conta = detalharConta;

  filtro: Filtro = 'todas';
  formAberto = false;
  editando: Tarefa | null = null;
  titulo = '';
  materiaId = 0;
  prazo = '';
  descricao = '';
  cor = '#ff3b40';
  erro = '';
  feedback = '';

  constructor() {
    // Começa com a matéria selecionada (os ids agora vêm da API, não são mais 1, 2, 3…).
    this.mock.materiaSelecionada$.pipe(takeUntilDestroyed()).subscribe((id) => {
      if (!this.formAberto) this.materiaId = id;
    });
  }

  filtradas(tarefas: Tarefa[], filtro: Filtro = this.filtro): Tarefa[] {
    return filtro === 'todas' ? tarefas : tarefas.filter((t) => t.status === filtro);
  }

  contar(tarefas: Tarefa[], filtro: Filtro): number {
    return this.filtradas(tarefas, filtro).length;
  }

  novaTarefa(): void {
    this.limpar();
    this.formAberto = true;
  }

  editar(tarefa: Tarefa): void {
    this.editando = tarefa;
    this.titulo = tarefa.titulo;
    this.materiaId = tarefa.materiaId;
    this.prazo = tarefa.prazo ?? '';
    this.descricao = tarefa.descricao;
    this.cor = tarefa.cor ?? '#ff3b40';
    this.erro = '';
    this.formAberto = true;
  }

  salvar(): void {
    const titulo = this.titulo.trim();
    if (!titulo) {
      this.erro = 'Dê um título para a tarefa.';
      return;
    }
    if (this.editando) {
      this.mock.salvarTarefa({ ...this.editando, titulo, materiaId: this.materiaId, prazo: this.prazo || null, descricao: this.descricao.trim(), cor: this.cor });
      this.feedback = 'Tarefa atualizada.';
    } else {
      const criada = this.mock.adicionarTarefa(titulo, this.prazo || null, this.materiaId, this.cor, this.descricao);
      if (!criada) return;
      this.feedback = this.prazo ? 'Tarefa criada. O prazo já aparece na agenda.' : 'Tarefa criada.';
    }
    this.fechar();
  }

  async remover(tarefa: Tarefa): Promise<void> {
    if (!(await this.confirm.ask('Excluir tarefa', `“${tarefa.titulo}” sai da lista e da agenda.`))) return;
    this.mock.removerTarefa(tarefa.id);
    this.feedback = 'Tarefa excluída.';
  }

  fechar(): void {
    this.formAberto = false;
    this.limpar();
  }

  private limpar(): void {
    this.editando = null;
    this.titulo = '';
    this.prazo = '';
    this.descricao = '';
    this.cor = '#ff3b40';
    this.erro = '';
  }
}
