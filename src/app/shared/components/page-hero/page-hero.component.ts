import { Component, Input } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-page-hero',
  standalone: true,
  imports: [RevealDirective, TranslatePipe],
  templateUrl: './page-hero.component.html',
  styleUrl: './page-hero.component.scss',
})
export class PageHeroComponent {
  @Input({ required: true }) titleKey!: string;
  @Input() leadKey = '';
}
