import { Component, computed, effect, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { IconComponent } from '../icon/icon.component';
import { DashboardService, TipoEstudo } from '../../services/dashboard.service';
import { CronometroService } from '../../services/cronometro.service';
import { formatarRelogio } from '../../services/cronometro';

/** Cartão do cronômetro na página "Tempo estudado". */
@Component({
  selector: 'app-cronometro',
  standalone: true,
  imports: [FormsModule, IconComponent],
  templateUrl: './cronometro.component.html',
  styleUrl: './cronometro.component.scss',
})
export class CronometroComponent {
  readonly c = inject(CronometroService);
  private readonly dashboard = inject(DashboardService);

  readonly materias = toSignal(this.dashboard.getMaterias().pipe(map((ms) => ms.filter((m) => m.ativa))), { initialValue: [] });
  readonly tipos: Array<{ id: TipoEstudo; rotulo: string }> = [
    { id: 'atividade', rotulo: 'Exercícios e atividades' },
    { id: 'video', rotulo: 'Vídeos' },
    { id: 'apostila', rotulo: 'Apostilas e leituras' },
  ];

  readonly parado = computed(() => this.c.crono().estado === 'parado');
  readonly relogio = computed(() => formatarRelogio(this.c.modo() === 'pomodoro' ? this.c.restanteMs() : this.c.estudoMs()));
  readonly estudado = computed(() => this.formatarMin(Math.floor(this.c.estudoMs() / 60000)));
  readonly nomeMateria = computed(() => this.materias().find((m) => m.id === this.c.materiaId())?.nome ?? '');

  minutosConfirmar = 0;
  erro = '';
  feedback = '';

  constructor() {
    // Escolhe uma matéria válida quando a lista chega (ou quando a escolhida foi arquivada).
    effect(() => {
      const ms = this.materias();
      if (ms.length && !ms.some((m) => m.id === this.c.materiaId())) this.c.escolherMateria(ms[0].id);
    }, { allowSignalWrites: true });
    // Ao finalizar, sugere os minutos medidos (o aluno pode ajustar).
    effect(() => {
      const pendente = this.c.pendenteMin();
      if (pendente !== null) this.minutosConfirmar = pendente;
    });
  }

  iniciar(): void {
    this.erro = '';
    this.feedback = '';
    if (!this.materias().length) {
      this.erro = 'Cadastre uma matéria antes de começar.';
      return;
    }
    this.c.iniciar();
  }

  confirmar(): void {
    const minutos = Math.floor(Number(this.minutosConfirmar));
    if (!minutos || minutos < 1 || minutos > 1440) {
      this.erro = 'Informe entre 1 e 1.440 minutos.';
      return;
    }
    const materia = this.nomeMateria();
    if (!this.c.confirmar(minutos)) {
      this.erro = 'Escolha uma matéria ativa.';
      return;
    }
    this.erro = '';
    this.feedback = `${this.formatarMin(minutos)} registrados em ${materia}.`;
  }

  descartar(): void {
    this.erro = '';
    this.feedback = 'Sessão descartada. Nada foi registrado.';
    this.c.descartar();
  }

  formatarMin(minutos: number): string {
    const h = Math.floor(minutos / 60);
    const m = minutos % 60;
    if (!h) return `${m} min`;
    return m ? `${h}h ${String(m).padStart(2, '0')}min` : `${h}h`;
  }
}
