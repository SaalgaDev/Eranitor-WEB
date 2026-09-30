import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface LoopNode {
  label: string;
  x: number;
  y: number;
}

/**
 * Elemento de assinatura visual do site: representa o ciclo
 * central da proposta do Eranitor —
 * Planejar → Estudar → Registrar → Analisar → Adaptar → Melhorar.
 *
 * Não é decoração: a ordem e a natureza cíclica das etapas são
 * informação real sobre como o produto funciona.
 */
@Component({
  selector: 'app-loop-diagram',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loop-diagram.component.html',
  styleUrl: './loop-diagram.component.scss',
})
export class LoopDiagramComponent {
  @Input() stages: string[] = [
    'Planejar',
    'Estudar',
    'Registrar',
    'Analisar',
    'Adaptar',
    'Melhorar',
  ];

  readonly size = 420;
  readonly radius = 158;

  get nodes(): LoopNode[] {
    const center = this.size / 2;
    const count = this.stages.length;
    return this.stages.map((label, i) => {
      // Começa no topo (-90°) e distribui igualmente no círculo.
      const angle = (Math.PI * 2 * i) / count - Math.PI / 2;
      return {
        label,
        x: Math.round((center + this.radius * Math.cos(angle)) * 100) / 100,
        y: Math.round((center + this.radius * Math.sin(angle)) * 100) / 100,
      };
    });
  }

  get pathD(): string {
    const pts = this.nodes;
    if (!pts.length) return '';
    const [first, ...rest] = pts;
    const line = rest.map((p) => `L ${p.x} ${p.y}`).join(' ');
    return `M ${first.x} ${first.y} ${line} Z`;
  }

  trackByLabel(_index: number, node: LoopNode): string {
    return node.label;
  }
}
