import { Injectable, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

import { AuthService } from 'src/app/auth/services/auth.service';
import { ListBEService } from './list-be.service';
import { ListItem } from '../basic-classes/list-item';
import { Product } from '../basic-classes/product';
import { SortOrder } from '../basic-classes/sort-order';

@Injectable({
  providedIn: 'root' // Refs: AngularProviders_2018 and AngularServices_2018
})
export class ListService implements OnDestroy {
  private shoppingList: ListItem[];
  private favourites: Product[];
  private lastId: number;
  private uid: string;
  sortOrderChanged = new Subject();
  userLoginSubscription: Subscription;
  userLogoutSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private listBEService: ListBEService
  ) {
    // Subscriptions
    this.userLoginSubscription = listBEService.userLoggedIn.subscribe(
      () => this.initializeForUser()
    );
    this.userLogoutSubscription = listBEService.userLoggedOut.subscribe(
      () => this.clearOnLogout()
    );

    this.initializeForUser();
  } // end constructor

  // Ref: AngularOnDestroy_2018
  ngOnDestroy(): void {
    this.userLoginSubscription.unsubscribe();
    this.userLogoutSubscription.unsubscribe();
  } // end ngOnDestroy

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

  getShoppingList() {
    return this.shoppingList;
  } // end getShoppingList

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

  changeSortOrder(sortOrder: SortOrder) {
    this.sortOrderChanged.next(sortOrder);
  } // end changeSort

  clearShoppingList() {
    this.shoppingList = [];
    this.lastId = 0;
    this.listBEService.storeList(this.shoppingList, this.uid).subscribe(
      () => {},
      (error) => console.log(error)
    );
  } // end clearShoppingList

  isProductOnList(pProductId: number) {
    const index = this.shoppingList.findIndex(item => item.productId === pProductId);
    if (index >= 0) {
      return true;
    }
    return false;
  } // end isProductOnList

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
      // TODO: can this be done in a CanDeactivate Guard to minimise network traffic?
      if (listItem.isFavourite) {
        const favProduct = this.favourites.find(
          fav => {
            return fav.id === listItem.productId;
          }
        );
        if (favProduct) {
          favProduct.name = listItem.name;
          favProduct.category = listItem.category;
          favProduct.unit = listItem.unit;
          favProduct.note = listItem.note;
          if (listItem.isFixedShop) {
            favProduct.shop = listItem.shop;
            favProduct.isFixedShop = true;
          }
        }
        // TODO: can this be done in a CanDeactivate Guard to minimise network traffic?
        this.listBEService.storeFavourites(this.favourites, this.uid).subscribe(
          () => {},
          (error) => console.log(error)
        );
      }
    } else {
      this.addProductToList(pAmount, pInPromotion, product);
    }
    // TODO: can this be done in a CanDeactivate Guard to minimise network traffic?
    this.listBEService.storeList(this.shoppingList, this.uid).subscribe(
      () => {},
      (error) => console.log(error)
    );
  } // end updateItemInList

  private clearOnLogout() {
    this.shoppingList = [];
    this.favourites = [];
    this.uid = '';
    this.setLastId();
  } // end clearOnLogout

  private initializeForUser() {
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
    this.listBEService.getFavourites(this.uid).subscribe(
      (response) => {
        this.favourites = response !== null ? response : [];
      },
      (error) => console.log(error)
    );
  } // end initializeForUser

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
