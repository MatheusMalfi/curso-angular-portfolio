import { DOCUMENT } from '@angular/common';
import { computed, inject, Injectable, signal } from '@angular/core';

export type AppLanguage = 'pt-BR' | 'en';

interface TranslationDictionary {
  languageLabel?: string;
  languageOptions: {
    'pt-BR': string;
    en: string;
  };
  home: {
    loadingProjects: string;
    loadingProjectsError: string;
  };
  header: {
    location: string;
    resumeButton: string;
    resumeFile: string;
    contactWhatsApp: string;
    contactEmail: string;
    whatsappMessage: string;
    profileAlt: string;
    whatsappAlt: string;
    emailAlt: string;
    whatsappNumber: string;
  };
  knowledge: {
    title: string;
    altPrefix: string;
  };
  experiences: {
    title: string;
    galleryShow: string;
    galleryHide: string;
    expandedSystemAlt: string;
    galleryCards: {
      first: string;
      second: string;
      third: string;
    };
    items: {
      sales: {
        title: string;
        period: string;
        text: string;
      };
      clik: {
        title: string;
        period: string;
        overview: string;
        bullets: [string, string, string];
        gallery: {
          homeCaption: string;
          libraryCaption: string;
          addVideoPrimaryCaption: string;
          addVideoSecondaryCaption: string;
        };
        images: {
          homeAlt: string;
          libraryAlt: string;
          addVideoAlt: string;
        };
      };
    };
  };
  projects: {
    title: string;
    dialogDescription: string;
    closeDialogAlt: string;
    items: {
      clik: {
        alt: string;
        title: string;
        description: string;
        companyLink: string;
      };
    };
  };
}

const STORAGE_KEY = 'app-language';

const translations: Record<AppLanguage, TranslationDictionary> = {
  'pt-BR': {
    languageOptions: {
      'pt-BR': 'PT',
      en: 'EN'
    },
    home: {
      loadingProjects: 'Carregando todos os projetos desenvolvidos...',
      loadingProjectsError: 'Ocorreu um erro no download do componente, tente novamente...'
    },
    header: {
      location: 'Santo André, São Paulo, Brasil',
      resumeButton: 'Baixe meu CV',
      resumeFile: 'assets/pdf/cv-ptbr.pdf',
      contactWhatsApp: 'Envie uma mensagem para:',
      contactEmail: 'Envie um e-mail para:',
      whatsappMessage: 'Olá Malfi, preciso de ajuda!',
      profileAlt: 'Matheus Malfi - Foto de Perfil',
      whatsappAlt: 'Ícone para contato do Whatsapp',
      emailAlt: 'Ícone para contato do e-mail',
      whatsappNumber: 'Whatsapp: (11) 999497050'
    },
    knowledge: {
      title: 'Conhecimentos',
      altPrefix: 'Ícone de conhecimento de'
    },
    experiences: {
      title: 'Experiências',
      galleryShow: 'Visualizar Projetos Criados',
      galleryHide: 'Ocultar Projetos',
      expandedSystemAlt: 'Print do sistema expandido',
      galleryCards: {
        first: 'Expandir Tela 1',
        second: 'Expandir Tela 2',
        third: 'Expandir Tela 3'
      },
      items: {
        sales: {
          title: 'Vendedor on-line',
          period: 'DG Soluções Estratégicas | Maio/2023 - Set/2023',
          text: 'Durante este período, operava com a prospecção de clientes e após isso realizava o contato através de ligações, explicando nosso serviço e agendando reuniões.'
        },
        clik: {
          title: 'Clik SoftHouse - Estagiário Front-end',
          period: 'Clik SoftHouse | 23/Out/2024 - 03/Jun/2026',
          overview: 'Atuei como estagiário na "Clik" implementando HTML, Typescript e Tailwind/CSS.',
          bullets: [
            'Fiquei responsável pelo front-end de um sistema de Correspondente Digital.',
            'Meu maior desafio foi a implementação de uma home dividida em 3 (três) telas com controle de acesso por nível, layout responsivo, adaptando-se a diferentes tamanhos de tela.',
            'Feedback visual caso não possua vídeos adicionados e tooltip.'
          ],
          gallery: {
            homeCaption: 'Onde os vídeos, guias de acesso e contato de suporte ficam localizados, possui suporte para 8 vídeos com layout responsivo, quebra.',
            libraryCaption: 'Nesta tela o sistema conta com um filtro completo para categorias e níveis, tudo dividido por cards, onde cada card possui seus vídeos, títulos, descrições e categoria.',
            addVideoPrimaryCaption: 'Esta tela é destinada para a adição de novos vídeos, apenas os administradores conseguiam subir vídeos, através do Loom e importavam o vídeo dentro do sistema.\nSuporte completo para anexar Thumbnail, GIF ou cor estática.',
            addVideoSecondaryCaption: 'Feedback visual através do mat-error para campos obrigatórios.\nFiltro para troca dos 8 vídeos anexados na tela 1 Home.\nPré-visualização do vídeo, onde o usuário enxerga como vai ficar salvo.'
          },
          images: {
            homeAlt: 'Tela Home',
            libraryAlt: 'Tela Biblioteca de Tutoriais',
            addVideoAlt: 'Tela Adicionar Vídeos'
          }
        }
      }
    },
    projects: {
      title: 'Área',
      dialogDescription: 'Descrição',
      closeDialogAlt: 'Botão para fechar o dialog',
      items: {
        clik: {
          alt: 'Estágio Clik SoftHouse',
          title: 'Clik SoftHouse',
          description: 'Estagiando pela empresa no Front-end.',
          companyLink: 'Conheça a empresa'
        }
      }
    }
  },
  en: {
    languageOptions: {
      'pt-BR': 'PT',
      en: 'EN'
    },
    home: {
      loadingProjects: 'Loading all developed projects...',
      loadingProjectsError: 'An error occurred while loading the component. Please try again...'
    },
    header: {
      location: 'Santo Andre, Sao Paulo, Brazil',
      resumeButton: 'Download my CV',
      resumeFile: 'assets/pdf/cv-en.pdf',
      contactWhatsApp: 'Send a message to:',
      contactEmail: 'Send an email to:',
      whatsappMessage: 'Hello Malfi, I need your help!',
      profileAlt: 'Matheus Malfi - Profile Picture',
      whatsappAlt: 'WhatsApp contact icon',
      emailAlt: 'Email contact icon',
      whatsappNumber: 'WhatsApp: +55 (11) 99949-7050'
    },
    knowledge: {
      title: 'Knowledge',
      altPrefix: 'Knowledge icon for'
    },
    experiences: {
      title: 'Experience',
      galleryShow: 'View Created Projects',
      galleryHide: 'Hide Projects',
      expandedSystemAlt: 'Expanded system screenshot',
      galleryCards: {
        first: 'Expand Screen 1',
        second: 'Expand Screen 2',
        third: 'Expand Screen 3'
      },
      items: {
        sales: {
          title: 'Online Sales Representative',
          period: 'DG Strategic Solutions | May/2023 - Sep/2023',
          text: 'During this period, I worked on customer prospecting and then contacted them by phone, explaining our service and scheduling meetings.'
        },
        clik: {
          title: 'Clik SoftHouse - Front-end Intern',
          period: 'Clik SoftHouse | Oct/23/2024 - Jun/03/2026',
          overview: 'I worked as an intern at Clik implementing HTML, TypeScript, and Tailwind/CSS.',
          bullets: [
            'I was responsible for the front end of a Digital Correspondent platform.',
            'My biggest challenge was implementing a home page split into 3 screens with role-based access control and a responsive layout that adapts to different screen sizes.',
            'I also delivered visual feedback when no videos were added and tooltip support.'
          ],
          gallery: {
            homeCaption: 'This screen contains the videos, access guides, and support contact areas, with room for 8 videos in a responsive layout.',
            libraryCaption: 'This screen provides a complete category and level filter, all organized in cards where each card contains its own videos, titles, descriptions, and category.',
            addVideoPrimaryCaption: 'This screen is used to add new videos. Only administrators could upload videos through Loom and import them into the system.\nIt fully supports thumbnail, GIF, or solid color attachments.',
            addVideoSecondaryCaption: 'Visual feedback is shown through mat-error for required fields.\nThere is also a filter to swap the 8 videos attached to the first home screen.\nThe user gets a video preview to see exactly how it will look when saved.'
          },
          images: {
            homeAlt: 'Home screen',
            libraryAlt: 'Tutorial library screen',
            addVideoAlt: 'Add videos screen'
          }
        }
      }
    },
    projects: {
      title: 'Projects',
      dialogDescription: 'Description',
      closeDialogAlt: 'Button to close the dialog',
      items: {
        clik: {
          alt: 'Clik SoftHouse internship',
          title: 'Clik SoftHouse',
          description: 'Internship role in the company Front-end team.',
          companyLink: 'Visit the company'
        }
      }
    }
  }
};

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  readonly #document = inject(DOCUMENT);
  readonly #language = signal<AppLanguage>(this.getInitialLanguage());

  public readonly currentLanguage = this.#language.asReadonly();
  public readonly text = computed<TranslationDictionary>(() => translations[this.#language()]);

  constructor() {
    this.syncDocumentLanguage(this.#language());
  }

  public setLanguage(language: AppLanguage): void {
    this.#language.set(language);
    localStorage.setItem(STORAGE_KEY, language);
    this.syncDocumentLanguage(language);
  }

  private getInitialLanguage(): AppLanguage {
    const savedLanguage = localStorage.getItem(STORAGE_KEY);
    return savedLanguage === 'en' ? 'en' : 'pt-BR';
  }

  private syncDocumentLanguage(language: AppLanguage): void {
    this.#document.documentElement.lang = language;
  }
}