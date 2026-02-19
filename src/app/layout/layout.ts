import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';

import { ReferenceComponent } from '../ui/references/reference';
import { CareerEntry } from '../ui/career-entry/career-entry';
import { ThemeService } from '../core/theme.service';
import { PORTFOLIO_DATA } from '../core/portfolio.data';
import { SkillsComponent } from '../ui/skills/skills';
import { Languages } from '../ui/language/languages';
import { ContactComponent } from '../ui/tuple/tuple';
import { SkillComponent } from '../ui/skills/skill';
import { Language } from '../ui/language/language';
import { Section } from '../ui/section/section';
import { LinkComponent } from '../ui/link/link';

import { HeaderComponent } from './header/header.component';
import { Footer } from './footer/footer';

@Component({
  selector: 'layout',
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  imports: [
    HeaderComponent,
    Section,
    CareerEntry,
    SkillsComponent,
    SkillComponent,
    ReferenceComponent,
    LinkComponent,
    ContactComponent,
    Footer,
    Languages,
    Language,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Layout {
  #themeService = inject(ThemeService);
  PORTFOLIO_DATA = PORTFOLIO_DATA;

  currentYear = signal(new Date().getFullYear());
  yearsOfExperience = computed(
    () => this.currentYear() - PORTFOLIO_DATA.experienceOverview.startYear,
  );

  heroImage = computed(() => {
    if (this.PORTFOLIO_DATA.templateConfig.layoutMode === 'portrait') {
      return this.#themeService.currentTheme() === 'dark'
        ? 'spotlight/hero-dark-theme.png'
        : '';
    }

    return this.#themeService.currentTheme() === 'dark'
      ? 'spotlight/hero-dark-theme.png'
      : '';
  });
}
