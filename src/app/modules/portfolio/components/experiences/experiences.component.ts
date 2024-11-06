import { Component, signal } from '@angular/core';

// interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong:'Vendedor on-line',
        p:'DG Soluções Estratégicas | Maio 2023 - set 2023'
      },
       text:'Durante este período, operava com a prospecção de clientes e após isso realizava o contato através de ligações.'
    },
    {
       summary: {
        strong:'Clik SoftHouse - Estagiário Front-End',
        p:'Clik SoftHouse | Out 2024 - present'
      },
       text:'Estou atuando como estagiário na Clik e implementando HTML, JavaScript e CSS.'
      },
      ]);
}
