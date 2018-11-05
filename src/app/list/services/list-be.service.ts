import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ListItem } from '../basic-classes/list-item';

@Injectable({
  providedIn: 'root'
})
export class ListBEService {
  private url = 'https://shopping-list-web-vw.firebaseio.com/list.json';

  constructor(private http: HttpClient) { }

  storeList(list: ListItem[]) {
    return this.http.put(this.url, list);
  }

  getList() {
    return this.http.get<ListItem[]>(this.url);
  }

  clearShoppingList() {
    const list: ListItem[] = [];
    return this.http.put(this.url, list);
  }
}
