import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Ilustração de um celular exibindo uma tela conceitual do app.
 *
 * PLACEHOLDER: representa, de forma abstrata, conceitos reais do
 * Eranitor (matérias, progresso, tarefas) — não é uma tela real
 * do aplicativo. Substituir pelo screenshot oficial quando
 * disponível (ver comentário no template).
 */
@Component({
  selector: 'app-phone-mockup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './phone-mockup.component.html',
  styleUrl: './phone-mockup.component.scss',
})
export class PhoneMockupComponent {
  readonly subjects = [
    { name: 'Matemática', progress: 72 },
    { name: 'História', progress: 45 },
    { name: 'Biologia', progress: 88 },
  ];
}
