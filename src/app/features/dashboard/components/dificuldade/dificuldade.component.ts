import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NIVEIS_DIFICULDADE, rotuloDificuldade } from '../../services/prioridade';

let proximoId = 0;

/** Escolha da dificuldade da matéria (1 a 5), feita com botões de opção nativos. */
@Component({
  selector: 'app-dificuldade',
  standalone: true,
  template: `
    <fieldset class="difficulty">
      <legend class="field__label">{{ legenda }} <span class="difficulty__value">{{ rotulo }}</span></legend>
      <div class="difficulty__scale">
        @for (nivel of niveis; track nivel.valor) {
          <label class="difficulty__option" [title]="nivel.rotulo">
            <input
              type="radio"
              [name]="nome"
              [value]="nivel.valor"
              [checked]="nivel.valor === valor"
              (change)="escolher(nivel.valor)"
            />
            <span aria-hidden="true">{{ nivel.valor }}</span>
            <span class="sr-only">{{ nivel.valor }} – {{ nivel.rotulo }}</span>
          </label>
        }
      </div>
      @if (dica) { <span class="field__hint">{{ dica }}</span> }
    </fieldset>
  `,
  styles: `
    :host { display: block; }
    .difficulty { margin: 0; padding: 0; border: 0; min-width: 0; display: grid; gap: 8px; }
    .difficulty legend { padding: 0; display: flex; justify-content: space-between; gap: 8px; width: 100%; }
    .difficulty__value { font-weight: 700; color: var(--d-on-panel); }
    .difficulty__scale { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 6px; }
    .difficulty__option { position: relative; display: block; cursor: pointer; }
    .difficulty__option input { position: absolute; inset: 0; opacity: 0; margin: 0; cursor: pointer; }
    .difficulty__option > span[aria-hidden] {
      display: grid; place-items: center; min-height: 40px;
      border: 1px solid var(--d-line); border-radius: var(--d-r-control);
      color: var(--d-on-panel-muted); font-weight: 700;
      transition: background 150ms ease, color 150ms ease, border-color 150ms ease;
    }
    .difficulty__option:hover > span[aria-hidden] { color: var(--d-on-panel); border-color: var(--d-accent); }
    .difficulty__option input:checked + span { background: var(--d-accent); border-color: var(--d-accent); color: var(--navy-950); }
    .difficulty__option input:focus-visible + span { outline: 2px solid var(--d-accent); outline-offset: 2px; }
  `,
})
export class DificuldadeComponent {
  @Input() valor = 3;
  @Input() legenda = 'Dificuldade';
  @Input() dica = '';
  @Output() valorChange = new EventEmitter<number>();

  readonly niveis = NIVEIS_DIFICULDADE;
  readonly nome = `dificuldade-${++proximoId}`;

  get rotulo(): string { return rotuloDificuldade(this.valor); }

  escolher(valor: number): void {
    this.valor = valor;
    this.valorChange.emit(valor);
  }
}
