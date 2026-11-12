import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';
import { safeReturnUrl } from '../../../core/auth/return-url';
import { LogoComponent } from '../../../shared/components/logo/logo.component';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

// Mesma regra da API (RegisterDTO): os símbolos aceitos são só estes.
const STRONG_PASSWORD = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*+=]).{8,}$/;

function passwordsMatch(group: AbstractControl): ValidationErrors | null {
  return group.get('senha')?.value === group.get('confirmaSenha')?.value ? null : { naoCoincidem: true };
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, LogoComponent, TranslatePipe],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  readonly returnUrl = safeReturnUrl(inject(ActivatedRoute).snapshot.queryParamMap.get('returnUrl'));

  readonly form = inject(FormBuilder).nonNullable.group(
    {
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      login: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      senha: ['', [Validators.required, Validators.pattern(STRONG_PASSWORD)]],
      confirmaSenha: ['', [Validators.required]],
      serie: ['', [Validators.required]],
      instituicao: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]],
    },
    { validators: passwordsMatch }
  );

  readonly grades = [
    {
      label: 'Ensino Fundamental I',
      options: [1, 2, 3, 4, 5].map((n) => ({ value: `${n}º ano EF`, label: `${n}º ano` })),
    },
    {
      label: 'Ensino Fundamental II',
      options: [6, 7, 8, 9].map((n) => ({ value: `${n}º ano EF`, label: `${n}º ano` })),
    },
    {
      label: 'Ensino Médio',
      options: [1, 2, 3].map((n) => ({ value: `${n}ª série EM`, label: `${n}ª série` })),
    },
    {
      label: 'Ensino Superior',
      options: [{ value: 'Ensino Superior', label: 'Ensino superior' }],
    },
  ];

  loading = false;
  showPassword = false;
  error = '';

  showError(name: keyof typeof this.form.controls): boolean {
    const control = this.form.controls[name];
    return control.invalid && control.touched;
  }

  mismatch(): boolean {
    return this.form.hasError('naoCoincidem') && this.form.controls.confirmaSenha.touched;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.error = '';

    const { nome, login, senha, serie, instituicao } = this.form.getRawValue();

    this.auth.register({ nome: nome.trim(), login: login.trim(), senha, serie, instituicao: instituicao.trim() }).subscribe({
      next: () => void this.router.navigateByUrl(this.returnUrl ?? '/dashboard'),
      error: (err: unknown) => {
        this.loading = false;
        const status = err instanceof HttpErrorResponse ? err.status : 0;
        if (status === 409) this.error = 'auth.error.emailTaken';
        else if (status === 400) this.error = 'auth.error.registerFailed';
        else this.error = 'auth.error.server';
      },
    });
  }
}
