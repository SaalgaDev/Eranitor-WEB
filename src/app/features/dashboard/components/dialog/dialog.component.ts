import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

let nextId = 0;

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [IconComponent],
  template: `
    <div class="dialog-backdrop" (click)="close.emit()">
      <section
        #card
        class="dialog"
        role="dialog"
        aria-modal="true"
        [attr.aria-labelledby]="titleId"
        (click)="$event.stopPropagation()"
      >
        <header class="dialog__head">
          <h2 class="dialog__title" [id]="titleId">{{ title }}</h2>
          <button type="button" class="icon-btn icon-btn--quiet icon-btn--sm" (click)="close.emit()" aria-label="Fechar">
            <app-icon name="close" />
          </button>
        </header>
        <ng-content />
      </section>
    </div>
  `,
})
export class DialogComponent implements AfterViewInit, OnDestroy {
  @Input({ required: true }) title!: string;
  @Output() readonly close = new EventEmitter<void>();
  @ViewChild('card') card!: ElementRef<HTMLElement>;

  readonly titleId = `dash-dialog-${++nextId}`;
  private readonly opener = document.activeElement as HTMLElement | null;

  ngAfterViewInit(): void {
    const el = this.card.nativeElement;
    const first = el.querySelector<HTMLElement>('input, select, textarea') ?? el.querySelector<HTMLElement>('.dialog__actions button:last-child');
    queueMicrotask(() => first?.focus());
  }

  ngOnDestroy(): void {
    this.opener?.focus?.();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close.emit();
  }

  @HostListener('keydown.tab', ['$event'])
  @HostListener('keydown.shift.tab', ['$event'])
  trapFocus(event: Event): void {
    const items = Array.from(
      this.card.nativeElement.querySelectorAll<HTMLElement>('button, input, select, textarea, a[href]')
    ).filter((item) => !item.hasAttribute('disabled'));
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    const backwards = (event as KeyboardEvent).shiftKey;
    if (backwards && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!backwards && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
}
