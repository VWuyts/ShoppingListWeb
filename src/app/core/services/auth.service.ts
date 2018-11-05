import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  uid: string;

  constructor() { }

  checkEmail(email: string): Promise<any> {
    return firebase.auth().fetchSignInMethodsForEmail(email);
  }

  register(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        userData => {
          this.uid = userData.user.uid;
        }
      )
      .catch(
       error => {
         console.log(error.code);
         if (error.code === 'auth/email-already-in-use') {
           return false;
         }
       }
     )
     .catch(
       error => {
         console.log('2: ' + error.code);
       }
     );
  }

  getUid(): string {
    return this.uid;
  }
}
