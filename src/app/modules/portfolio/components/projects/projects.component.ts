import { Component, computed, inject } from '@angular/core';

// interface
import { IProjects } from '../../interface/IProjects.interface';

// material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';
import { LanguageService } from '../../../../shared/services/language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public readonly i18n = inject(LanguageService);

  public readonly arrayProjects = computed<IProjects[]>(() => {
    const text = this.i18n.text().projects.items.clik;

    return [
      {
        id: 'clik',
        src: 'assets/img/projects/ClikSoftHouse3.png',
        alt: text.alt,
        title: text.title,
        with: '100px',
        height: '51px',
        description: text.description,
        links: [
          {
            name: text.companyLink,
            href: 'https://cliksofthouse.com.br',
          },
        ],
      },
    ];
  });

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    })
  }
}
