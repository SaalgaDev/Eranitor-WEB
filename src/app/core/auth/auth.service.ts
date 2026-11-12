import { HttpBackend, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, catchError, finalize, map, of, shareReplay, switchMap, tap } from 'rxjs';
import { API_BASE } from '../api/api.config';
import { LoginCredentials, LoginResponse, RegisterData, User, UsuarioApi } from './models/user.model';

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

/** Lê a data de expiração (exp, em segundos) do JWT. Não valida a assinatura: isso é papel da API. */
function tokenExpiraEm(token: string): number | null {
  try {
    const payload = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
    const exp = JSON.parse(atob(payload)).exp;
    return typeof exp === 'number' ? exp * 1000 : null;
  } catch {
    return null;
  }
}

const toUser = (api: UsuarioApi): User => ({
  id: api.idUsuario,
  nome: api.nome,
  login: api.email,
  serie: api.serie,
  instituicao: api.instituicao,
  criadoEm: api.criadoEm,
});

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  /** Cliente sem interceptores, para conferir a sessão sem cair no próprio interceptor. */
  private readonly httpDireto = new HttpClient(inject(HttpBackend));
  private verificacao$: Observable<boolean> | null = null;
  private currentUserSubject = new BehaviorSubject<User | null>(this.getStoredUser());
  currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();
  isAuthenticated$: Observable<boolean> = this.currentUserSubject.pipe(
    map((user) => !!user)
  );

  /**
   * O login devolve o token e o usuário (com o id que as outras rotas pedem).
   * Se a resposta vier sem o usuário, buscamos em GET /usuarios/me.
   */
  login(credentials: LoginCredentials): Observable<User> {
    const email = credentials.login.trim();
    return this.http.post<LoginResponse>(`${API_BASE}/auth/login`, { email, password: credentials.senha }).pipe(
      tap(({ token }) => safeStorage.set(TOKEN_KEY, token)),
      switchMap(({ usuario }) => usuario ? of(usuario) : this.http.get<UsuarioApi>(`${API_BASE}/usuarios/me`)),
      map(toUser),
      tap({
        next: (user) => this.setUser(user),
        error: () => this.logout(),
      })
    );
  }

  /** O cadastro não devolve token, então entramos logo em seguida com os mesmos dados. */
  register(data: RegisterData): Observable<User> {
    return this.http.post(`${API_BASE}/auth/register`, {
      email: data.login,
      password: data.senha,
      confirmPassword: data.senha,
      nome: data.nome,
      instituicao: data.instituicao,
      serie: data.serie,
    }).pipe(switchMap(() => this.login({ login: data.login, senha: data.senha })));
  }

  /** Atualiza nome, instituição e série (PUT /usuarios/perfil). */
  updateProfile(dados: Pick<User, 'nome' | 'instituicao' | 'serie'>): Observable<User> {
    const email = this.getCurrentUser()?.login ?? '';
    return this.http.put<UsuarioApi>(`${API_BASE}/usuarios/perfil`, dados, { params: { email } }).pipe(
      map(toUser),
      tap((user) => this.setUser(user))
    );
  }

  /**
   * Confere na API se o token atual ainda vale (GET /usuarios/me).
   * Só um 401 dessa rota conta como sessão encerrada; erro de rede não desloga ninguém.
   */
  sessaoValida(): Observable<boolean> {
    const token = this.getToken();
    if (!token || this.isTokenExpired()) return of(false);
    this.verificacao$ ??= this.httpDireto.get(`${API_BASE}/usuarios/me`, { headers: { Authorization: `Bearer ${token}` } }).pipe(
      map(() => true),
      catchError((erro: unknown) => of(!(erro instanceof HttpErrorResponse && erro.status === 401))),
      finalize(() => (this.verificacao$ = null)),
      shareReplay(1)
    );
    return this.verificacao$;
  }

  logout(): void {
    safeStorage.remove(TOKEN_KEY);
    safeStorage.remove(STORAGE_KEY);
    this.currentUserSubject.next(null);
  }

  getToken(): string | null {
    return safeStorage.get(TOKEN_KEY);
  }

  isTokenExpired(): boolean {
    const token = this.getToken();
    if (!token) return true;
    const expira = tokenExpiraEm(token);
    return expira !== null && expira <= Date.now();
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  private setUser(user: User): void {
    safeStorage.set(STORAGE_KEY, JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  private getStoredUser(): User | null {
    const raw = safeStorage.get(STORAGE_KEY);
    if (!raw || this.isTokenExpired()) return null;
    try {
      return JSON.parse(raw) as User;
    } catch {
      return null;
    }
  }
}
