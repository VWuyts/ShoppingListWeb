import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get<string[]>(this.categoryUrl);
  }

  getProducts() {
    return this.http.get<Product[]>(this.productUrl);
  }

  getShops() {
    return this.http.get<string[]>(this.shopUrl);
  }

  getUnits() {
    return this.http.get<string[]>(this.unitUrl);
  }

  storeCategories(categories: string[]) {
    return this.http.put(this.categoryUrl, categories);
  }

  storeProducts(products: Product[]) {
    return this.http.put(this.productUrl, products);
  }

  storeShops(shops: string[]) {
    return this.http.put(this.shopUrl, shops);
  }

  storeUnits(units: string[]) {
    return this.http.put(this.unitUrl, units);
  }
}
