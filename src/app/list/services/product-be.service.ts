import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

import { Product } from '../basic-classes/product';

@Injectable({
  providedIn: 'root' // Refs: AngularProviders_2018 and AngularServices_2018
})
export class ProductBEService {
  private categoryUrl = 'https://shoppinglistweb-vw.firebaseio.com/category.json';
  private productUrl = 'https://shoppinglistweb-vw.firebaseio.com/product.json';
  private shopUrl = 'https://shoppinglistweb-vw.firebaseio.com/shop.json';
  private unitUrl = 'https://shoppinglistweb-vw.firebaseio.com/unit.json';

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<string[]>(this.categoryUrl)
      .pipe(catchError(
        (error: HttpErrorResponse) => {
          return throwError('getCategories: http error ' + error.message);
        }
      ));
  }

  storeCategories(categories: string[]) {
    return this.http.put(this.categoryUrl, categories)
      .pipe(catchError(
        (error: HttpErrorResponse) => {
          return throwError('storeCategories: http error ' + error.message);
        }
      ));
  }

  getProducts() {
    return this.http.get<Product[]>(this.productUrl)
      .pipe(catchError(
        (error: HttpErrorResponse) => {
          return throwError('getProducts: http error ' + error.message);
        }
      ));
  }

  storeProducts(products: Product[]) {
    return this.http.put(this.productUrl, products)
      .pipe(catchError(
        (error: HttpErrorResponse) => {
          return throwError('storeProducts: http error ' + error.message);
        }
      ));
  }

  getShops() {
    return this.http.get<string[]>(this.shopUrl)
      .pipe(catchError(
        (error: HttpErrorResponse) => {
          return throwError('getShops: http error ' + error.message);
        }
      ));
  }

  storeShops(shops: string[]) {
    return this.http.put(this.shopUrl, shops)
      .pipe(catchError(
        (error: HttpErrorResponse) => {
          return throwError('storeShops: http error ' + error.message);
        }
      ));
  }

  getUnits() {
    return this.http.get<string[]>(this.unitUrl)
      .pipe(catchError(
        (error: HttpErrorResponse) => {
          return throwError('getUnits: http error ' + error.message);
        }
      ));
  }

  storeUnits(units: string[]) {
    return this.http.put(this.unitUrl, units)
      .pipe(catchError(
        (error: HttpErrorResponse) => {
          return throwError('storeUnits: http error ' + error.message);
        }
      ));
  }
}
