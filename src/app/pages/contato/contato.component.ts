import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

interface Channel {
  icon: 'mail' | 'instagram';
  titleKey: string;
  value?: string;
  valueKey?: string;
  href: string;
}

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RevealDirective, TranslatePipe],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss',
})
export class ContatoComponent {
  readonly channels: Channel[] = [
    {
      icon: 'mail',
      titleKey: 'page.contact.email',
      value: 'contato@eranitor.com.br',
      href: 'mailto:contato@eranitor.com.br',
    },
    {
      icon: 'instagram',
      titleKey: 'page.contact.instagram',
      valueKey: 'page.contact.instagramValue',
      href: '#',
    },
  ];
}
