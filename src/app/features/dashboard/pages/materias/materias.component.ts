import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DashboardService, Materia, Topico } from '../../services/dashboard.service';
import { ConfirmService } from '../../services/confirm.service';
import { IconComponent } from '../../components/icon/icon.component';
import { DificuldadeComponent } from '../../components/dificuldade/dificuldade.component';
import { rotuloDificuldade } from '../../services/prioridade';

@Component({
  selector: 'app-materias',
  standalone: true,
  imports: [FormsModule, IconComponent, DificuldadeComponent],
  templateUrl: './materias.component.html',
  styleUrl: './materias.component.scss',
})
export class MateriasComponent {
  readonly mock = inject(DashboardService);
  private readonly confirm = inject(ConfirmService);

  materias: Materia[] = [];
  materiaId = 0;
  topicoId: number | null = null;

  novaMateria = '';
  novaDificuldade = 3;
  novoTopico = '';
  nomeMateria = '';
  nomeTopico = '';
  topicoConcluido = false;
  feedback = '';

  constructor() {
    const pedida = Number(inject(ActivatedRoute).snapshot.queryParamMap.get('materia'));
    this.mock.getMaterias().pipe(takeUntilDestroyed()).subscribe((materias) => {
      this.materias = materias;
      if (pedida && !this.materiaId && materias.some((m) => m.id === pedida && m.ativa)) this.materiaId = pedida;
      if (!this.materia) this.materiaId = this.ativas[0]?.id ?? 0;
      if (!this.topico) this.topicoId = this.materia?.topicos[0]?.id ?? null;
      this.sincronizar();
    });
  }

  get ativas(): Materia[] { return this.materias.filter((m) => m.ativa); }
  get materia(): Materia | undefined { return this.materias.find((m) => m.id === this.materiaId && m.ativa); }
  get topico(): Topico | undefined { return this.materia?.topicos.find((t) => t.id === this.topicoId); }

  readonly rotuloDificuldade = rotuloDificuldade;

  concluidos(materia: Materia): number {
    return materia.topicos.filter((t) => t.concluido).length;
  }

  selecionarMateria(materia: Materia): void {
    this.materiaId = materia.id;
    this.topicoId = materia.topicos[0]?.id ?? null;
    this.feedback = '';
    this.sincronizar();
  }

  selecionarTopico(topico: Topico): void {
    this.topicoId = topico.id;
    this.sincronizar();
  }

  adicionarMateria(): void {
    if (!this.mock.adicionarMateria(this.novaMateria, this.novaDificuldade)) {
      this.feedback = 'Informe um nome que ainda não esteja na lista.';
      return;
    }
    this.materiaId = this.materias.at(-1)?.id ?? this.materiaId;
    this.topicoId = null;
    this.novaMateria = '';
    this.novaDificuldade = 3;
    this.feedback = 'Matéria adicionada.';
    this.sincronizar();
  }

  renomearMateria(): void {
    if (!this.materia) return;
    this.feedback = this.mock.renomearMateria(this.materia.id, this.nomeMateria)
      ? 'Nome da matéria atualizado.'
      : 'Use um nome válido e diferente das outras matérias.';
  }

  definirDificuldade(valor: number): void {
    if (!this.materia) return;
    this.feedback = this.mock.definirDificuldade(this.materia.id, valor)
      ? `Dificuldade de ${this.materia.nome}: ${rotuloDificuldade(valor).toLocaleLowerCase()}. A prioridade das tarefas já foi recalculada.`
      : 'Escolha uma dificuldade de 1 a 5.';
  }

  async arquivarMateria(): Promise<void> {
    const materia = this.materia;
    if (!materia) return;
    const ok = await this.confirm.ask('Arquivar matéria', `${materia.nome} sai da lista. Tópicos e tarefas ligados a ela ficam guardados.`, 'Arquivar');
    if (!ok) return;
    this.mock.arquivarMateria(materia.id);
    this.feedback = `${materia.nome} foi arquivada.`;
  }

  adicionarTopico(): void {
    if (!this.materia) return;
    if (!this.mock.adicionarTopico(this.materia.id, this.novoTopico)) {
      this.feedback = 'Informe um tópico que ainda não esteja nesta matéria.';
      return;
    }
    this.novoTopico = '';
    this.topicoId = this.materia.topicos.at(-1)?.id ?? null;
    this.feedback = 'Tópico adicionado.';
    this.sincronizar();
  }

  alternarTopico(topico: Topico): void {
    if (!this.materia) return;
    this.mock.alternarTopico(this.materia.id, topico.id);
    this.sincronizar();
  }

  salvarTopico(): void {
    if (!this.topico || !this.materia) return;
    this.feedback = this.mock.salvarTopico(this.materia.id, this.topico.id, this.nomeTopico, this.topicoConcluido)
      ? 'Tópico atualizado.'
      : 'Informe um título válido e único nesta matéria.';
  }

  async removerTopico(): Promise<void> {
    const topico = this.topico;
    const materia = this.materia;
    if (!topico || !materia) return;
    if (!(await this.confirm.ask('Excluir tópico', `“${topico.nome}” será removido de ${materia.nome}.`))) return;
    this.mock.removerTopico(materia.id, topico.id);
    this.topicoId = this.materia?.topicos[0]?.id ?? null;
    this.feedback = 'Tópico excluído.';
    this.sincronizar();
  }

  private sincronizar(): void {
    this.nomeMateria = this.materia?.nome ?? '';
    this.nomeTopico = this.topico?.nome ?? '';
    this.topicoConcluido = this.topico?.concluido ?? false;
  }
}
