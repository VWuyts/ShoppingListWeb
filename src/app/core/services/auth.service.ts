import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

import { AppConfig } from 'src/app/app-config';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    }
  }

  checkEmail(email: string): Promise<any> {
    return firebase.auth().fetchSignInMethodsForEmail(email);
  }

  isLoggedIn(): boolean {
    if (firebase.auth().currentUser) {
      return true;
    }
    return null;
  }

  isAdmin(): boolean {
    if (this.isLoggedIn() && firebase.auth().currentUser.email === (new AppConfig).getAdminEmail()) {
      return true;
    }
    return false;
  }

  login(email: string, password: string): Promise<string> {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        () => {
          firebase.auth().currentUser.getIdToken()
            .then((token: string) => {
              this.token = token;
              localStorage.setItem('token', token);
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
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

  register(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        () => this.router.navigate(['/auth/succes'])
      )
      .catch(
        error => console.log(error.code)
      );
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then((token: string) => this.token = token
    );

    return this.token;
  }

  getUid(): string {
    const user = firebase.auth().currentUser;

    if (user) {
      return user.uid;
    }
    return null;
  }
}
