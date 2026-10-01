import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

export type PhoneScreen = 'plan' | 'track' | 'review';

@Component({
  selector: 'app-phone-mockup',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './phone-mockup.component.html',
  styleUrl: './phone-mockup.component.scss',
})
export class PhoneMockupComponent {
  @Input() variant: 'inline' | 'float' = 'inline';
  @Input() screen: PhoneScreen = 'plan';

  readonly order: PhoneScreen[] = ['plan', 'track', 'review'];

  readonly subjectKeys = ['phone.subject.math', 'phone.subject.history', 'phone.subject.bio'];
  readonly subjectProgress = [72, 45, 88];

  readonly ringByScreen: Record<PhoneScreen, number> = { plan: 68, track: 54, review: 81 };
  readonly tabByScreen: Record<PhoneScreen, number> = { plan: 0, track: 3, review: 1 };
  readonly taskKeys: Record<PhoneScreen, string[]> = {
    plan: ['phone.task.plan.0', 'phone.task.plan.1'],
    track: ['phone.task.track.0', 'phone.task.track.1'],
    review: ['phone.task.review.0', 'phone.task.review.1'],
  };
}
