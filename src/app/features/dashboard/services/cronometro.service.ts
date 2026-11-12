import { Injectable, OnDestroy, computed, inject, signal } from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service';
import { DashboardService, TipoEstudo } from './dashboard.service';
import {
  ConfigPomodoro, Cronometro, CONFIG_PADRAO, ModoCronometro, ROTULO_FASE,
  avancar, duracaoFase, estudoTotalMs, iniciar, minutosEstudados, novoCronometro, pausar, pularFase, restanteFaseMs,
} from './cronometro';

const CHAVE = 'eranitor_cronometro_v1';

interface Salvo {
  usuarioId: number | null;
  crono: Cronometro;
  materiaId: number;
  tipo: TipoEstudo;
  /** Minutos esperando a confirmação do aluno. */
  pendenteMin: number | null;
}

/**
 * Cronômetro de estudo (livre ou pomodoro). Fica no nível do app para continuar
 * contando quando o aluno troca de página. O estado também fica no navegador, então
 * recarregar a página não zera o tempo. No fim, o aluno confirma e o tempo é
 * registrado na API pelo DashboardService.
 */
@Injectable({ providedIn: 'root' })
export class CronometroService implements OnDestroy {
  private readonly dashboard = inject(DashboardService);
  private readonly auth = inject(AuthService);

  private readonly estado = signal<Cronometro>(novoCronometro());
  private readonly agora = signal(Date.now());
  readonly materiaId = signal(0);
  readonly tipo = signal<TipoEstudo>('atividade');
  /** Minutos aguardando confirmação (depois de "Finalizar"). */
  readonly pendenteMin = signal<number | null>(null);
  /** Tela cheia ("modo foco") aberta. */
  readonly telaCheia = signal(false);
  /** Mensagem curta da última troca de fase, para leitores de tela. */
  readonly anuncio = signal('');

  readonly crono = this.estado.asReadonly();
  readonly modo = computed(() => this.estado().modo);
  readonly rodando = computed(() => this.estado().estado === 'rodando');
  readonly ativo = computed(() => this.estado().estado !== 'parado' || this.pendenteMin() !== null);
  readonly estudoMs = computed(() => estudoTotalMs(this.estado(), this.agora()));
  readonly restanteMs = computed(() => restanteFaseMs(this.estado(), this.agora()));
  readonly fase = computed(() => avancar(this.estado(), this.agora()).fase);
  readonly rotuloFase = computed(() => this.modo() === 'livre' ? 'Cronômetro' : ROTULO_FASE[this.fase()]);
  readonly focosConcluidos = computed(() => avancar(this.estado(), this.agora()).focosConcluidos);
  /** Progresso da fase atual, de 0 a 1 (pomodoro). */
  readonly progressoFase = computed(() => {
    const c = this.estado();
    if (c.modo !== 'pomodoro') return 0;
    const total = duracaoFase(this.fase(), c.config);
    return 1 - this.restanteMs() / total;
  });

  private timer: ReturnType<typeof setInterval> | null = null;
  private audio: AudioContext | null = null;

  constructor() {
    this.restaurar();
    this.auth.currentUser$.subscribe((user) => {
      // Outra pessoa entrou neste navegador: não herda o cronômetro de ninguém.
      if (user && this.usuarioSalvo !== null && this.usuarioSalvo !== user.id) this.descartar();
      this.usuarioSalvo = user?.id ?? null;
      this.salvar();
    });
    if (this.rodando()) this.ligarRelogio();
  }

  private usuarioSalvo: number | null = null;

  ngOnDestroy(): void { this.desligarRelogio(); }

  // ---- Ações -----------------------------------------------------------------

  definirModo(modo: ModoCronometro): void {
    if (this.estado().estado !== 'parado') return;
    this.estado.set(novoCronometro(modo, this.estado().config));
    this.salvar();
  }

  definirConfig(config: Partial<ConfigPomodoro>): void {
    if (this.estado().estado !== 'parado') return;
    const limpa = (v: number | undefined, padrao: number, max: number) =>
      Math.min(max, Math.max(1, Math.round(Number(v) || padrao)));
    const atual = this.estado().config;
    const nova: ConfigPomodoro = {
      focoMin: limpa(config.focoMin ?? atual.focoMin, CONFIG_PADRAO.focoMin, 180),
      pausaMin: limpa(config.pausaMin ?? atual.pausaMin, CONFIG_PADRAO.pausaMin, 60),
      pausaLongaMin: limpa(config.pausaLongaMin ?? atual.pausaLongaMin, CONFIG_PADRAO.pausaLongaMin, 120),
      ciclos: limpa(config.ciclos ?? atual.ciclos, CONFIG_PADRAO.ciclos, 12),
    };
    this.estado.set(novoCronometro(this.estado().modo, nova));
    this.salvar();
  }

  escolherMateria(id: number): void { this.materiaId.set(id); this.salvar(); }
  escolherTipo(tipo: TipoEstudo): void { this.tipo.set(tipo); this.salvar(); }

  iniciar(): void {
    this.prepararAudio();
    this.estado.set(iniciar(this.estado(), Date.now()));
    this.agora.set(Date.now());
    this.ligarRelogio();
    this.salvar();
  }

  pausar(): void {
    this.estado.set(this.semTrocas(pausar(this.estado(), Date.now())));
    this.agora.set(Date.now());
    this.desligarRelogio();
    this.salvar();
  }

  pularFase(): void {
    this.estado.set(pularFase(this.estado(), Date.now()));
    this.agora.set(Date.now());
    this.anunciarFase();
    this.salvar();
  }

  /** Para o cronômetro e pede a confirmação do aluno. */
  finalizar(): void {
    const ms = estudoTotalMs(this.estado(), Date.now());
    this.desligarRelogio();
    this.estado.set(novoCronometro(this.estado().modo, this.estado().config));
    this.pendenteMin.set(minutosEstudados(ms));
    this.telaCheia.set(false);
    this.salvar();
  }

  /** Registra na API os minutos confirmados (o aluno pode ajustar antes). */
  confirmar(minutos: number): boolean {
    const ok = this.dashboard.registrarTempo(this.materiaId(), this.tipo(), minutos);
    if (ok) {
      this.pendenteMin.set(null);
      this.salvar();
    }
    return ok;
  }

  descartar(): void {
    this.desligarRelogio();
    this.estado.set(novoCronometro(this.estado().modo, this.estado().config));
    this.pendenteMin.set(null);
    this.telaCheia.set(false);
    this.salvar();
  }

  abrirTelaCheia(): void { this.telaCheia.set(true); }
  fecharTelaCheia(): void { this.telaCheia.set(false); }

  // ---- Interno ---------------------------------------------------------------

  private ligarRelogio(): void {
    if (this.timer) return;
    this.timer = setInterval(() => this.tick(), 250);
  }

  private desligarRelogio(): void {
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
  }

  private tick(): void {
    const agora = Date.now();
    const atualizado = avancar(this.estado(), agora);
    if (atualizado.trocas) {
      this.estado.set(this.semTrocas(atualizado));
      this.anunciarFase();
      this.salvar();
    }
    this.agora.set(agora);
  }

  private semTrocas(c: Cronometro & { trocas?: number }): Cronometro {
    const { trocas: _, ...resto } = c;
    return resto;
  }

  private anunciarFase(): void {
    const fase = this.estado().fase;
    const textos = {
      foco: 'Hora de focar.',
      pausa: 'Pausa curta. Levante, beba água, respire.',
      pausaLonga: 'Pausa longa. Você merece um descanso maior.',
    } as const;
    this.anuncio.set(`${ROTULO_FASE[fase]}: ${textos[fase]}`);
    this.tocar(fase === 'foco' ? [660, 880] : [880, 660]);
  }

  /** O navegador só deixa tocar som depois de um clique; preparamos o áudio no "Iniciar". */
  private prepararAudio(): void {
    try {
      this.audio ??= new AudioContext();
      void this.audio.resume();
    } catch {
      this.audio = null;
    }
  }

  private tocar(frequencias: number[]): void {
    const ctx = this.audio;
    if (!ctx) return;
    try {
      frequencias.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const vol = ctx.createGain();
        const inicio = ctx.currentTime + i * 0.22;
        osc.frequency.value = freq;
        vol.gain.setValueAtTime(0.0001, inicio);
        vol.gain.exponentialRampToValueAtTime(0.18, inicio + 0.02);
        vol.gain.exponentialRampToValueAtTime(0.0001, inicio + 0.2);
        osc.connect(vol).connect(ctx.destination);
        osc.start(inicio);
        osc.stop(inicio + 0.21);
      });
    } catch { }
  }

  private salvar(): void {
    try {
      const dados: Salvo = {
        usuarioId: this.usuarioSalvo,
        crono: this.estado(),
        materiaId: this.materiaId(),
        tipo: this.tipo(),
        pendenteMin: this.pendenteMin(),
      };
      localStorage.setItem(CHAVE, JSON.stringify(dados));
    } catch { }
  }

  private restaurar(): void {
    try {
      const raw = localStorage.getItem(CHAVE);
      if (!raw) return;
      const dados = JSON.parse(raw) as Salvo;
      if (!dados?.crono?.config) return;
      this.usuarioSalvo = dados.usuarioId ?? null;
      this.estado.set(dados.crono);
      this.materiaId.set(dados.materiaId ?? 0);
      this.tipo.set(dados.tipo ?? 'atividade');
      this.pendenteMin.set(dados.pendenteMin ?? null);
    } catch { }
  }
}
