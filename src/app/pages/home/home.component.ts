import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PhoneMockupComponent, PhoneScreen } from '../../shared/components/phone-mockup/phone-mockup.component';
import { FeatureCardComponent } from '../../shared/components/feature-card/feature-card.component';
import { StoreBadgeComponent } from '../../shared/components/store-badge/store-badge.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, PhoneMockupComponent, FeatureCardComponent, StoreBadgeComponent, RevealDirective, TranslatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  readonly slideKeys: PhoneScreen[] = ['plan', 'track', 'review'];
  readonly featureIcons = ['book', 'flag', 'calendar', 'clock', 'target', 'chart'];
  readonly featureIndexes = [0, 1, 2, 3, 4, 5];
  readonly cycleIndexes = [0, 1, 2, 3, 4, 5];
  readonly audienceIndexes = [0, 1, 2];

  activeSlide = 0;
  autoplay = true;
  private timer: ReturnType<typeof setInterval> | null = null;
  private reducedMotion = false;
  private finePointer = false;

  ngOnInit(): void {
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.finePointer = window.matchMedia('(pointer: fine)').matches;
    if (!this.reducedMotion) {
      this.startAutoplay();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  get activeScreen(): PhoneScreen {
    return this.slideKeys[this.activeSlide];
  }

  goTo(index: number): void {
    this.activeSlide = (index + this.slideKeys.length) % this.slideKeys.length;
  }

  next(): void {
    this.goTo(this.activeSlide + 1);
  }

  prev(): void {
    this.goTo(this.activeSlide - 1);
  }

  toggleAutoplay(): void {
    this.autoplay = !this.autoplay;
    if (this.autoplay && !this.reducedMotion) {
      this.startAutoplay();
    } else {
      this.stopAutoplay();
    }
  }

  pause(): void {
    this.stopAutoplay();
  }

  resume(): void {
    if (this.autoplay && !this.reducedMotion && !this.timer) {
      this.startAutoplay();
    }
  }

  onHeroKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') {
      this.next();
    } else if (event.key === 'ArrowLeft') {
      this.prev();
    }
  }

  onVisualMouseMove(event: MouseEvent): void {
    if (!this.finePointer || this.reducedMotion) return;
    const el = event.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    const dx = (event.clientX - rect.left) / rect.width - 0.5;
    const dy = (event.clientY - rect.top) / rect.height - 0.5;
    const phone = el.querySelector<HTMLElement>('.phone--float');
    phone?.style.setProperty('--px', `${(dx * 7).toFixed(2)}deg`);
    phone?.style.setProperty('--py', `${(-dy * 5).toFixed(2)}deg`);
  }

  onVisualMouseLeave(event: MouseEvent): void {
    const el = event.currentTarget as HTMLElement;
    const phone = el.querySelector<HTMLElement>('.phone--float');
    phone?.style.removeProperty('--px');
    phone?.style.removeProperty('--py');
  }

  private startAutoplay(): void {
    this.stopAutoplay();
    this.timer = setInterval(() => {
      if (this.autoplay && !document.hidden) {
        this.next();
      }
    }, 6000);
  }

  private stopAutoplay(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
}
