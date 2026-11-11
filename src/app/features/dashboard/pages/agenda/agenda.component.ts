import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardMockService, EventoAgenda, TipoEventoAgenda } from '../../services/dashboard-mock.service';
import { ConfirmService } from '../../services/confirm.service';
import { IconComponent } from '../../components/icon/icon.component';
import { DialogComponent } from '../../components/dialog/dialog.component';

interface Celula { data: Date; iso: string; dia: number; noMes: boolean; }

const paraISO = (d: Date): string =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

const deISO = (iso: string): Date => {
  const [ano, mes, dia] = iso.split('-').map(Number);
  return new Date(ano, mes - 1, dia);
};

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [AsyncPipe, FormsModule, IconComponent, DialogComponent],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.scss',
})
export class AgendaComponent {
  readonly mock = inject(DashboardMockService);
  private readonly confirm = inject(ConfirmService);

  readonly eventos$ = this.mock.getEventos();
  readonly diasSemana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  readonly tipos: TipoEventoAgenda[] = ['Prova', 'Atividade', 'Apresentação', 'Trabalho'];
  readonly corTipo: Record<TipoEventoAgenda, string> = {
    Prova: '#23447f',
    Atividade: '#ff3b40',
    Apresentação: '#e0b400',
    Trabalho: '#00a862',
  };

  mes = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  dataSelecionada = paraISO(new Date());
  celulas: Celula[] = this.montarCelulas();

  dialogAberto = false;
  editandoId: number | null = null;
  titulo = '';
  data = this.dataSelecionada;
  tipo: TipoEventoAgenda = 'Atividade';
  erro = '';

  get tituloMes(): string {
    const texto = this.mes.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  }

  mudarMes(delta: number): void {
    this.irPara(new Date(this.mes.getFullYear(), this.mes.getMonth() + delta, 1));
    this.dataSelecionada = paraISO(this.mes);
  }

  selecionar(cell: Celula): void {
    this.dataSelecionada = cell.iso;
    if (!cell.noMes) this.irPara(new Date(cell.data.getFullYear(), cell.data.getMonth(), 1));
  }

  doDia(eventos: EventoAgenda[], iso: string): EventoAgenda[] {
    return eventos.filter((e) => e.data === iso);
  }

  corDo(evento: EventoAgenda): string {
    return evento.cor || this.corTipo[evento.tipo];
  }

  ehHoje(iso: string): boolean {
    return iso === paraISO(new Date());
  }

  rotuloSelecionado(): string {
    const texto = deISO(this.dataSelecionada).toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  }

  rotuloData(iso: string): string {
    return deISO(iso).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  nomeMateria(evento: EventoAgenda): string {
    return evento.materiaId ? this.mock.nomeMateria(evento.materiaId) : '';
  }

  novoEvento(): void {
    this.editandoId = null;
    this.titulo = '';
    this.data = this.dataSelecionada;
    this.tipo = 'Atividade';
    this.erro = '';
    this.dialogAberto = true;
  }

  editarEvento(evento: EventoAgenda): void {
    if (evento.fonte !== 'agenda') return;
    this.editandoId = evento.id;
    this.titulo = evento.titulo;
    this.data = evento.data;
    this.tipo = evento.tipo;
    this.erro = '';
    this.dialogAberto = true;
  }

  salvarEvento(): void {
    const titulo = this.titulo.trim();
    if (!titulo || !this.data) {
      this.erro = 'Informe o título e a data do compromisso.';
      return;
    }
    if (this.editandoId === null) {
      this.mock.adicionarEvento({ data: this.data, titulo, tipo: this.tipo });
    } else {
      this.mock.salvarEvento({ id: this.editandoId, uid: `agenda:${this.editandoId}`, data: this.data, titulo, tipo: this.tipo, fonte: 'agenda' });
    }
    this.dataSelecionada = this.data;
    const escolhida = deISO(this.data);
    this.irPara(new Date(escolhida.getFullYear(), escolhida.getMonth(), 1));
    this.fechar();
  }

  async removerEvento(evento: EventoAgenda): Promise<void> {
    if (evento.fonte !== 'agenda') return;
    if (await this.confirm.ask('Excluir compromisso', `“${evento.titulo}” será removido da agenda.`)) {
      this.mock.removerEvento(evento.id);
    }
  }

  fechar(): void {
    this.dialogAberto = false;
  }

  private irPara(mes: Date): void {
    this.mes = mes;
    this.celulas = this.montarCelulas();
  }

  private montarCelulas(): Celula[] {
    const primeiro = new Date(this.mes.getFullYear(), this.mes.getMonth(), 1);
    const deslocamento = primeiro.getDay();
    const dias = new Date(this.mes.getFullYear(), this.mes.getMonth() + 1, 0).getDate();
    const total = Math.ceil((deslocamento + dias) / 7) * 7;
    return Array.from({ length: total }, (_, i) => {
      const data = new Date(primeiro.getFullYear(), primeiro.getMonth(), i - deslocamento + 1);
      return { data, iso: paraISO(data), dia: data.getDate(), noMes: data.getMonth() === primeiro.getMonth() };
    });
  }
}
