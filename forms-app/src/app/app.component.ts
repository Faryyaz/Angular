import { Component, ViewChild } from '@angular/core';
import { NgForm } from '../../node_modules/@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') userForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender: ''
  };
  submitted = false;


  suggestUserName() {
    const suggestedName = 'Superuser';

    // not a good way as other values will be overwritten as well
    // this.userForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   answer: '',
    //   gender: 'male'
    // });

    this.userForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });

  }

  // this should be used when (ngSubmit)="onSubmit(f)" on the html form
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.userForm.value.userData.username;
    this.user.email = this.userForm.value.userData.email;
    this.user.secret = this.userForm.value.secret;
    this.user.answer = this.userForm.value.answer;
    this.user.gender = this.userForm.value.gender;
  }

}
