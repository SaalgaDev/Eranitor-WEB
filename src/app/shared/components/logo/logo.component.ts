import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

/**
 * Logo do Eranitor (wordmark + capelo de formatura).
 * `variant` controla a cor via CSS (a mesma marca é usada sobre
 * fundo navy e sobre fundo claro).
 */
@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
})
export class LogoComponent {
  /** 'light' = marca clara para uso sobre fundo navy (padrão). 'dark' = marca escura para uso sobre fundo claro. */
  @Input() variant: 'light' | 'dark' = 'light';
  /** Se falso, mostra apenas o símbolo (uso em espaços reduzidos, ex. favicon-like). */
  @Input() showWordmark = true;
}
