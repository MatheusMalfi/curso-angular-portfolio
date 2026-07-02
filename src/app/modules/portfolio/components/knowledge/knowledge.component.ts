import { Component, computed, inject } from '@angular/core';

// interface
import { IKnowledge } from '../../interface/IKnowledge.interface';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LanguageService } from '../../../../shared/services/language.service';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [MatTooltipModule],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public readonly i18n = inject(LanguageService);

  public readonly arrayKnowledge = computed<IKnowledge[]>(() => {
    const prefix = this.i18n.text().knowledge.altPrefix;

    return [
      {
        src: 'assets/icons/knowledge/html5.svg',
        alt: `${prefix} HTML5`,
        tooltip: 'HTML5',
        position: 'below'
      },
      {
        src: 'assets/icons/knowledge/typescript.svg',
        alt: `${prefix} TypeScript`,
        tooltip: 'TypeScript',
        position: 'below'
      },
      {
        src: 'assets/icons/knowledge/css3.svg',
        alt: `${prefix} CSS3`,
        tooltip: 'CSS3',
        position: 'below'
      },
      {
        src: 'assets/icons/knowledge/javascript.svg',
        alt: `${prefix} JavaScript`,
        tooltip: 'JavaScript',
        position: 'below'
      },
      {
        src: 'assets/icons/knowledge/tailwind.svg',
        alt: `${prefix} Tailwind CSS`,
        tooltip: 'Tailwind CSS',
        position: 'below'
      },
      {
        src: 'assets/icons/knowledge/angular.svg',
        alt: `${prefix} Angular`,
        tooltip: 'Angular',
        position: 'below'
      },
      {
        src: 'assets/icons/knowledge/nodejs.svg',
        alt: `${prefix} Node.js`,
        tooltip: 'Node.js',
        position: 'below'
      },
      {
        src: 'assets/icons/knowledge/database.svg',
        alt: `${prefix} MySQL`,
        tooltip: 'MySql',
        position: 'below'
      },
      {
        src: 'assets/icons/knowledge/sass.svg',
        alt: `${prefix} Sass`,
        tooltip: 'Sass',
        position: 'below'
      },
    ];
  });
}
