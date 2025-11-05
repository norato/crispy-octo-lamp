import { Component, Input, input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'step-1',
  imports: [FormsModule, ReactiveFormsModule],
  template: `
  <h1>
    Step 1
  </h1>

  <div [formGroup]="form">
      <input formControlName='name' />
      <input formControlName='lastName' />
  </div>
  `,
})
export class Step1 {
  // form = input<FormGroup>();
  @Input() form!: FormGroup;
}
