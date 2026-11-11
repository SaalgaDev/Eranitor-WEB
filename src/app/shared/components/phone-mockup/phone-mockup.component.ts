import { Component, Input } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-phone-mockup',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './phone-mockup.component.html',
  styleUrl: './phone-mockup.component.scss',
})
export class PhoneMockupComponent {
  @Input() variant: 'inline' | 'float' = 'inline';
  @Input() src = 'assets/images/tela1.png';
  @Input() priority = false;

  imageAvailable = true;

  onImageError(): void {
    this.imageAvailable = false;
  }
}
