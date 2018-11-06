import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ListItem } from '../basic-classes/list-item';

@Injectable({
  providedIn: 'root'
})
export class ListBEService {
  private listUrl = 'https://shoppinglistweb-vw.firebaseio.com/';
  private extension = '.json';

  constructor(private http: HttpClient) { }

  storeList(list: ListItem[], uid: string) {
    return this.http.put(this.listUrl + uid + this.extension, list);
  }

  getList(uid: string) {
    return this.http.get<ListItem[]>(this.listUrl + uid + this.extension);
  }

  clearShoppingList(uid: string) {
    const list: ListItem[] = [];
    return this.http.put(this.listUrl + uid + this.extension, list);
  }
}
