import { Component, Input, input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'step-2',
  imports: [FormsModule, ReactiveFormsModule],

  template: `
  <h1>
    Step 2
  </h1>

  <div [formGroup]="form">
      <input formControlName='name' />
      <input formControlName='lastName' />
  </div>
  `,
})
export class Step2 {
  @Input() form!: FormGroup;
}
