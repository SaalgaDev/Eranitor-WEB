import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreBadgeComponent } from '../../shared/components/store-badge/store-badge.component';
import { PhoneMockupComponent } from '../../shared/components/phone-mockup/phone-mockup.component';

@Component({
  selector: 'app-download',
  standalone: true,
  imports: [CommonModule, StoreBadgeComponent, PhoneMockupComponent],
  templateUrl: './download.component.html',
  styleUrl: './download.component.scss',
})
export class DownloadComponent {
  // Enquanto o app não é publicado oficialmente, nenhum link real
  // é usado (ver seção 14 da instrução mestre). Trocar `available`
  // para `true` e preencher `url` quando o app estiver nas lojas.
  readonly stores = [
    { platform: 'google-play' as const, available: false, url: undefined },
    { platform: 'app-store' as const, available: false, url: undefined },
  ];

  readonly steps = [
    {
      title: 'Aguarde o lançamento',
      text: 'O Eranitor está na etapa final de desenvolvimento. Assim que for publicado, os links oficiais aparecerão nesta página.',
    },
    {
      title: 'Baixe nas lojas oficiais',
      text: 'Instale o app pela Google Play ou App Store — nunca por arquivos de fontes desconhecidas.',
    },
    {
      title: 'Crie sua conta e comece',
      text: 'Cadastre suas matérias, defina uma meta semanal e comece o primeiro ciclo: planejar.',
    },
  ];
}
