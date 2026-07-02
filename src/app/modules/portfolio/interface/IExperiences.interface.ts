export interface IExperienceModalImage {
  src: string;
  caption?: string;
}

export interface IExperiences {
  id: 'sales' | 'clik';
  summary: { strong: string, p: string };
  text: string;
}