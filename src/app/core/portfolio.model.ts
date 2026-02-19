export interface PersonalInfo {
  firstName: string;
  lastName: string;
  role: string;
  location: string;
}

export interface ExperienceOverview {
  startYear: number;
}

export interface AboutInfo {
  description: string;
}

export interface CareerEntryInfo {
  company: string;
  location: string;
  startYear: string;
  endYear: string;
  role: string;
  description: string;
}

export interface SkillInfo {
  name: string;
}

export interface LanguageInfo {
  name: string;
  level: string;
}

export interface ReferenceInfo {
  name: string;
  role: string;
  company: string;
  imageUrl: string;
  feedback: string;
}

export interface LinkInfo {
  text: string;
  link: string;
  description: string;
}

export interface ContactInfo {
  heading: string;
  body: string;
  clickable?: boolean;
  link?: string;
}

export interface Quote {
  text: string;
}

export interface FooterInfo {
  mainMessage: string;
  subMessage: string;
}

export interface StatusInfo {
  text: string;
}

export interface TemplateConfig {
  layoutMode: 'spotlight' | 'portrait';
}

export interface NgPortfolio {
  personalInfo: PersonalInfo;
  experienceOverview: ExperienceOverview;
  aboutInfo: AboutInfo;
  careerEntries: CareerEntryInfo[];
  skills: SkillInfo[];
  languages: LanguageInfo[];
  references: ReferenceInfo[];
  links: LinkInfo[];
  contactInfo: ContactInfo[];
  quote: Quote;
  templateConfig: TemplateConfig;
  footerInfo: FooterInfo;
  statusInfo: StatusInfo;
}
