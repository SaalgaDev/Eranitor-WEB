import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-page-hero',
  standalone: true,
  imports: [CommonModule, RevealDirective, TranslatePipe],
  templateUrl: './page-hero.component.html',
  styleUrl: './page-hero.component.scss',
})
export class PageHeroComponent {
  @Input({ required: true }) eyebrowKey!: string;
  @Input({ required: true }) titleKey!: string;
  @Input() leadKey = '';
}
