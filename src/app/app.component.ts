import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ShoppingListWeb';

  ngOnInit() {
    const config = {
      apiKey: 'AIzaSyD0bsPmgl0cpazfGSHYR1V2LvqK-U5N47Y',
      authDomain: 'shopping-list-web-vw.firebaseapp.com',
      databaseURL: 'https://shopping-list-web-vw.firebaseio.com/',
      projectID: 'shopping-list-web-vw',
      storageBucket: 'shopping-list-web-vw.appspot.com',
      messagingSenderId: '737867318802'
    };
    firebase.initializeApp(config);
  }
}
