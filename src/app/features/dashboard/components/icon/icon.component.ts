import { Component, Input } from '@angular/core';

export type DashIcon =
  | 'plus' | 'check' | 'close' | 'edit' | 'trash' | 'archive'
  | 'chevron-left' | 'chevron-right' | 'back' | 'user' | 'calendar' | 'book' | 'logout';

@Component({
  selector: 'app-icon',
  standalone: true,
  template: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      @switch (name) {
        @case ('plus') { <path d="M12 5v14M5 12h14" /> }
        @case ('check') { <path d="m5 12.5 4.5 4.5L19 7.5" /> }
        @case ('close') { <path d="M6 6l12 12M18 6 6 18" /> }
        @case ('edit') { <path d="M4 20h4L19 9l-4-4L4 16v4Z" /><path d="m13.5 6.5 4 4" /> }
        @case ('trash') { <path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3" /> }
        @case ('archive') { <path d="M3 5h18v4H3zM5 9v10h14V9M10 13h4" /> }
        @case ('chevron-left') { <path d="m15 18-6-6 6-6" /> }
        @case ('chevron-right') { <path d="m9 18 6-6-6-6" /> }
        @case ('back') { <path d="M19 12H5M12 19l-7-7 7-7" /> }
        @case ('user') { <circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.2 3.6-7 8-7s8 2.8 8 7" /> }
        @case ('calendar') { <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /> }
        @case ('book') { <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14Z" /> }
        @case ('logout') { <path d="M15 4h4v16h-4M10 8l-4 4 4 4M6 12h10" /> }
      }
    </svg>
  `,
  styles: [`:host { display: inline-flex; width: 1.25rem; height: 1.25rem; flex: 0 0 auto; } svg { width: 100%; height: 100%; }`],
})
export class IconComponent {
  @Input({ required: true }) name!: DashIcon;
}
