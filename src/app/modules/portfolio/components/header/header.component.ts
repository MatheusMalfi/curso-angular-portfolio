import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AppLanguage, LanguageService } from '../../../../shared/services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public readonly i18n = inject(LanguageService);

  public onLanguageChange(event: Event): void {
    const language = (event.target as HTMLSelectElement).value as AppLanguage;
    this.i18n.setLanguage(language);
  }

  public getWhatsAppLink(): string {
    const message = this.i18n.text().header.whatsappMessage;

    return `https://api.whatsapp.com/send?phone=55119999497050&text=${encodeURIComponent(message)}`;
  }

  public getResumeLink(): string {
    return this.i18n.text().header.resumeFile;
  }

}
