import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Card de recurso — usado nas grades de "Recursos principais".
 * O ícone é passado via <ng-content select="[icon]">, para manter
 * o SVG junto de onde é usado sem duplicar um catálogo de ícones.
 */
@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.scss',
})
export class FeatureCardComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
}
