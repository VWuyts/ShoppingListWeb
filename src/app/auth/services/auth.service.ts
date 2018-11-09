import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

import { AppConfig } from 'src/app/app-config';
import { ListBEService } from 'src/app/list/services/list-be.service';

@Injectable({
  providedIn: 'root' // Refs: AngularProviders_2018 and AngularServices_2018
})
export class AuthService {
  token: string;

  constructor(
    private listBEService: ListBEService,
    private router: Router
  ) {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    }
  } // end constructor

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then((token: string) => this.token = token
    );

    return this.token;
  } // end getToken

  getUid(): string {
    const user = firebase.auth().currentUser;

    if (user) {
      return user.uid;
    }
    return null;
  } // end getUid

  checkEmail(email: string): Promise<any> {
    return firebase.auth().fetchSignInMethodsForEmail(email);
  } // end checkEmail

  isAdmin(): boolean {
    if (this.isLoggedIn() && firebase.auth().currentUser.email === (new AppConfig).getAdminEmail()) {
      return true;
    }
    return false;
  } // end isAdmin

  isLoggedIn(): boolean {
    if (firebase.auth().currentUser) {
      return true;
    }
    return null;
  } // end isLoggedIn

  login(email: string, password: string): Promise<string> {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        () => {
          firebase.auth().currentUser.getIdToken()
            .then((token: string) => {
              this.token = token;
              localStorage.setItem('token', token);
              this.listBEService.loginUser();
            });
            return '';
        })
      .catch(
        error => {
          if (error.code === 'auth/invalid-email') {
            return 'emailInvalid';
          } else if (error.code === 'auth/user-disabled') {
            return 'userDisabled';
          } else if (error.code === 'auth/user-not-found') {
            return 'userNotFound';
          } else if (error.code === 'auth/wrong-password') {
            return 'passwordWrong';
          }
        }
      );
  } // end login

  logout() {
    firebase.auth().signOut().then(
      () => {
        this.token = null;
        if (localStorage.getItem('token')) {
          localStorage.removeItem('token');
        }
        this.listBEService.logoutUser();
        this.router.navigate(['/home']);
      }
    )
    .catch(
      error => console.log(error)
    );
  } // end logout

  register(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        () => this.router.navigate(['/auth/succes'])
      )
      .catch(
        error => console.log(error)
      );
  } // end register
}
