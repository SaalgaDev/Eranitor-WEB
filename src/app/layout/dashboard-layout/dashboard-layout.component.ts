import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { NavSidebarComponent } from '../../features/dashboard/components/nav-sidebar/nav-sidebar.component';
import { DialogComponent } from '../../features/dashboard/components/dialog/dialog.component';
import { ConfirmService } from '../../features/dashboard/services/confirm.service';
import { DashboardService } from '../../features/dashboard/services/dashboard.service';
import { CronometroService } from '../../features/dashboard/services/cronometro.service';
import { CronometroTelaComponent } from '../../features/dashboard/components/cronometro/cronometro-tela.component';
import { CronometroMiniComponent } from '../../features/dashboard/components/cronometro/cronometro-mini.component';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [RouterOutlet, NavSidebarComponent, DialogComponent, CronometroTelaComponent, CronometroMiniComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss',
  host: { class: 'dash' },
})
export class DashboardLayoutComponent {
  readonly confirm = inject(ConfirmService);
  readonly aviso = signal('');
  readonly cronometro = inject(CronometroService);
  private timer?: ReturnType<typeof setTimeout>;

  constructor() {
    inject(DashboardService).avisos$.pipe(takeUntilDestroyed()).subscribe((mensagem) => {
      this.aviso.set(mensagem);
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.aviso.set(''), 7000);
    });
  }

  fecharAviso(): void {
    clearTimeout(this.timer);
    this.aviso.set('');
  }
}
