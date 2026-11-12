import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { DashboardService, RegistroTempo, TipoEstudo } from '../../services/dashboard.service';

const CAMPO: Record<TipoEstudo, 'minutosAtividade' | 'minutosVideo' | 'minutosApostila'> = {
  atividade: 'minutosAtividade',
  video: 'minutosVideo',
  apostila: 'minutosApostila',
};

@Component({
  selector: 'app-tempo-estudado',
  standalone: true,
  imports: [AsyncPipe, FormsModule],
  templateUrl: './tempo-estudado.component.html',
  styleUrl: './tempo-estudado.component.scss',
})
export class TempoEstudadoComponent {
  readonly mock = inject(DashboardService);
  readonly materiasAtivas$ = this.mock.getMaterias().pipe(map((materias) => materias.filter((m) => m.ativa)));
  readonly registros$ = this.mock.tempos$;
  readonly resumo$ = this.mock.resumoTempo$;

  readonly tipos: Array<{ id: TipoEstudo; rotulo: string; curto: string; cor: string }> = [
    { id: 'atividade', rotulo: 'Exercícios e atividades', curto: 'Atividade', cor: 'var(--chart-blue)' },
    { id: 'video', rotulo: 'Vídeos', curto: 'Vídeo', cor: 'var(--chart-purple)' },
    { id: 'apostila', rotulo: 'Apostilas e leituras', curto: 'Apostila', cor: 'var(--chart-orange)' },
  ];

  private readonly hoje = new Date();
  readonly mes = this.hoje.getMonth() + 1;
  readonly ano = this.hoje.getFullYear();
  readonly rotuloMes = (() => {
    const texto = this.hoje.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  })();

  materiaId = 0;
  tipo: TipoEstudo = 'atividade';
  minutos: number | null = null;
  erro = '';
  feedback = '';

  constructor() {
    // Começa com a matéria selecionada (os ids agora vêm da API, não são mais 1, 2, 3…).
    this.mock.materiaSelecionada$.pipe(takeUntilDestroyed()).subscribe((id) => {
      this.materiaId = id;
    });
  }

  registrar(): void {
    this.feedback = '';
    if (!this.minutos || this.minutos < 1 || this.minutos > 1440) {
      this.erro = 'Informe uma duração entre 1 e 1.440 minutos.';
      return;
    }
    if (!this.mock.registrarTempo(this.materiaId, this.tipo, this.minutos)) {
      this.erro = 'Escolha uma matéria ativa.';
      return;
    }
    const rotulo = this.tipos.find((t) => t.id === this.tipo)?.rotulo.toLowerCase();
    this.erro = '';
    this.feedback = `${this.formatar(this.minutos)} registrados em ${rotulo}, ${this.mock.nomeMateria(this.materiaId)}.`;
    this.minutos = null;
  }

  private registroDoMes(registros: RegistroTempo[], materiaId: number): RegistroTempo | undefined {
    return registros.find((r) => r.materiaId === materiaId && r.mes === this.mes && r.ano === this.ano);
  }

  minutosPorTipo(registros: RegistroTempo[], materiaId: number, tipo: TipoEstudo): number {
    return this.registroDoMes(registros, materiaId)?.[CAMPO[tipo]] ?? 0;
  }

  total(registros: RegistroTempo[], materiaId: number): number {
    return this.tipos.reduce((soma, t) => soma + this.minutosPorTipo(registros, materiaId, t.id), 0);
  }

  descrever(registros: RegistroTempo[], materiaId: number, nome: string): string {
    const partes = this.tipos.map((t) => `${t.curto} ${this.formatar(this.minutosPorTipo(registros, materiaId, t.id))}`);
    return `${nome}: ${partes.join(', ')}`;
  }

  formatar(minutos: number): string {
    const horas = Math.floor(minutos / 60);
    const resto = minutos % 60;
    if (!horas) return `${resto} min`;
    return resto ? `${horas}h ${String(resto).padStart(2, '0')}min` : `${horas}h`;
  }
}
