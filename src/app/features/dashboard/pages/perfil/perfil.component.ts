import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { AuthService } from '../../../../core/auth/auth.service';
import { DashboardService } from '../../services/dashboard.service';
import { IconComponent } from '../../components/icon/icon.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [AsyncPipe, IconComponent],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss',
})
export class PerfilComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly mock = inject(DashboardService);

  readonly user = this.auth.getCurrentUser();

  readonly resumo$ = combineLatest([this.mock.materias$, this.mock.tarefas$, this.mock.resumoTempo$]).pipe(
    map(([materias, tarefas, tempo]) => ({
      materias: materias.filter((m) => m.ativa).length,
      tarefas: tarefas.length,
      concluidas: tarefas.filter((t) => t.status === 'concluida').length,
      tempo: this.formatar(tempo.totalMinutos),
    }))
  );

  get iniciais(): string {
    const partes = (this.user?.nome ?? '?').trim().split(/\s+/);
    return ((partes[0]?.[0] ?? '') + (partes.length > 1 ? partes[partes.length - 1][0] : '')).toUpperCase();
  }

  sair(): void {
    this.auth.logout();
    void this.router.navigate(['/auth/login']);
  }

  private formatar(minutos: number): string {
    const horas = Math.floor(minutos / 60);
    const resto = minutos % 60;
    if (!horas) return `${resto}min`;
    return resto ? `${horas}h${String(resto).padStart(2, '0')}` : `${horas}h`;
  }
}
