import { Component, OnInit, enableProdMode } from '@angular/core';
import { FormBuilder, FormGroup, Validators, RequiredValidator } from '@angular/forms';
import  {signupModel} from './signupModel';
import {Router} from '@angular/router';

import { MustMatch } from "./MustMatch.validator";
import { ProfilesService } from '../profiles.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  profile= new signupModel(null,null,null,null,null,null);
  registerForm: FormGroup;
  submitted = false;

  constructor(private formbuilder: FormBuilder,
    private httpService:ProfilesService,
    private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formbuilder.group(
      {
        title: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit(profile) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    this.httpService.getProfile(profile);
    console.log(profile);
    this.router.navigate(['/login']);
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
