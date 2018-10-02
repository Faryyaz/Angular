import { Component, ViewChild } from '@angular/core';
import { NgForm } from '../../node_modules/@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') form: NgForm;
  defaultQuestion = 'pet';
  answer = '';

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // this should be used when (ngSubmit)="onSubmit(f)" on the html form
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.form);
  }

}
