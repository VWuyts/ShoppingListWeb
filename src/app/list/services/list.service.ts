import { Injectable } from '@angular/core';

import { AuthService } from 'src/app/core/services/auth.service';
import { ListBEService } from './list-be.service';
import { ListItem } from '../basic-classes/list-item';
import { Product } from '../basic-classes/product';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private shoppingList: ListItem[];
  private favourites: Product[];
  private uid: string;
  private lastId: number;

  constructor(
    private authService: AuthService,
    private listBEService: ListBEService
  ) {
    this.uid = this.authService.getUid();

    this.shoppingList = [];
    this.listBEService.getList(this.uid).subscribe(
      (response) => {
        this.shoppingList = response === null ? [] : response;
        this.setLastId();
      },
      (error) => console.log(error)
    );

    this.favourites = [];
    listBEService.getFavourites(this.uid).subscribe(
      (response) => {
        this.favourites = response !== null ? response : [];
      },
      (error) => console.log(error)
    );
  } // end constructor

  getShoppingList() {
    return this.shoppingList;
  } // end getShoppingList

  getFavourites() {
    return this.favourites;
  } // end getFavourites

  getListItem(pId: number) {
    if (pId < 1) {
      return null;
    }

    const listItem = this.shoppingList.find(
      (li) => {
        return li.id === pId;
      }
    );
    return listItem === undefined ? null : listItem;
  } // end getListItem

  addProductToList(pAmount: number, pInPromotion: boolean, product: Product) {
    const newId = ++this.lastId;
    this.shoppingList.push({id: newId, amount: pAmount, inPromotion: pInPromotion, productId: product.id, name: product.name,
      category: product.category, unit: product.unit, image: product.image, note: product.note, shop: product.shop,
      isFixedShop: product.isFixedShop, isFavourite: product.isFavourite }
    );
    // TODO: can this be done in a CanDeactivate Guard to minimise network traffic?
    this.listBEService.storeList(this.shoppingList, this.uid).subscribe(
      () => {},
      (error) => console.log(error)
    );
  } // end add ProductToList

  updateItemInList(pId: number, pAmount: number, pInPromotion: boolean, product: Product) {
    const listItem = this.shoppingList.find(
      li => {
        return li.id === pId;
      }
    );
    if (listItem) {
      listItem.amount = pAmount;
      listItem.inPromotion = pInPromotion;
      listItem.productId = product.id;
      listItem.name = product.name;
      listItem.category = product.category;
      listItem.unit = product.unit;
      listItem.image = product.image;
      listItem.note = product.note;
      listItem.shop = product.shop;
      listItem.isFixedShop = product.isFixedShop;
    } else {
      this.addProductToList(pAmount, pInPromotion, product);
    }
    // TODO: can this be done in a CanDeactivate Guard to minimise network traffic?
    this.listBEService.storeList(this.shoppingList, this.uid).subscribe(
      () => {},
      (error) => console.log(error)
    );
  } // end updateItemInList

  removeItemFromList(listItem: ListItem) {
    const index = this.shoppingList.findIndex(item => item === listItem);
    if (index >= 0) {
      this.shoppingList.splice(index, 1);
    }
    // TODO: can this be done in a CanDeactivate Guard to minimise network traffic?
    this.listBEService.storeList(this.shoppingList, this.uid).subscribe(
      () => {},
      (error) => console.log(error)
    );
  } // end removeItemFromList

  toggleFavourite(listItem: ListItem) {
    let index = this.shoppingList.findIndex(item => item === listItem);
    if (index >= 0) {
      this.shoppingList[index].isFavourite = !this.shoppingList[index].isFavourite;
    }
    if (this.shoppingList[index].isFavourite) {
      const product: Product = {
        id: listItem.productId,
        name: listItem.name,
        category: listItem.category,
        unit: listItem.unit,
        image: listItem.image,
        note: listItem.note,
        shop: listItem.shop,
        isFixedShop: listItem.isFixedShop,
        isFavourite: listItem.isFavourite
      };
      this.favourites.push(product);
      console.log(this.favourites);
    } else {
      console.log('in else');
      index = this.favourites.findIndex(el => el.id === listItem.productId);
      if (index >= 0) {
        this.favourites.splice(index, 1);
      }
    }
    // TODO: can this be done in a CanDeactivate Guard to minimise network traffic?
    this.listBEService.storeList(this.shoppingList, this.uid).subscribe(
      () => {},
      (error) => console.log(error)
    );
    this.listBEService.storeFavourites(this.favourites, this.uid).subscribe(
      () => {},
      (error) => console.log(error)
    );
  } // end toggleFavourite

  isProductOnList(pProductId: number) {
    const index = this.shoppingList.findIndex(item => item.productId === pProductId);
    if (index >= 0) {
      return true;
    }
    return false;
  } // end isProductOnList

  clearShoppingList() {
    this.shoppingList = [];
    this.lastId = 0;
    this.listBEService.storeList(this.shoppingList, this.uid).subscribe(
      () => {},
      (error) => console.log(error)
    );
  } // end clearShoppingList

  private setLastId() {
    if (this.shoppingList.length) {
      this.lastId = this.shoppingList[0].id;
      for (const item of this.shoppingList) {
        if (item.id > this.lastId) {
          this.lastId = item.id;
        }
      }
    } else {
      this.lastId = 0;
    }
  } // end setLastId
}
