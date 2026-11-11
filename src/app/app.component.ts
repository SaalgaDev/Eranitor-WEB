import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { I18nService } from './core/i18n.service';
import { TranslatePipe } from './shared/pipes/translate.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, TranslatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  readonly i18n = inject(I18nService);
  showSiteChrome = true;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.updateSiteChrome(this.router.url);
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e) => {
        const url = (e as NavigationEnd).urlAfterRedirects;
        this.updateSiteChrome(url);
        this.i18n.updateSeo(url);
      });
  }

  private updateSiteChrome(url: string): void {
    this.showSiteChrome = !url.startsWith('/dashboard');
  }
}
