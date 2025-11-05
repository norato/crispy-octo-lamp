import { Component, inject, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Step1 } from './step-1';
import { Step2 } from './step-2';
import { Step3 } from './step-3';

@Component({
  selector: 'app-root',
  imports: [Step1, Step2, Step3, FormsModule, ReactiveFormsModule],
  template: `
    <div>
      <div [formGroup]="form">
        @switch(currentStep) {
          @case (1){
            <step-1 [form]="step1"/>
          }
          @case (2){
            <step-2 [form]="step2"/>
          }
          @case (3){
            <step-3 [form]="step3"/>
          }

        }
      </div>

      <button (click)="prev()">Prev</button>
      <button (click)="next()">Next</button>
    </div>
  `,
})
export class App {
  private formBuilder = inject(FormBuilder);
  currentStep = 1;
  step1 = this.formBuilder.group({
    name: ['myName'],
    lastName: ['my Last name'],
  });
  step2 = this.formBuilder.group({
    name: ['myName 2'],
    lastName: ['my Last name 2'],
  });
  step3 = this.formBuilder.group({
    name: ['myName 3'],
    lastName: ['my Last name 3'],
  });

  form = this.formBuilder.group({
    step1: this.step1,
    step2: this.step2,
    step3: this.step3,
  });

  prev() {
    if (this.currentStep !== 1) {
      this.currentStep -= 1;
    }
  }
  next() {
    if (this.currentStep !== 3) {
      this.currentStep += 1;
    }
  }
}

bootstrapApplication(App);
