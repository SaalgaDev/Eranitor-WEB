import { Injectable, signal } from '@angular/core';

export type SiteTheme = 'dark' | 'light';

const STORAGE_KEY = 'eranitor-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<SiteTheme>('dark');

  init(): void {
    const stored = this.readStored();
    if (stored === 'dark' || stored === 'light') {
      this.apply(stored);
      return;
    }
    const prefersLight =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-color-scheme: light)').matches;
    this.apply(prefersLight ? 'light' : 'dark');
  }

  toggle(): void {
    this.apply(this.theme() === 'dark' ? 'light' : 'dark');
  }

  set(next: SiteTheme): void {
    this.apply(next);
  }

  private apply(next: SiteTheme): void {
    this.theme.set(next);
    document.documentElement.setAttribute('data-theme', next);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', next === 'light' ? '#FFF5E8' : '#060A10');
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      return;
    }
  }

  private readStored(): string | null {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }
}
