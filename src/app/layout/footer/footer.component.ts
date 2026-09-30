import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../../shared/components/logo/logo.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, LogoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly year = new Date().getFullYear();

  readonly siteLinks = [
    { path: '/', label: 'Início' },
    { path: '/sobre-nos', label: 'Sobre nós' },
    { path: '/baixar', label: 'Download' },
    { path: '/contato', label: 'Contato' },
  ];

  // PLACEHOLDER — atualizar com os contatos e redes reais do projeto.
  readonly contactEmail = 'contato@eranitor.com.br';

  readonly socialLinks = [
    { name: 'Instagram', url: '#', icon: 'instagram' as const },
    { name: 'Facebook', url: '#', icon: 'facebook' as const },
    { name: 'TikTok', url: '#', icon: 'tiktok' as const },
  ];
}
