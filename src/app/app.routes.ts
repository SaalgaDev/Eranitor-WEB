import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Eranitor — Estudar nunca foi tão organizado',
  },
  {
    path: 'sobre-nos',
    loadComponent: () =>
      import('./pages/sobre/sobre.component').then((m) => m.SobreComponent),
    title: 'Sobre nós — Eranitor',
  },
  {
    path: 'contato',
    loadComponent: () =>
      import('./pages/contato/contato.component').then(
        (m) => m.ContatoComponent
      ),
    title: 'Contato — Eranitor',
  },
  {
    path: 'baixar',
    loadComponent: () =>
      import('./pages/download/download.component').then(
        (m) => m.DownloadComponent
      ),
    title: 'Baixar o Eranitor',
  },
  { path: '**', redirectTo: '' },
];
