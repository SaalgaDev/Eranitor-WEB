import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { API_BASE } from './api.config';

/** Coloca o token JWT nas chamadas à API e encerra a sessão quando ele expira. */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if (!req.url.startsWith(API_BASE)) return next(req);

  const auth = inject(AuthService);
  const router = inject(Router);
  const token = auth.getToken();
  const isAuthCall = req.url.startsWith(`${API_BASE}/auth/`);
  const request = token && !isAuthCall ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req;

  return next(request).pipe(
    catchError((error: unknown) => {
      // A API responde 403 quando o token está ausente, inválido ou expirado. Um 403 também pode
      // vir de um erro interno da API, por isso só encerramos a sessão quando o token venceu.
      const sessaoVencida = error instanceof HttpErrorResponse
        && (error.status === 401 || (error.status === 403 && auth.isTokenExpired()));
      if (!isAuthCall && sessaoVencida && auth.getCurrentUser()) {
        auth.logout();
        void router.navigate(['/auth/login'], { queryParams: { returnUrl: router.url, expirada: 1 } });
      }
      return throwError(() => error);
    })
  );
};
