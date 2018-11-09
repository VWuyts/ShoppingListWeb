import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';

import { ListItem } from '../basic-classes/list-item';
import { Product } from '../basic-classes/product';

@Injectable({
  providedIn: 'root' // Refs: AngularProviders_2018 and AngularServices_2018
})
export class ListBEService {
  private url = 'https://shoppinglistweb-vw.firebaseio.com/';
  private favExtension = 'fav';
  private FileExtension = '.json';
  userLoggedIn = new Subject();
  userLoggedOut = new Subject();

  constructor(private http: HttpClient) { }

  getList(uid: string): Observable<ListItem[]> {
    return this.http.get<ListItem[]>(this.url + uid + this.FileExtension)
      .pipe(catchError(
        (error: HttpErrorResponse) => {
          return throwError('getList: http error ' + error.message);
        }
      ));
  }

  storeList(list: ListItem[], uid: string) {
    return this.http.put(this.url + uid + this.FileExtension, list)
      .pipe(catchError(
        (error: HttpErrorResponse) => {
          return throwError('storeList: http error ' + error.message);
        }
      ));
  }

  getFavourites(uid: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + uid + this.favExtension + this.FileExtension)
      .pipe(catchError(
        (error: HttpErrorResponse) => {
          return throwError('getFavourites: http error ' + error.message);
        }
      ));
  }

  storeFavourites(favourites: Product[], uid: string) {
    return this.http.put(this.url + uid + this.favExtension + this.FileExtension, favourites)
      .pipe(catchError(
        (error: HttpErrorResponse) => {
          return throwError('storeFavourites: http error ' + error.message);
        }
      ));
  }

  loginUser() {
    this.userLoggedIn.next();
  }

  logoutUser() {
    this.userLoggedOut.next();
  }
}
