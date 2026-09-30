import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export type CtaVariant = 'primary' | 'secondary' | 'ghost';

/**
 * Botão de call-to-action padronizado.
 * Usar em vez de <button>/<a> estilizados manualmente, para manter
 * consistência visual e de estados de foco em todo o site.
 */
@Component({
  selector: 'app-cta-button',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cta-button.component.html',
  styleUrl: './cta-button.component.scss',
})
export class CtaButtonComponent {
  /** Rota interna do Angular (ex: '/baixar'). Use isto OU href, não ambos. */
  @Input() routerLink?: string;
  /** Link externo ou âncora (ex: '#recursos'). */
  @Input() href?: string;
  @Input() variant: CtaVariant = 'primary';
  @Input() size: 'md' | 'lg' = 'md';
}
