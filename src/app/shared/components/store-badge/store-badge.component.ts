import { Component, Input } from '@angular/core';
import { CommonModule, NgTemplateOutlet } from '@angular/common';

export type StorePlatform = 'google-play' | 'app-store';

/**
 * Selo de loja de aplicativos.
 *
 * IMPORTANTE: o Eranitor ainda não está publicado oficialmente
 * nas lojas. Por instrução do projeto, nunca inventamos um link
 * de download — enquanto `available` for false, o selo é
 * apresentado como "em breve" e não é clicável.
 *
 * Quando o app for publicado, atualizar `url` e passar
 * `available: true` a partir da página que usa este componente.
 */
@Component({
  selector: 'app-store-badge',
  standalone: true,
  imports: [CommonModule, NgTemplateOutlet],
  templateUrl: './store-badge.component.html',
  styleUrl: './store-badge.component.scss',
})
export class StoreBadgeComponent {
  @Input() platform: StorePlatform = 'google-play';
  @Input() available = false;
  @Input() url?: string;

  get label(): string {
    return this.platform === 'google-play' ? 'Google Play' : 'App Store';
  }

  get sublabel(): string {
    return this.available ? 'Disponível em' : 'Em breve em';
  }
}
