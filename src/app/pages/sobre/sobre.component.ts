import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss',
})
export class SobreComponent {
  readonly cycle = [
    { name: 'Planejar', text: 'Cadastre matérias e tópicos, e defina sua meta de estudo da semana.' },
    { name: 'Estudar', text: 'Siga as tarefas já ordenadas por prioridade, sem perder tempo decidindo por onde começar.' },
    { name: 'Registrar', text: 'Anote o tempo dedicado a cada matéria em poucos toques.' },
    { name: 'Analisar', text: 'Veja o progresso real de cada matéria frente à meta definida.' },
    { name: 'Adaptar', text: 'Ajuste metas e prioridades com base no que os dados mostram.' },
    { name: 'Melhorar', text: 'Repita o ciclo toda semana, com mais clareza sobre onde investir energia.' },
  ];

  readonly values = [
    { title: 'Feito para estudantes', text: 'Pensado para o ensino médio e vestibulandos, sem complicação técnica.' },
    { title: 'Organização real', text: 'Menos cadernos espalhados, menos aplicativos diferentes — tudo em um só lugar.' },
    { title: 'Você no controle', text: 'O Eranitor organiza e sugere; a decisão final é sempre sua.' },
  ];
}
