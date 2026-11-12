/**
 * Fórmula de prioridade do Eranitor, igual à do back-end
 * (PriorizacaoService.calcularPrioridade):
 *
 *   prioridade = 5 × atraso + 3 × urgência + 2 × (dificuldade − 1) − 2 × progresso
 *
 * - atraso: dias de atraso (0 se a tarefa está em dia, concluída ou sem prazo);
 * - urgência: 3 se faltam até 3 dias, 2 se até 7, 1 se mais; 0 se venceu ou não tem prazo;
 * - dificuldade: da matéria, de 1 a 5;
 * - progresso: fração (0 a 1) das tarefas da matéria já concluídas.
 *
 * A nota oficial vem da API (GET /tarefas/priorizadas). Este cálculo serve para
 * explicar a nota na tela e para ordenar quando a API não mandar a nota.
 */

export const PESOS = { atraso: 5, urgencia: 3, dificuldade: 2, progresso: 2 } as const;

export const NIVEIS_DIFICULDADE = [
  { valor: 1, rotulo: 'Muito fácil' },
  { valor: 2, rotulo: 'Fácil' },
  { valor: 3, rotulo: 'Média' },
  { valor: 4, rotulo: 'Difícil' },
  { valor: 5, rotulo: 'Muito difícil' },
] as const;

export const rotuloDificuldade = (valor: number): string =>
  NIVEIS_DIFICULDADE.find((n) => n.valor === valor)?.rotulo ?? 'Média';

export interface ParcelasPrioridade {
  /** Dias de atraso. */
  atraso: number;
  /** Dias até o prazo (negativo se venceu); null sem prazo. */
  diasAtePrazo: number | null;
  urgencia: number;
  dificuldade: number;
  /** De 0 a 1. */
  progresso: number;
  total: number;
}

const DIA_MS = 24 * 60 * 60 * 1000;

/** Diferença em dias de calendário entre duas datas "AAAA-MM-DD". */
function diasEntre(deISO: string, ateISO: string): number {
  const [a, b] = [deISO, ateISO].map((iso) => {
    const [ano, mes, dia] = iso.split('-').map(Number);
    return Date.UTC(ano, mes - 1, dia);
  });
  return Math.round((b - a) / DIA_MS);
}

export function hojeISO(agora = new Date()): string {
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${agora.getFullYear()}-${pad(agora.getMonth() + 1)}-${pad(agora.getDate())}`;
}

export function calcularPrioridade(
  tarefa: { prazo: string | null; concluida: boolean },
  dificuldade: number,
  progresso: number,
  hoje = hojeISO()
): ParcelasPrioridade {
  const diasAtePrazo = tarefa.prazo ? diasEntre(hoje, tarefa.prazo) : null;
  const atraso = !tarefa.concluida && diasAtePrazo !== null && diasAtePrazo < 0 ? -diasAtePrazo : 0;
  const urgencia = diasAtePrazo === null || diasAtePrazo < 0 ? 0 : diasAtePrazo <= 3 ? 3 : diasAtePrazo <= 7 ? 2 : 1;
  const prog = Math.min(1, Math.max(0, progresso));
  const total = PESOS.atraso * atraso + PESOS.urgencia * urgencia + PESOS.dificuldade * (dificuldade - 1) - PESOS.progresso * prog;
  return { atraso, diasAtePrazo, urgencia, dificuldade, progresso: prog, total: Math.round(total * 10) / 10 };
}

/** Frase curta com o motivo da prioridade, para mostrar ao estudante. */
export function explicarPrioridade(p: ParcelasPrioridade): string {
  const partes: string[] = [];
  if (p.atraso > 0) partes.push(p.atraso === 1 ? 'atrasada há 1 dia' : `atrasada há ${p.atraso} dias`);
  else if (p.diasAtePrazo === 0) partes.push('vence hoje');
  else if (p.diasAtePrazo === 1) partes.push('vence amanhã');
  else if (p.diasAtePrazo !== null) partes.push(`vence em ${p.diasAtePrazo} dias`);
  else partes.push('sem prazo');
  partes.push(`matéria ${rotuloDificuldade(p.dificuldade).toLocaleLowerCase()}`);
  if (p.progresso > 0) partes.push(`${Math.round(p.progresso * 100)}% da matéria concluída`);
  return partes.join(' · ');
}

/** Conta passo a passo, como no documento do TCC. */
export function detalharConta(p: ParcelasPrioridade): string {
  const fmt = (n: number) => String(Math.round(n * 100) / 100).replace('.', ',');
  return `5 × ${p.atraso} + 3 × ${p.urgencia} + 2 × (${p.dificuldade} − 1) − 2 × ${fmt(p.progresso)} = ${fmt(p.total)}`;
}
