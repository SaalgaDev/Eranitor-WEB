import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Página de Contato — 100% estática, sem formulário nem backend
 * (a instrução mestre do projeto veda backend/login no site
 * institucional). Os canais abaixo são placeholders até os
 * dados oficiais serem definidos.
 */
@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss',
})
export class ContatoComponent {
  readonly channels = [
    {
      icon: 'mail' as const,
      title: 'E-mail',
      value: 'contato@eranitor.com.br',
      href: 'mailto:contato@eranitor.com.br',
    },
    {
      icon: 'instagram' as const,
      title: 'Instagram',
      value: '@eranitor',
      href: '#',
    },
  ];
}
