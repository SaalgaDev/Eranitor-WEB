import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PhoneMockupComponent } from '../../shared/components/phone-mockup/phone-mockup.component';
import { FeatureCardComponent } from '../../shared/components/feature-card/feature-card.component';

interface Feature {
  icon: 'book' | 'flag' | 'calendar' | 'clock';
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, PhoneMockupComponent, FeatureCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly features: Feature[] = [
    {
      icon: 'book',
      title: 'Matérias e tópicos',
      description:
        'Organize tudo o que você precisa estudar em matérias e tópicos, do jeito que fizer sentido pra você.',
    },
    {
      icon: 'flag',
      title: 'Tarefas com prioridade',
      description:
        'O Eranitor calcula automaticamente o que merece sua atenção primeiro, com base em prazos e progresso.',
    },
    {
      icon: 'calendar',
      title: 'Agenda de provas e entregas',
      description:
        'Provas, trabalhos e apresentações em um calendário só, sem depender da memória.',
    },
    {
      icon: 'clock',
      title: 'Registro de tempo de estudo',
      description:
        'Registre o tempo dedicado a vídeos, apostilas e exercícios para enxergar onde seu esforço está indo.',
    },
  ];
}
