import { Component } from '@angular/core';
import { HeaderComponent } from '../../portfolio/components/header/header.component';
import { KnowledgeComponent } from '../../portfolio/components/knowledge/knowledge.component';
import { ExperiencesComponent } from '../../portfolio/components/experiences/experiences.component';
import { ProjectsComponent } from '../../portfolio/components/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, KnowledgeComponent, ExperiencesComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
