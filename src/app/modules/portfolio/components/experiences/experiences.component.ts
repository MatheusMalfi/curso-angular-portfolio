import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
// interface
import { IExperienceModalImage, IExperiences } from '../../interface/IExperiences.interface';
import { LanguageService } from '../../../../shared/services/language.service';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {
  public readonly i18n = inject(LanguageService);

  // Controla se o grid da galeria está aberto
  public galleryOpen = signal<boolean>(false);

  // Controla quais imagens estão abertas no modal
  public imgModal = signal<IExperienceModalImage[] | null>(null);

  // Índice da imagem atualmente exibida no modal
  public currentImageIndex = signal<number>(0);

  // Array de experiências
  public readonly arrayExperiences = computed<IExperiences[]>(() => {
    const text = this.i18n.text().experiences.items;

    return [
      {
        id: 'sales',
        summary: {
          strong: text.sales.title,
          p: text.sales.period
        },
        text: text.sales.text
      },
      {
        id: 'clik',
        summary: {
          strong: text.clik.title,
          p: text.clik.period
        },
        text: text.clik.overview
      }
    ];
  });

  public isClikExperience(item: IExperiences): boolean {
    return item.id === 'clik';
  }

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