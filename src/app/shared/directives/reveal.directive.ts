import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  @Input() appReveal: string = 'up';
  @Input() revealDelay = 0;

  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {}

  ngOnInit(): void {
    const native = this.el.nativeElement;
    this.renderer.addClass(native, 'reveal');
    if (this.appReveal !== 'up') {
      this.renderer.addClass(native, `reveal--${this.appReveal}`);
    }
    if (this.revealDelay > 0) {
      native.style.setProperty('--reveal-delay', `${this.revealDelay}ms`);
    }
    if (typeof IntersectionObserver === 'undefined') {
      this.renderer.addClass(native, 'is-visible');
      return;
    }
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.renderer.addClass(native, 'is-visible');
            this.observer?.unobserve(native);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    this.observer.observe(native);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.observer = null;
  }
}
