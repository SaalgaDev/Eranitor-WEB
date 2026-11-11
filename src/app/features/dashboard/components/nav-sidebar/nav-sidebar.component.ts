import { Component, ElementRef, HostListener, ViewChild, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';
import { AuthService } from '../../../../core/auth/auth.service';
import { User } from '../../../../core/auth/models/user.model';
import { LogoComponent } from '../../../../shared/components/logo/logo.component';
import { IconComponent } from '../icon/icon.component';

interface DashboardMenuItem {
  label: string;
  route: string;
  fragment?: string;
}

const CLOSE_MS = 320;

@Component({
  selector: 'app-nav-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LogoComponent, IconComponent],
  templateUrl: './nav-sidebar.component.html',
  styleUrl: './nav-sidebar.component.scss',
})
export class NavSidebarComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly viewport = inject(ViewportScroller);

  @ViewChild('trigger') trigger!: ElementRef<HTMLButtonElement>;

  user: User | null = this.auth.getCurrentUser();
  menuOpen = false;
  menuClosing = false;
  isSubpage = false;
  originX = 0;
  originY = 0;
  private url = '';
  private closeTimer?: number;

  readonly menuItems: DashboardMenuItem[] = [
    { label: 'Início', route: '/dashboard' },
    { label: 'Agenda', route: '/dashboard/agenda' },
    { label: 'Tarefas', route: '/dashboard/tarefas' },
    { label: 'Gerenciar matérias', route: '/dashboard/materias' },
    { label: 'Tempo estudado', route: '/dashboard/tempo-estudado' },
    { label: 'Porcentagem de estudo', route: '/dashboard', fragment: 'porcentagem' },
    { label: 'Desempenho', route: '/dashboard', fragment: 'desempenho' },
    { label: 'Conta', route: '/dashboard/perfil' },
  ];

  constructor() {
    this.auth.currentUser$.pipe(takeUntilDestroyed()).subscribe((user) => (this.user = user));
    this.updateUrl(this.router.url);
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd), takeUntilDestroyed())
      .subscribe((event) => this.updateUrl((event as NavigationEnd).urlAfterRedirects));
  }

  isCurrent(item: DashboardMenuItem): boolean {
    const [path, fragment] = this.url.split('#');
    return path.split('?')[0] === item.route && (fragment ?? undefined) === item.fragment;
  }

  toggleMenu(): void {
    if (this.menuOpen) {
      this.closeMenu();
      return;
    }
    window.clearTimeout(this.closeTimer);
    const bounds = this.trigger.nativeElement.getBoundingClientRect();
    this.originX = bounds.left + bounds.width / 2 - window.innerWidth / 2;
    this.originY = bounds.top + bounds.height / 2 - window.innerHeight / 2;
    this.menuClosing = false;
    this.menuOpen = true;
    queueMicrotask(() => document.querySelector<HTMLElement>('.menu-card')?.focus());
  }

  closeMenu(): void {
    if (!this.menuOpen || this.menuClosing) return;
    this.menuClosing = true;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.closeTimer = window.setTimeout(() => {
      this.menuOpen = false;
      this.menuClosing = false;
      this.trigger?.nativeElement.focus();
    }, reduced ? 0 : CLOSE_MS);
  }

  goTo(item: DashboardMenuItem): void {
    this.closeMenu();
    void this.router.navigate([item.route], { fragment: item.fragment }).then(() => {
      if (item.fragment) window.setTimeout(() => this.viewport.scrollToAnchor(item.fragment!), 60);
      else window.scrollTo({ top: 0 });
    });
  }

  logout(): void {
    this.auth.logout();
    void this.router.navigate(['/auth/login']);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }

  private updateUrl(url: string): void {
    this.url = url;
    this.isSubpage = url.split(/[?#]/)[0] !== '/dashboard';
  }
}
