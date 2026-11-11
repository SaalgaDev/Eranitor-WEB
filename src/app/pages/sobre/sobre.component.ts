import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule, RouterLink, PageHeroComponent, RevealDirective, TranslatePipe],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss',
})
export class SobreComponent implements AfterViewInit {
  readonly stageIndexes = [0, 1, 2, 3, 4, 5];
  readonly valueIndexes = [0, 1, 2];
  readonly signalIndexes = [0, 1, 2];
  readonly statIndexes = [0, 1, 2, 3];
  readonly whoIndexes = [0, 1, 2];
  readonly diffIndexes = [0, 1, 2, 3];
  readonly phaseIndexes = [0, 1, 2, 3];
  readonly honestIndexes = [0, 1, 2];
  readonly futureIndexes = [0, 1, 2];
  readonly guideLinks = [
    { key: 'page.about.guide.0', target: 'origem' },
    { key: 'page.about.guide.1', target: 'publico' },
    { key: 'page.about.guide.2', target: 'diferenciais' },
    { key: 'page.about.guide.3', target: 'jornada' },
  ];

  constructor(private host: ElementRef<HTMLElement>) {}

  scrollTo(targetId: string): void {
    const el = this.host.nativeElement.querySelector<HTMLElement>(`#${targetId}`);
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
    if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
    el.focus({ preventScroll: true });
  }

  ngAfterViewInit(): void {
    const els = Array.from(this.host.nativeElement.querySelectorAll<HTMLElement>('[data-count]'));
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => this.setFinal(el));
      return;
    }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          io.unobserve(el);
          if (reduced) {
            this.setFinal(el);
          } else {
            this.animate(el);
          }
        }
      },
      { threshold: 0.4 }
    );
    els.forEach((el) => io.observe(el));
  }

  private targetOf(el: HTMLElement): number {
    return Number(el.dataset['count'] ?? '0') || 0;
  }

  private setFinal(el: HTMLElement): void {
    el.textContent = String(this.targetOf(el));
  }

  private animate(el: HTMLElement): void {
    const target = this.targetOf(el);
    const dur = 900;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = String(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
}
