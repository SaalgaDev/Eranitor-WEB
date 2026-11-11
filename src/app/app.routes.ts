import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { AuthGuard } from './core/auth/auth.guard';
import { GuestGuard } from './core/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Eranitor | Estudar nunca foi tão organizado',
  },
  {
    path: 'sobre-nos',
    loadComponent: () =>
      import('./pages/sobre/sobre.component').then((m) => m.SobreComponent),
    title: 'Sobre nós | Eranitor',
  },
  {
    path: 'contato',
    loadComponent: () =>
      import('./pages/contato/contato.component').then(
        (m) => m.ContatoComponent
      ),
    title: 'Contato | Eranitor',
  },
  {
    path: 'baixar',
    loadComponent: () =>
      import('./pages/download/download.component').then(
        (m) => m.DownloadComponent
      ),
    title: 'Baixar o Eranitor',
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    canActivate: [GuestGuard],
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./features/auth/login/login.component').then(
            (m) => m.LoginComponent
          ),
        title: 'Login | Eranitor',
      },
      {
        path: 'cadastro',
        loadComponent: () =>
          import('./features/auth/register/register.component').then(
            (m) => m.RegisterComponent
          ),
        title: 'Cadastro | Eranitor',
      },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
        title: 'Dashboard | Eranitor',
      },
      {
        path: 'agenda',
        loadComponent: () =>
          import('./features/dashboard/pages/agenda/agenda.component').then(
            (m) => m.AgendaComponent
          ),
        title: 'Agenda | Eranitor',
      },
      {
        path: 'tarefas',
        loadComponent: () =>
          import('./features/dashboard/pages/tarefas/tarefas.component').then(
            (m) => m.TarefasComponent
          ),
        title: 'Tarefas | Eranitor',
      },
      {
        path: 'materias',
        loadComponent: () =>
          import('./features/dashboard/pages/materias/materias.component').then(
            (m) => m.MateriasComponent
          ),
        title: 'Minhas matérias | Eranitor',
      },
      {
        path: 'tempo-estudado',
        loadComponent: () =>
          import('./features/dashboard/pages/tempo-estudado/tempo-estudado.component').then(
            (m) => m.TempoEstudadoComponent
          ),
        title: 'Tempo de estudo | Eranitor',
      },
      {
        path: 'perfil',
        loadComponent: () =>
          import('./features/dashboard/pages/perfil/perfil.component').then(
            (m) => m.PerfilComponent
          ),
        title: 'Meu perfil | Eranitor',
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
