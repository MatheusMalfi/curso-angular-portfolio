import { Component, inject, signal } from '@angular/core';

// interface
import { IProjects } from '../../interface/IProjects.interface';

// material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/ClikSoftHouse.png',
      alt: 'Estágio Clik SotfHouse',
      title: 'Clik SotfHouse',
      with: '100px',
      height: '51px',
      description: 'estagiando pela empresa no FrontEnd',
      links: [
        {
          name: 'Conheça a empresa',
          href: 'https://cliksofthouse.com.br',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    })
  }
}
