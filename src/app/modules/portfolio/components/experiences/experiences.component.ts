import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
// interface
import { IExperienceModalImage, IExperiences } from '../../interface/IExperiences.interface';

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

  // Controla quais imagens estão abertas no modal
  public imgModal = signal<IExperienceModalImage[] | null>(null);

  // Índice da imagem atualmente exibida no modal
  public currentImageIndex = signal<number>(0);

  // Array de experiências
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Vendedor on-line',
        p: 'DG Soluções Estratégicas | Maio/2023 - Set/2023'
      },
      text: 'Durante este período, operava com a prospecção de clientes e após isso realizava o contato através de ligações.'
    },
    {
      summary: {
        strong: 'Clik SoftHouse - Estagiário Front-End',
        p: 'Clik SoftHouse | 23/Out/2024 - 03/Jun/2026'
      },
      text: `Atuei como estagiário na "Clik" implementando HTML, Typescript e Tailwind/CSS. 
      <br> Fiquei responsável pelo front-end de um sistema de Correspondente Digital. 
      <br> Meu maior desafio foi a implementação de uma home dividida em 3 (três) telas. `
    }
  ]);

  // Alterna a exibição do grid da galeria
  public toggleGaleria(): void {
    this.galleryOpen.update(value => !value);
  }

  // Abre o modal com uma lista de imagens e zera o índice inicial
  public openModal(images: Array<string | IExperienceModalImage>): void {
    this.imgModal.set(
      images.map((image) => typeof image === 'string' ? { src: image } : image)
    );
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
    return images[this.currentImageIndex()].src;
  }

  public getCurrentCaption(): string {
    const images = this.imgModal();
    if (!images?.length) return '';
    return images[this.currentImageIndex()].caption ?? '';
  }
}