import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

import { ListItem } from '../basic-classes/list-item';
import { Product } from '../basic-classes/product';

@Injectable({
  providedIn: 'root'
})
export class ListBEService {
  private url = 'https://shoppinglistweb-vw.firebaseio.com/';
  private favExtension = 'fav';
  private FileExtension = '.json';

  constructor(private http: HttpClient) { }

  getList(uid: string): Observable<ListItem[]> {
    return this.http.get<ListItem[]>(this.url + uid + this.FileExtension);
  }

  storeList(list: ListItem[], uid: string) {
    return this.http.put(this.url + uid + this.FileExtension, list);
  }

  getFavourites(uid: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + uid + this.favExtension + this.FileExtension);
  }

  storeFavourites(favourites: Product[], uid: string) {
    return this.http.put(this.url + uid + this.favExtension + this.FileExtension, favourites);
  }

  /*listExists(uid: string) {
    firebase.database().ref(uid).once('value', snapshot => {
      return snapshot.exists();
    });
  }*/
}
