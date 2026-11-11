import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PhoneMockupComponent } from '../../shared/components/phone-mockup/phone-mockup.component';
import { FeatureCardComponent } from '../../shared/components/feature-card/feature-card.component';
import { StoreBadgeComponent } from '../../shared/components/store-badge/store-badge.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, PhoneMockupComponent, FeatureCardComponent, StoreBadgeComponent, RevealDirective, TranslatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  readonly highlightKeys = ['plan', 'track', 'review'] as const;
  readonly featureIcons = ['book', 'flag', 'calendar', 'clock', 'target', 'chart'];
  readonly featureIndexes = [0, 1, 2, 3, 4, 5];
  readonly cycleIndexes = [0, 1, 2, 3, 4, 5];
  readonly audienceIndexes = [0, 1, 2];

  private tiltEnabled = false;

  ngOnInit(): void {
    this.tiltEnabled =
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  onVisualMouseMove(event: MouseEvent): void {
    if (!this.tiltEnabled) return;
    const el = event.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    const dx = (event.clientX - rect.left) / rect.width - 0.5;
    const dy = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty('--px', `${(dx * 10).toFixed(2)}deg`);
    el.style.setProperty('--py', `${(-dy * 8).toFixed(2)}deg`);
  }

  onVisualMouseLeave(event: MouseEvent): void {
    const el = event.currentTarget as HTMLElement;
    el.style.removeProperty('--px');
    el.style.removeProperty('--py');
  }
}
