import { Component, computed, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';
import { IconComponent } from '../icon/icon.component';
import { CronometroService } from '../../services/cronometro.service';
import { formatarRelogio } from '../../services/cronometro';

/** Indicador pequeno do cronômetro, visível em todas as páginas do dashboard. */
@Component({
  selector: 'app-cronometro-mini',
  standalone: true,
  imports: [RouterLink, IconComponent],
  template: `
    @if (c.ativo() && !c.telaCheia() && !naPaginaDoTempo()) {
      <div class="mini" [class.mini--pausa]="c.modo() === 'pomodoro' && c.fase() !== 'foco'">
        <a class="mini__link" routerLink="/dashboard/tempo-estudado" [attr.aria-label]="rotulo()">
          <app-icon name="timer" />
          @if (c.pendenteMin() !== null) {
            <span>Confirmar tempo</span>
          } @else {
            <span class="mini__phase">{{ c.rotuloFase() }}</span>
            <span class="mini__time">{{ relogio() }}</span>
          }
        </a>
        @if (c.pendenteMin() === null) {
          <button type="button" class="mini__btn" (click)="c.rodando() ? c.pausar() : c.iniciar()" [attr.aria-label]="c.rodando() ? 'Pausar cronômetro' : 'Retomar cronômetro'">
            <app-icon [name]="c.rodando() ? 'pause' : 'play'" />
          </button>
          <button type="button" class="mini__btn" (click)="c.abrirTelaCheia()" aria-label="Abrir cronômetro em tela cheia">
            <app-icon name="maximize" />
          </button>
        }
      </div>
    }
  `,
  styles: `
    :host { position: fixed; right: 16px; bottom: 16px; z-index: 50; }
    .mini {
      display: flex; align-items: center; gap: 4px; padding: 4px;
      border-radius: 999px; background: var(--navy-800); color: #fff;
      box-shadow: 0 8px 24px rgb(0 0 0 / 0.25); border: 1px solid rgba(255, 255, 255, 0.12);
    }
    .mini__link {
      display: inline-flex; align-items: center; gap: 8px; min-height: 40px; padding: 0 12px;
      color: inherit; text-decoration: none; font-weight: 700; border-radius: 999px;
    }
    .mini__link:hover { background: rgba(255, 255, 255, 0.08); }
    .mini__phase { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.06em; color: var(--ice-400); }
    .mini--pausa .mini__phase { color: #8fe0b5; }
    .mini__time { font-variant-numeric: tabular-nums; }
    .mini__btn {
      display: grid; place-items: center; width: 40px; height: 40px; border: 0; border-radius: 999px;
      background: rgba(255, 255, 255, 0.08); color: inherit; cursor: pointer;
    }
    .mini__btn:hover { background: rgba(255, 255, 255, 0.16); }
  `,
})
export class CronometroMiniComponent {
  readonly c = inject(CronometroService);
  private readonly router = inject(Router);
  /** Na própria página do tempo o cartão já aparece; o indicador seria repetido. */
  readonly naPaginaDoTempo = toSignal(
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd), map(() => this.router.url.startsWith('/dashboard/tempo-estudado'))),
    { initialValue: this.router.url.startsWith('/dashboard/tempo-estudado') }
  );
  readonly relogio = computed(() => formatarRelogio(this.c.modo() === 'pomodoro' ? this.c.restanteMs() : this.c.estudoMs()));
  readonly rotulo = computed(() => this.c.pendenteMin() !== null
    ? 'Sessão finalizada: confirmar o tempo estudado'
    : `Cronômetro: ${this.c.rotuloFase()}, ${this.relogio()}. Abrir tempo estudado`);
}
