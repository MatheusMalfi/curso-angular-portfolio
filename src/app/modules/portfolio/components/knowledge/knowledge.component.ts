import { Component, signal } from '@angular/core';

// interface
import { IKnowledge } from '../../interface/IKnowledge.interface';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [MatTooltipModule],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento de html5',
      tooltip: 'HTML5',
      position: 'below'
    },
    {
      src: 'assets/icons/knowledge/typescript.svg',
      alt: 'Ícone de conhecimento de typescript',
      tooltip: 'TypeScript',
      position: 'below'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimento de css3',
      tooltip: 'CSS3',
      position: 'below'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento de javascript',
      tooltip: 'JavaScript',
      position: 'below'
    },
    {
      src: 'assets/icons/knowledge/tailwind.svg',
      alt: 'Ícone de conhecimento de tailwind css',
      tooltip: 'Tailwind CSS',
      position: 'below'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de angular',
      tooltip: 'Angular',
      position: 'below'
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Ícone de conhecimento de nodejs',
      tooltip: 'Node.js',
      position: 'below'
    },
    {
      src: 'assets/icons/knowledge/database.svg',
      alt: 'Ícone de conhecimento de sql',
      tooltip: 'MySql',
      position: 'below'
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'Ícone de conhecimento de sass',
      tooltip: 'Sass',
      position: 'below'
    },
  ])
}
