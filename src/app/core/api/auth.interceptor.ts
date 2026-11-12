import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, retry, throwError, timer } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { API_BASE } from './api.config';

/** Coloca o token JWT nas chamadas à API e encerra a sessão quando ela realmente acabou. */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if (!req.url.startsWith(API_BASE)) return next(req);

  const auth = inject(AuthService);
  const router = inject(Router);
  const token = auth.getToken();
  const isAuthCall = req.url.startsWith(`${API_BASE}/auth/`);
  const request = token && !isAuthCall ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req;

  return next(request).pipe(
    // O banco da API às vezes recusa conexões quando chegam várias chamadas juntas, e o
    // Render pode estar acordando. Leituras (GET) são repetidas nesses casos. Gravações só
    // com 503, que a API devolve antes de executar a rota (nada foi gravado).
    retry({
      count: 3,
      delay: (erro: unknown, tentativa: number) => {
        const status = erro instanceof HttpErrorResponse ? erro.status : -1;
        const repetir = request.method === 'GET' ? [0, 500, 502, 503, 504].includes(status) : status === 503;
        return repetir ? timer(400 * tentativa + Math.random() * 300) : throwError(() => erro);
      },
    }),
    catchError((error: unknown) => {
      // 401 = sem sessão válida. Mas um erro interno da API também pode chegar como 401
      // (o Spring encaminha para /error, que exige login). Por isso, antes de deslogar,
      // conferimos a sessão em /usuarios/me. 403 agora significa "recurso de outro usuário".
      if (!isAuthCall && error instanceof HttpErrorResponse && error.status === 401 && auth.getCurrentUser()) {
        auth.sessaoValida().subscribe((valida) => {
          if (valida) return;
          auth.logout();
          void router.navigate(['/auth/login'], { queryParams: { returnUrl: router.url, expirada: 1 } });
        });
      }
      return throwError(() => error);
    })
  );
};
