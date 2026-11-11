export interface User {
  id: number;
  nome: string;
  login: string;
  serie?: string;
  instituicao?: string;
  materias?: string[];
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  user: User;
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