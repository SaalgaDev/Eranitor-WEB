/**
 * Regras do cronômetro de estudo, sem Angular, para poderem ser testadas sozinhas.
 *
 * Dois modos:
 * - livre: conta o tempo enquanto estiver rodando;
 * - pomodoro: alterna sozinho foco → pausa curta → foco… e, a cada N focos, uma
 *   pausa longa. Só o tempo de foco conta como estudo.
 *
 * O tempo é calculado pelo relógio (Date.now), não por contagem de "ticks". Assim,
 * se a aba ficar em segundo plano ou o computador dormir, nada se perde, e as fases
 * que terminaram nesse meio-tempo são aplicadas de uma vez.
 */

export type ModoCronometro = 'livre' | 'pomodoro';
export type EstadoCronometro = 'parado' | 'rodando' | 'pausado';
export type FasePomodoro = 'foco' | 'pausa' | 'pausaLonga';

export interface ConfigPomodoro {
  focoMin: number;
  pausaMin: number;
  pausaLongaMin: number;
  /** Quantos focos até a pausa longa. */
  ciclos: number;
}

export const CONFIG_PADRAO: ConfigPomodoro = { focoMin: 25, pausaMin: 5, pausaLongaMin: 15, ciclos: 4 };

export interface Cronometro {
  modo: ModoCronometro;
  estado: EstadoCronometro;
  config: ConfigPomodoro;
  fase: FasePomodoro;
  /** Focos concluídos desde o início. */
  focosConcluidos: number;
  /** Tempo de estudo já fechado, em ms (não inclui o trecho atual). */
  estudoMs: number;
  /** Quando o trecho atual começou a rodar (só com estado "rodando"). */
  trechoDesde: number | null;
  /** Quanto falta para acabar a fase atual, em ms (pomodoro). */
  faseRestanteMs: number;
  /** Momento em que a fase atual acaba (pomodoro, rodando). */
  faseFimEm: number | null;
}

export const ROTULO_FASE: Record<FasePomodoro, string> = {
  foco: 'Foco',
  pausa: 'Pausa curta',
  pausaLonga: 'Pausa longa',
};

const MIN = 60_000;

export function duracaoFase(fase: FasePomodoro, config: ConfigPomodoro): number {
  const minutos = fase === 'foco' ? config.focoMin : fase === 'pausa' ? config.pausaMin : config.pausaLongaMin;
  return Math.max(1, minutos) * MIN;
}

export function novoCronometro(modo: ModoCronometro = 'pomodoro', config: ConfigPomodoro = CONFIG_PADRAO): Cronometro {
  return {
    modo, estado: 'parado', config, fase: 'foco', focosConcluidos: 0, estudoMs: 0,
    trechoDesde: null, faseRestanteMs: duracaoFase('foco', config), faseFimEm: null,
  };
}

/** O trecho atual conta como estudo? (no pomodoro, só durante o foco) */
const contaEstudo = (c: Cronometro): boolean => c.modo === 'livre' || c.fase === 'foco';

export function iniciar(c: Cronometro, agora: number): Cronometro {
  if (c.estado === 'rodando') return c;
  return {
    ...c,
    estado: 'rodando',
    trechoDesde: agora,
    faseFimEm: c.modo === 'pomodoro' ? agora + c.faseRestanteMs : null,
  };
}

export function pausar(c: Cronometro, agora: number): Cronometro {
  if (c.estado !== 'rodando') return c;
  const atual = avancar(c, agora);
  return {
    ...atual,
    estado: 'pausado',
    estudoMs: atual.estudoMs + (contaEstudo(atual) && atual.trechoDesde !== null ? agora - atual.trechoDesde : 0),
    trechoDesde: null,
    faseRestanteMs: atual.faseFimEm !== null ? Math.max(0, atual.faseFimEm - agora) : atual.faseRestanteMs,
    faseFimEm: null,
  };
}

function proximaFase(c: Cronometro): { fase: FasePomodoro; focosConcluidos: number } {
  if (c.fase !== 'foco') return { fase: 'foco', focosConcluidos: c.focosConcluidos };
  const focos = c.focosConcluidos + 1;
  return { fase: focos % Math.max(1, c.config.ciclos) === 0 ? 'pausaLonga' : 'pausa', focosConcluidos: focos };
}

/**
 * Aplica as trocas de fase que já deveriam ter acontecido até "agora".
 * Devolve quantas trocas houve, para a tela poder tocar um aviso.
 */
export function avancar(c: Cronometro, agora: number): Cronometro & { trocas?: number } {
  if (c.modo !== 'pomodoro' || c.estado !== 'rodando' || c.faseFimEm === null) return c;
  let atual = c;
  let trocas = 0;
  while (atual.faseFimEm !== null && atual.faseFimEm <= agora && trocas < 100) {
    const fim = atual.faseFimEm;
    const ganho = contaEstudo(atual) && atual.trechoDesde !== null ? fim - atual.trechoDesde : 0;
    const { fase, focosConcluidos } = proximaFase(atual);
    const duracao = duracaoFase(fase, atual.config);
    atual = { ...atual, fase, focosConcluidos, estudoMs: atual.estudoMs + ganho, trechoDesde: fim, faseFimEm: fim + duracao, faseRestanteMs: duracao };
    trocas++;
  }
  return trocas ? { ...atual, trocas } : atual;
}

/** Pula para a próxima fase (o foco interrompido conta o que já foi estudado). */
export function pularFase(c: Cronometro, agora: number): Cronometro {
  if (c.modo !== 'pomodoro') return c;
  const atual = avancar(c, agora);
  const rodando = atual.estado === 'rodando';
  const ganho = rodando && contaEstudo(atual) && atual.trechoDesde !== null ? agora - atual.trechoDesde : 0;
  const { fase, focosConcluidos } = proximaFase(atual);
  const duracao = duracaoFase(fase, atual.config);
  return {
    ...atual, fase, focosConcluidos, estudoMs: atual.estudoMs + ganho,
    trechoDesde: rodando ? agora : null,
    faseRestanteMs: duracao,
    faseFimEm: rodando ? agora + duracao : null,
  };
}

/** Tempo de estudo total até agora, em ms. */
export function estudoTotalMs(c: Cronometro, agora: number): number {
  const atual = avancar(c, agora);
  const trecho = atual.estado === 'rodando' && contaEstudo(atual) && atual.trechoDesde !== null ? agora - atual.trechoDesde : 0;
  return atual.estudoMs + trecho;
}

/** Quanto falta para acabar a fase (pomodoro), em ms. */
export function restanteFaseMs(c: Cronometro, agora: number): number {
  const atual = avancar(c, agora);
  return atual.faseFimEm !== null ? Math.max(0, atual.faseFimEm - agora) : atual.faseRestanteMs;
}

/** Minutos a registrar: arredonda para o minuto mais próximo. */
export const minutosEstudados = (ms: number): number => Math.round(ms / MIN);

export function formatarRelogio(ms: number): string {
  const total = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const mmss = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  return h ? `${h}:${mmss}` : mmss;
}
