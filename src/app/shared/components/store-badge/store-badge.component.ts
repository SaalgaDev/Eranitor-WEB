import { Component, Input } from '@angular/core';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

export type StorePlatform = 'google-play' | 'app-store';

@Component({
  selector: 'app-store-badge',
  standalone: true,
  imports: [CommonModule, NgTemplateOutlet, TranslatePipe],
  templateUrl: './store-badge.component.html',
  styleUrl: './store-badge.component.scss',
})
export class StoreBadgeComponent {
  @Input() platform: StorePlatform = 'google-play';
  @Input() available = false;
  @Input() url?: string;

  get label(): string {
    return this.platform === 'google-play' ? 'Google Play' : 'App Store';
  }
}
