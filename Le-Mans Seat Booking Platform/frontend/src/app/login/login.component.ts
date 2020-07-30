import { Component, OnInit } from '@angular/core';
import { signupModel } from '../signup/signupModel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loginData = new signupModel(null, null, null, null, null, null);
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group
      ({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]]
      });
  };
  //getter function
  get f() {
    return this.loginForm.controls;
  }
  login(data) {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    console.log(data);
    document.getElementsByTagName('button')[1].removeAttribute('disabled');
    
  }
}
