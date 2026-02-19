import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgpReference } from './references';

@Component({
  selector: 'ngp-reference',
  template: `
    <div class="reference">
      <div class="reference-header">
        <!-- <img
          [alt]="'Profile picture of ' + reference().name"
          [src]="'references/' + reference().imageUrl"
        /> -->
        <div class="reference-info" style="margin-left: 1rem">
          <span class="reference-name">{{ reference().name }}</span>
          <span class="reference-role-and-company"
            >{{ reference().role }} ● {{ reference().company }}</span
          >
        </div>
      </div>
      <div class="reference-feedback">
        {{ reference().feedback }}
      </div>
    </div>
  `,
  styleUrl: './references.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferenceComponent {
  reference = input.required<NgpReference>();
}
