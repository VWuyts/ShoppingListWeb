import { catchError, map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { from, Observable, throwError } from 'rxjs';

import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  validPasswordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}$/; // Ref: Srinivas_2014
  emails: string[] = [];
  registrationForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], this.emailExists.bind(this)),
      'passwd': new FormControl(null, [Validators.required, this.validPassword.bind(this)])
    });
  }

  onSubmit() {
    this.authService.register(this.registrationForm.get('email').value, this.registrationForm.get('passwd').value);
  }

  validPassword(control: FormControl): {[s: string]: boolean} {
    if (!this.validPasswordFormat.test(control.value)) {
      return {'invalidFormat': true};
    }
    return null;
  }

  emailExists(control: FormControl): Promise<any> | Observable<any> {
    return (from(this.authService.checkEmail(control.value))).pipe(
      map(signInMethods => (signInMethods.length > 0 ? {'emailTaken': true} : null)),
      catchError(() => null)
    );
  }
}
