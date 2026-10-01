import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs';
import { ThemeService } from '../../core/theme.service';
import { I18nService, SiteLang } from '../../core/i18n.service';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-settings-menu',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './settings-menu.component.html',
  styleUrl: './settings-menu.component.scss',
})
export class SettingsMenuComponent {
  open = false;

  readonly langs: Array<{ code: SiteLang; nameKey: string; short: string; htmlLang: string }> = [
    { code: 'pt-BR', nameKey: 'Português (BR)', short: 'PT', htmlLang: 'pt-BR' },
    { code: 'en', nameKey: 'English', short: 'EN', htmlLang: 'en' },
    { code: 'es', nameKey: 'Español', short: 'ES', htmlLang: 'es' },
  ];

  @ViewChild('trigger') trigger!: ElementRef<HTMLButtonElement>;
  @ViewChild('panel') panel?: ElementRef<HTMLElement>;

  constructor(
    readonly theme: ThemeService,
    readonly i18n: I18nService,
    private host: ElementRef<HTMLElement>,
    private router: Router
  ) {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationStart))
      .subscribe(() => this.close(false));
  }

  toggle(): void {
    if (this.open) {
      this.close(true);
    } else {
      this.open = true;
    }
  }

  close(returnFocus: boolean): void {
    if (!this.open) return;
    this.open = false;
    if (returnFocus) this.trigger?.nativeElement.focus();
  }

  chooseLang(code: SiteLang): void {
    void this.i18n.setLang(code);
  }

  onLangKeydown(event: KeyboardEvent, index: number): void {
    const last = this.langs.length - 1;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault();
      const next = index === last ? 0 : index + 1;
      this.chooseLang(this.langs[next].code);
      this.focusLang(next);
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault();
      const prev = index === 0 ? last : index - 1;
      this.chooseLang(this.langs[prev].code);
      this.focusLang(prev);
    }
  }

  private focusLang(index: number): void {
    const items = this.host.nativeElement.querySelectorAll<HTMLElement>('.settings__lang');
    items[index]?.focus();
  }

  @HostListener('document:pointerdown', ['$event'])
  onOutside(event: PointerEvent): void {
    if (this.open && !this.host.nativeElement.contains(event.target as Node)) {
      this.close(false);
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close(true);
  }
}
