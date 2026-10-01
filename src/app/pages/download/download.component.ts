import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreBadgeComponent } from '../../shared/components/store-badge/store-badge.component';
import { PhoneMockupComponent } from '../../shared/components/phone-mockup/phone-mockup.component';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-download',
  standalone: true,
  imports: [CommonModule, StoreBadgeComponent, PhoneMockupComponent, PageHeroComponent, RevealDirective, TranslatePipe],
  templateUrl: './download.component.html',
  styleUrl: './download.component.scss',
})
export class DownloadComponent {
  readonly stores = [
    { platform: 'google-play' as const, available: false, url: undefined },
    { platform: 'app-store' as const, available: false, url: undefined },
  ];

  readonly stepIndexes = [0, 1, 2];
}
