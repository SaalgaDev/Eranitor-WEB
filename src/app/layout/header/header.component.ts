import { Component, ElementRef, HostListener, ViewChild, inject } from '@angular/core';
import { NavigationStart, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { LogoComponent } from '../../shared/components/logo/logo.component';
import { SettingsMenuComponent } from '../settings-menu/settings-menu.component';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LogoComponent, SettingsMenuComponent, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly auth = inject(AuthService);
  menuOpen = false;
  scrolled = false;

  user = this.auth.getCurrentUser();

  readonly navLinks = [
    { path: '/', labelKey: 'nav.home' },
    { path: '/sobre-nos', labelKey: 'nav.about' },
    { path: '/contato', labelKey: 'nav.contact' },
  ];

  @ViewChild('menuToggle') menuToggle!: ElementRef<HTMLButtonElement>;

  constructor() {
    this.auth.currentUser$.subscribe((user) => {
      this.user = user;
    });
    inject(Router)
      .events.pipe(filter((e) => e instanceof NavigationStart))
      .subscribe(() => this.closeMenu());
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (!this.menuOpen) return;
    this.closeMenu();
    this.menuToggle?.nativeElement.focus();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const next = window.scrollY > 24;
    if (next !== this.scrolled) this.scrolled = next;
  }

  @HostListener('window:resize')
  onResize(): void {
    if (this.menuOpen && window.innerWidth > 960) this.closeMenu();
  }
}
