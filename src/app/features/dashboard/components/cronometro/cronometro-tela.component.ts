import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, ViewChild, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { IconComponent } from '../icon/icon.component';
import { DashboardService } from '../../services/dashboard.service';
import { CronometroService } from '../../services/cronometro.service';
import { formatarRelogio } from '../../services/cronometro';

const RAIO = 140;
const CIRCUNFERENCIA = 2 * Math.PI * RAIO;

/**
 * Tela cheia do cronômetro ("modo foco"): relógio grande, anel de progresso da fase e
 * poucos controles, como uma tela de descanso. Usa a API de tela cheia do navegador
 * quando ela existe; Esc ou "Minimizar" volta ao normal.
 */
@Component({
  selector: 'app-cronometro-tela',
  standalone: true,
  imports: [IconComponent],
  template: `
    <div class="focus" [class.focus--pausa]="emPausa()" role="dialog" aria-modal="true" aria-label="Cronômetro em tela cheia">
      <div class="focus__glow" aria-hidden="true"></div>

      <header class="focus__top">
        <span class="focus__subject">{{ nomeMateria() || 'Sessão de estudo' }}</span>
        <button type="button" class="focus__icon" (click)="minimizar()" aria-label="Sair da tela cheia" title="Minimizar (Esc)">
          <app-icon name="minimize" />
        </button>
      </header>

      <div class="focus__center">
        <div class="focus__ring">
          @if (c.modo() === 'pomodoro') {
            <svg viewBox="0 0 320 320" aria-hidden="true">
              <circle cx="160" cy="160" [attr.r]="raio" class="focus__track" />
              <circle cx="160" cy="160" [attr.r]="raio" class="focus__progress"
                [attr.stroke-dasharray]="circ" [attr.stroke-dashoffset]="circ * (1 - c.progressoFase())" />
            </svg>
          }
          <div class="focus__readout">
            <span class="focus__phase">{{ c.rotuloFase() }}</span>
            <span class="focus__time" role="timer" aria-live="off">{{ relogio() }}</span>
            <span class="focus__meta">
              @if (c.modo() === 'pomodoro') { {{ c.focosConcluidos() }}/{{ c.crono().config.ciclos }} focos · }
              estudado {{ estudado() }}
            </span>
          </div>
        </div>
        <p class="focus__hint">{{ dica() }}</p>
      </div>

      <footer class="focus__controls">
        @if (c.rodando()) {
          <button #principal type="button" class="focus__btn focus__btn--main" (click)="c.pausar()"><app-icon name="pause" /> Pausar</button>
        } @else {
          <button #principal type="button" class="focus__btn focus__btn--main" (click)="c.iniciar()"><app-icon name="play" /> {{ c.crono().estado === 'parado' ? 'Iniciar' : 'Retomar' }}</button>
        }
        @if (c.modo() === 'pomodoro' && c.crono().estado !== 'parado') {
          <button type="button" class="focus__btn" (click)="c.pularFase()"><app-icon name="skip" /> Pular fase</button>
        }
        @if (c.crono().estado !== 'parado') {
          <button type="button" class="focus__btn" (click)="c.finalizar()"><app-icon name="stop" /> Finalizar</button>
        }
      </footer>

      <p class="sr-only" aria-live="polite">{{ c.anuncio() }}</p>
    </div>
  `,
  styleUrl: './cronometro-tela.component.scss',
})
export class CronometroTelaComponent implements AfterViewInit, OnDestroy {
  readonly c = inject(CronometroService);
  private readonly materias = toSignal(inject(DashboardService).getMaterias(), { initialValue: [] });
  @ViewChild('principal') principal?: ElementRef<HTMLButtonElement>;

  readonly raio = RAIO;
  readonly circ = CIRCUNFERENCIA;
  private readonly opener = document.activeElement as HTMLElement | null;

  readonly emPausa = computed(() => this.c.modo() === 'pomodoro' && this.c.fase() !== 'foco');
  readonly relogio = computed(() => formatarRelogio(this.c.modo() === 'pomodoro' ? this.c.restanteMs() : this.c.estudoMs()));
  readonly estudado = computed(() => {
    const min = Math.floor(this.c.estudoMs() / 60000);
    const h = Math.floor(min / 60);
    return h ? `${h}h ${String(min % 60).padStart(2, '0')}min` : `${min} min`;
  });
  readonly nomeMateria = computed(() => this.materias().find((m) => m.id === this.c.materiaId())?.nome ?? '');
  readonly dica = computed(() => {
    if (this.c.crono().estado === 'parado') return 'Tudo pronto. Quando quiser, comece.';
    if (!this.c.rodando()) return 'Pausado. Retome quando estiver pronto.';
    if (this.c.modo() === 'livre') return 'Foco no que importa. O tempo está sendo contado.';
    return this.emPausa() ? 'Levante, alongue, beba água. O foco volta sozinho.' : 'Uma coisa de cada vez. A pausa vem sozinha.';
  });

  private readonly overflowAnterior = document.body.style.overflow;

  ngAfterViewInit(): void {
    document.body.style.overflow = 'hidden';
    this.principal?.nativeElement.focus({ preventScroll: true });
    try {
      if (!document.fullscreenElement) void document.documentElement.requestFullscreen?.().catch(() => undefined);
    } catch { }
  }

  ngOnDestroy(): void {
    document.body.style.overflow = this.overflowAnterior;
    try {
      if (document.fullscreenElement) void document.exitFullscreen().catch(() => undefined);
    } catch { }
    this.opener?.focus?.();
  }

  @HostListener('document:keydown.escape')
  minimizar(): void { this.c.fecharTelaCheia(); }

  /** Se o aluno sair da tela cheia do navegador (Esc, F11), fecha também o modo foco. */
  @HostListener('document:fullscreenchange')
  aoMudarTelaCheia(): void {
    if (!document.fullscreenElement) this.c.fecharTelaCheia();
  }
}
