export interface User {
  id: number;
  nome: string;
  login: string;
  serie?: string;
  instituicao?: string;
  criadoEm?: string;
  materias?: string[];
}

/** Resposta de POST /auth/login. */
export interface LoginResponse {
  token: string;
  /** A API passou a devolver o usuário junto com o token. */
  usuario?: UsuarioApi | null;
}

/** Resposta de GET /usuarios/perfil. */
export interface UsuarioApi {
  idUsuario: number;
  nome: string;
  email: string;
  serie: string;
  instituicao: string;
  criadoEm: string;
  role: 'USER' | 'ADMIN';
}

/** Corpo de erro padrão da API (ErrorResponseDTO). */
export interface ApiError {
  status: number;
  message: string;
  errors?: string[];
}

export interface LoginCredentials {
  login: string;
  senha: string;
}

export interface RegisterData {
  login: string;
  senha: string;
  nome: string;
  serie: string;
  instituicao: string;
}
