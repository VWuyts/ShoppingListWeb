import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../basic-classes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductBEService {
  private url = 'https://shopping-list-web-vw.firebaseio.com/product.json';

  constructor(private http: HttpClient) { }

  storeProducts(products: Product[]) {
    return this.http.put(this.url, products);
  }

  getProducts() {
    return this.http.get<Product[]>(this.url);
  }
}
