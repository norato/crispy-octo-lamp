import { Component, Input, input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'step-3',
  imports: [FormsModule, ReactiveFormsModule],

  template: `
  <h1>
    Step 3
  </h1>

  <div [formGroup]="form">
      <input formControlName='name' />
      <input formControlName='lastName' />
  </div>
  `,
})
export class Step3 {
  @Input() form!: FormGroup;
}
