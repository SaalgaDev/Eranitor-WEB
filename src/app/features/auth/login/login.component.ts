import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';
import { safeReturnUrl } from '../../../core/auth/return-url';
import { LogoComponent } from '../../../shared/components/logo/logo.component';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, LogoComponent, TranslatePipe],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  private readonly query = inject(ActivatedRoute).snapshot.queryParamMap;
  readonly returnUrl = safeReturnUrl(this.query.get('returnUrl'));

  readonly form = inject(FormBuilder).nonNullable.group({
    login: ['', [Validators.required]],
    senha: ['', [Validators.required]],
  });

  loading = false;
  showPassword = false;
  error = this.query.get('expirada') ? 'auth.error.sessionExpired' : '';

  showError(name: 'login' | 'senha'): boolean {
    const control = this.form.controls[name];
    return control.invalid && control.touched;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.error = '';

    this.auth.login(this.form.getRawValue()).subscribe({
      next: () => void this.router.navigateByUrl(this.returnUrl ?? '/dashboard'),
      error: (err: unknown) => {
        this.loading = false;
        const status = err instanceof HttpErrorResponse ? err.status : 0;
        this.error = status === 401 || status === 400 ? 'auth.error.loginFailed' : 'auth.error.server';
      },
    });
  }
}
