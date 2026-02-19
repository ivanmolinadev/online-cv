import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'ngp-career-entry',
  template: `
    <h4 class="role">{{ role() }}</h4>
    <div class="heading">
      <span>{{ company() }} ● </span>
      <span>{{ location() }} ●</span>
      <span>{{ timespan() }}</span>
    </div>
    <span>
      {{ description() }}
    </span>
  `,
  styleUrl: 'career-entry.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CareerEntry {
  company = input.required<string>();
  location = input.required<string>();
  startYear = input.required<string>();
  endYear = input.required<string>();
  role = input.required<string>();
  description = input.required<string>();

  timespan = computed(() => {
    return `${this.startYear()} - ${this.endYear()}`;
  });
}
