import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

import { AppConfig } from './app-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ShoppingListWeb';

  ngOnInit() {
    firebase.initializeApp((new AppConfig).getConfig());
  }
}
