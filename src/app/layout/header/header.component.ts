import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogoComponent } from '../../shared/components/logo/logo.component';
import { SettingsMenuComponent } from '../settings-menu/settings-menu.component';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, LogoComponent, SettingsMenuComponent, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuOpen = false;
  scrolled = false;

  readonly navLinks = [
    { path: '/', labelKey: 'nav.home' },
    { path: '/sobre-nos', labelKey: 'nav.about' },
    { path: '/contato', labelKey: 'nav.contact' },
  ];

  @ViewChild('menuToggle') menuToggle!: ElementRef<HTMLButtonElement>;

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
    this.scrolled = window.scrollY > 24;
  }
}
