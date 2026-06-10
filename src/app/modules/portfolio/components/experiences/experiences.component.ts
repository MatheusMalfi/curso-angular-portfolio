import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
// interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {
  public galeriaAberta = signal<boolean>(false);
  public imagemModal = signal<string | null>(null);

  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Vendedor on-line',
        p: 'DG Soluções Estratégicas | Maio/2023 - Set/2023'
      },
    },
    {
      summary: {
        strong: 'Clik SoftHouse - Estagiário Front-End',
        p: 'Clik SoftHouse | 23/Out/2024 - 03/Jun/2026'
      },
    }
  ]);

  public toggleGaleria(): void {
    this.galeriaAberta.update(value => !value);
  }

  public abrirModal(url: string): void {
    this.imagemModal.set(url);
  }

  public fecharModal(): void {
    this.imagemModal.set(null);
  }
}
