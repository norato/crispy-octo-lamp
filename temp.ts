/**
 * In Angular 17 +, how do you create a simple reactive form with a single text input for a user's
 * name and add a required validator to it? Provide a short code snippet showing the form control setup.
 *
 */

import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'user-form',
  template: `
    <form [FormGroup]="from">
      <input f />
    </form>
  `,
  style: ``,
})
export class UserFormComponent {
  // form = new FormGroup({
  //   name: new FormControl('', { required: true})
  // })

  form = this.formBuilder.group({
    name: ['', { required: true }],
  });
  constructor(private readonly formBuilder: FormBuilder) {}
}

// What is a component in Angular 17+, and how do you define a basic component with a template that displays a simple message?

import { Component } from '@angular/core';

@Component({
  selector: 'message',
  template: ` <p>{{ message }}</p> `,
  style: ``,
})
export class MessageComponent {
  public message = 'simple message';
}

// Review the following JavaScript function and identify any issues related to asynchronous behavior. Suggest a fix:

// function fetchData() {
//  let data;
//  fetch('https://api.example.com/data')
//  .then(response => response.json())
//  .then(json => { data = json; }); // after
//  return data; first
// }

function fetchData() {
  return fetch('https://api.example.com/data').then((response) =>
    response.json()
  );
}

// <input id="email" />
// <span id="email-error" aria-invalid="Please enter a valid email address.">Please enter a valid email address.</span>

/**
 * In Angular reactive forms, how would you dynamically add or remove form controls in a multi-step wizard
 * based on user input? Provide a brief code example.
 */

import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'dynamic-form',
  template: ``,
  style: ``,
})
export class DynamicFormComponent {
  form = this.formBuilder.group({
    name: ['', { required: true }],
  });
  constructor(private readonly formBuilder: FormBuilder) {}

  addField(name: string, value: string) {
    this.form.addControl({
      [name]: [value, { required: true }],
    });
  }

  removeControl(name: string) {
    const hascontrol = this.form.get(name);
    if (hascontrol) {
      this.form.removeControl(name);
    }
  }
}

/**
 *  In a Angular application, how would you handle errors from an asynchronous
 *  API call to display user-friendly messages without blocking the UI?
 *  Provide a brief code example
 */

import { Component } from '@angular/core';

@Component({
  selector: 'api-error',
  template: ``,
  style: ``,
})
export class ApiErrorComponent {
  constructor(private readonly httpClient: HttpClient) {}

  loadItems() {
    this.httpClient.get('any-api');
  }
}
