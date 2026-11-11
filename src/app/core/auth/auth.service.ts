import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { User, AuthResponse, LoginCredentials, RegisterData } from './models/user.model';

const STORAGE_KEY = 'eranitor_auth_user';
const TOKEN_KEY = 'eranitor_access_token';

const safeStorage = {
  get(key: string): string | null {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key: string, value: string): void {
    try {
      window.localStorage.setItem(key, value);
    } catch {
    }
  },
  remove(key: string): void {
    try {
      window.localStorage.removeItem(key);
    } catch {
    }
  },
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(this.getStoredUser());
  currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();
  isAuthenticated$: Observable<boolean> = this.currentUserSubject.pipe(
    map((user) => !!user)
  );

  login(credentials: LoginCredentials): Observable<AuthResponse> {
    const mockUser: User = {
      id: 1,
      nome: 'João da Silva',
      login: credentials.login,
      serie: '3º ano EM',
      instituicao: 'ETEC Estadual',
      materias: ['Matemática', 'Português', 'História'],
    };

    const mockResponse: AuthResponse = {
      accessToken: 'mock-access-token',
      refreshToken: 'mock-refresh-token',
      expiresIn: 3600,
      user: mockUser,
    };

    return of(mockResponse).pipe(
      delay(800),
      tap((response) => this.setSession(response))
    );
  }

  register(data: RegisterData): Observable<AuthResponse> {
    const mockUser: User = {
      id: 2,
      nome: data.nome,
      login: data.login,
      serie: data.serie,
      instituicao: data.instituicao,
      materias: [],
    };

    const mockResponse: AuthResponse = {
      accessToken: 'mock-access-token',
      refreshToken: 'mock-refresh-token',
      expiresIn: 3600,
      user: mockUser,
    };

    return of(mockResponse).pipe(
      delay(800),
      tap((response) => this.setSession(response))
    );
  }

  logout(): void {
    safeStorage.remove(TOKEN_KEY);
    safeStorage.remove(STORAGE_KEY);
    this.currentUserSubject.next(null);
  }

  getToken(): string | null {
    return safeStorage.get(TOKEN_KEY);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  private setSession(response: AuthResponse): void {
    safeStorage.set(TOKEN_KEY, response.accessToken);
    safeStorage.set(STORAGE_KEY, JSON.stringify(response.user));
    this.currentUserSubject.next(response.user);
  }

  private getStoredUser(): User | null {
    const raw = safeStorage.get(STORAGE_KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as User;
    } catch {
      return null;
    }
  }
}