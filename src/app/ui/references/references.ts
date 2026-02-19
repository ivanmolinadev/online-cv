import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface NgpReference {
  name: string;
  role: string;
  company: string;
  imageUrl: string;
  feedback: string;
}

@Component({
  selector: 'ngp-references',
  template: `
    @for (reference of references(); track $index) {
      <div class="reference">
        <div class="reference-header">
          <img
            [alt]="'Profile picture of ' + reference.name"
            [src]="'references/' + reference.imageUrl"
          />
          <div class="reference-info">
            <span class="reference-name">{{ reference.name }}</span>
            <span class="reference-role-and-company"
              >{{ reference.role }} ● {{ reference.company }}</span
            >
          </div>
        </div>
        <div class="reference-feedback">
          {{ reference.feedback }}
        </div>
      </div>
    }
  `,
  styleUrl: './references.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferencesComponent {
  references = input.required<NgpReference[]>();
}
