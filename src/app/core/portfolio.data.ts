import {
  AboutInfo,
  CareerEntryInfo,
  ContactInfo,
  ExperienceOverview,
  FooterInfo,
  TemplateConfig,
  LanguageInfo,
  LinkInfo,
  NgPortfolio,
  PersonalInfo,
  Quote,
  ReferenceInfo,
  SkillInfo,
  StatusInfo,
} from './portfolio.model';

export const PERSONAL_INFO: PersonalInfo = {
  firstName: 'Ivan',
  lastName: 'Molina',
  role: 'Software Engineer & Angular Specialist',
  location: 'San Salvador, El salvador',
};

export const EXPERIENCE_OVERVIEW: ExperienceOverview = {
  startYear: 2022,
};

export const ABOUT_INFO: AboutInfo = {
  description: `
  Frontend Developer with 4+ years of experience specializing in Angular, focused on building scalable, high-performance web applications and intuitive user interfaces that manage complex data flows. Skilled in reactive programming, REST API integration, authentication, reusable components, and modern frontend best practices, with a strong commitment to continuous learning and staying current with the latest Angular advancements, including Signals and advanced reactive patterns. Passionate about writing clean, reliable code, optimizing performance and accessibility, and delivering seamless, high-quality solutions within agile teams.
  `,
};

export const CAREER_ENTRIES: CareerEntryInfo[] = [
  {
    company: 'Divimah',
    location: 'Greece',
    startYear: '2025',
    endYear: 'Present',
    role: 'Frontend Web Developer',
    description:
      'Frontend Developer specializing in Angular, contributing to the development and scaling of a DMC application by managing the full data flow and delivering high-quality interfaces that integrate seamlessly with APIs and a NestJS backend to ensure performance, reliability, and a smooth user experience. Implemented advanced state management with NgRx and Signals, built complex reactive forms, authentication flows, lazy loading, routing, and RxJS-based asynchronous data handling, focusing on scalable, maintainable, production-ready solutions.',
  },
  {
    company: 'GC Technologies',
    location: 'El salvador',
    startYear: '2022',
    endYear: '2025',
    role: 'Frontend Web Developer',
    description:
      'Frontend Developer at a growing start-up, building and enhancing Angular web applications across the full development lifecycle, from architecture to production, with a strong focus on performance and scalability through lazy loading, custom directives, interceptors, and guards. Developed secure JWT-based authentication systems with session, role, and permission management, integrated APIs using RxJS with a reactive approach, maintained scalable styling with SASS, and managed application state with NgRx to ensure consistent, high-quality, production-ready solutions.',
  },
];

export const SKILLS: SkillInfo[] = [
  { name: 'Angular' },
  { name: 'TypeScript' },
  { name: 'Signals' },
  { name: 'RxJS' },
  { name: 'NgRx' },
  { name: 'Tailwind CSS' },
  { name: 'Nest' },
];

export const LANGUAGES: LanguageInfo[] = [
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'Fluent' },
];

export const REFERENCES: ReferenceInfo[] = [
  {
    name: 'Raúl Guzmán',
    role: 'Engineering Manager',
    company: 'Freelance',
    imageUrl: 'jonas.webp',
    feedback:
      'Ivan combines deep technical expertise with excellent communication skills. His contribution to our team was outstanding.',
  },
  {
    name: 'Stephanie Cruz',
    role: 'Product Manager',
    company: 'GC Technologies',
    imageUrl: 'hanna.webp',
    feedback:
      'Ivan is the kind of developer every team dreams of: calm under pressure, solutions-focused, and deeply empathetic to both users and developers. A true team player.',
  },
];

export const LINKS: LinkInfo[] = [
  // {
  //   text: 'Advanced Angular Architecture',
  //   link: 'https://dev.to/lucamoretti/advanced-angular-architecture',
  //   description: 'My guide to scalable Angular projects and patterns',
  // },
  // {
  //   text: 'GitHub Projects',
  //   link: 'https://github.com/lucamoretti',
  //   description: 'Open-source work, side projects, and experiments',
  // },
];

export const CONTACT_INFO: ContactInfo[] = [
  {
    heading: 'Email',
    body: 'ivanmolina007@gmail.com',
    clickable: true,
    link: 'mailto:ivanmolina007@gmail.com',
  },
  {
    heading: 'Website',
    body: 'ivanmolina.dev',
    clickable: true,
    link: 'https://ivanmolina.dev',
  },
  {
    heading: 'LinkedIn',
    body: 'Ivan Molina',
    clickable: true,
    link: 'https://www.linkedin.com/in/ivan-molina-24a5311ab',
  },
  {
    heading: 'GitHub',
    body: 'ivanmolinadev',
    clickable: true,
    link: 'https://github.com/ivanmolinadev',
  },
];

export const QUOTE: Quote = {
  text: 'Innovative solutions and best practices turning complex systems into great user experiences.',
};

export const HERO_CONFIG: TemplateConfig = {
  layoutMode: 'spotlight',
};

export const FOOTER_INFO: FooterInfo = {
  mainMessage: 'Let’s create remarkable web platforms.',
  subMessage: 'Available for freelance',
};

export const STATUS_INFO: StatusInfo = {
  text: 'Open for freelance work',
};

export const PORTFOLIO_DATA: NgPortfolio = {
  personalInfo: PERSONAL_INFO,
  experienceOverview: EXPERIENCE_OVERVIEW,
  aboutInfo: ABOUT_INFO,
  careerEntries: CAREER_ENTRIES,
  skills: SKILLS,
  languages: LANGUAGES,
  references: REFERENCES,
  links: LINKS,
  contactInfo: CONTACT_INFO,
  quote: QUOTE,
  templateConfig: HERO_CONFIG,
  footerInfo: FOOTER_INFO,
  statusInfo: STATUS_INFO,
};
