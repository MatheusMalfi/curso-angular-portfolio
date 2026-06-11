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
  // Controla se o grid da galeria está aberto
  public galleryOpen = signal<boolean>(false);

  // Controla quais imagens estão abertas no modal (array de strings)
  public imgModal = signal<string[] | null>(null);

  // Índice da imagem atualmente exibida no modal
  public currentImageIndex = signal<number>(0);

  // Array de experiências
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

  // Alterna a exibição do grid da galeria
  public toggleGaleria(): void {
    this.galleryOpen.update(value => !value);
  }

  // Abre o modal com uma lista de imagens e zera o índice inicial
  public openModal(images: string[]): void {
    this.imgModal.set(images);
    this.currentImageIndex.set(0);
  }

  // Fecha o modal e reseta o índice
  public closeModal(): void {
    this.imgModal.set(null);
    this.currentImageIndex.set(0);
  }

  // Vai para a próxima imagem no modal
  public nextImage(): void {
    const images = this.imgModal();
    if (!images?.length) return;
    this.currentImageIndex.update(i => (i + 1) % images.length);
  }

  // Volta para a imagem anterior no modal
  public previousImage(): void {
    const images = this.imgModal();
    if (!images?.length) return;
    this.currentImageIndex.update(i => (i - 1 + images.length) % images.length);
  }

  // Retorna a URL da imagem atual do modal
  public getCurrentImage(): string {
    const images = this.imgModal();
    if (!images?.length) return '';
    return images[this.currentImageIndex()];
  }
}