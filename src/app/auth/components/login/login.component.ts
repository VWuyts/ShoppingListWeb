import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;
  user: {
    email: string,
    passwd: string
  };
  isRegistered: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'passwd': new FormControl(null, [Validators.required]) // Validator validPassword can also be used here
    });

    this.errorMessage = '';
    this.user = {
      email: '',
      passwd: ''
    };
    this.isRegistered = true;
  }

  onSubmit() {
    this.user.email = this.loginForm.get('email').value;
    this.authService.login(this.user.email, this.loginForm.get('passwd').value)
      .then((message: string) => {
        if (message === '') {
          this.router.navigate(['/lijst']);
        } else if (message === 'emailInvalid') {
          this.errorMessage = 'De gegeven email is niet geldig.';
          this.loginForm.reset();
        } else if (message === 'userDisabled') {
          this.errorMessage = 'Deze gebruiker werd geblokkeerd. Neem contact op met adminstrator van deze website.';
          this.loginForm.reset();
          this.loginForm.setValue(this.user);
        } else if (message === 'userNotFound') {
          this.errorMessage = 'Deze gebruiker is nog niet geregistreerd. Gelieve eerst te registreren.';
          this.isRegistered = false;
          this.loginForm.reset();
        } else if (message === 'passwordWrong') {
          this.errorMessage = 'Paswoord is niet geldig.';
          this.loginForm.reset();
          this.loginForm.setValue(this.user);
        }
    });
  }
}
