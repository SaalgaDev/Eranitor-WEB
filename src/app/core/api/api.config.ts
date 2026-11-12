/**
 * Endereço da API do Eranitor.
 *
 * O site chama sempre "/api/...". Quem repassa para o servidor no Render é:
 * - em desenvolvimento (ng serve): o proxy em proxy.conf.json;
 * - na Vercel: o rewrite em vercel.json.
 * Assim o navegador nunca faz chamada para outro domínio e o CORS não bloqueia.
 */
export const API_BASE = '/api';
