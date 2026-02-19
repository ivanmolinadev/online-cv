import {
  afterNextRender,
  DOCUMENT,
  inject,
  Injectable,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  #document = inject(DOCUMENT);
  #THEME_KEY = 'portfolio-theme';
  #platformId = inject(PLATFORM_ID);
  #DEFAULT_THEME: Theme = 'dark';
  theme = signal<Theme>('dark');
  currentTheme = this.theme.asReadonly();

  #afterNextRenderRef = afterNextRender(() => {
    if (isPlatformBrowser(this.#platformId)) {
      this.#initTheme();
    }
  });

  #initTheme(): void {
    this.theme.set(this.#DEFAULT_THEME);
    this.setTheme(this.#DEFAULT_THEME);
  }

  toggleTheme(): void {
    this.setTheme(this.#DEFAULT_THEME);
  }

  setTheme(theme: Theme): void {
    const enforcedTheme: Theme = this.#DEFAULT_THEME;
    this.theme.set(enforcedTheme);

    if (isPlatformBrowser(this.#platformId)) {
      this.#document
        .querySelector('html')
        ?.setAttribute('data-theme', enforcedTheme);
      localStorage.setItem(this.#THEME_KEY, enforcedTheme);
    }
  }
}
