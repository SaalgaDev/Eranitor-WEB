import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../../shared/components/logo/logo.component';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, LogoComponent, TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly year = new Date().getFullYear();

  readonly siteLinks = [
    { path: '/', labelKey: 'nav.home' },
    { path: '/sobre-nos', labelKey: 'nav.about' },
    { path: '/baixar', labelKey: 'nav.download' },
    { path: '/contato', labelKey: 'nav.contact' },
  ];

  readonly contactEmail = 'contato@eranitor.com.br';

  readonly socialLinks = [
    { name: 'Instagram', icon: 'instagram' as const },
    { name: 'Facebook', icon: 'facebook' as const },
    { name: 'TikTok', icon: 'tiktok' as const },
  ];
}
