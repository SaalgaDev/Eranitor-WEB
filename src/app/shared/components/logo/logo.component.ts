import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';

export type LogoKind = 'full' | 'wordmark' | 'icon';

const SOURCES: Record<LogoKind, string> = {
  full: 'assets/brand/eranitor-logo-navy.svg',
  wordmark: 'assets/brand/eranitor-wordmark-navy.svg',
  icon: 'assets/brand/eranitor-icon-navy.svg',
};

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
})
export class LogoComponent {
  @Input() kind: LogoKind = 'full';
  @Input() size: 'default' | 'large' = 'default';
  @Input() route: string | null = '/';

  get maskUrl(): string {
    return `url("${SOURCES[this.kind]}")`;
  }
}
