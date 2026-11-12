import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ThemeService } from './core/theme.service';
import { I18nService } from './core/i18n.service';
import { authInterceptor } from './core/api/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [ThemeService, I18nService],
      useFactory: (theme: ThemeService, i18n: I18nService) => () => {
        theme.init();
        return i18n.init(window.location.pathname);
      },
    },
  ]
};
