import { Injectable } from '@angular/core';

import { Product } from '../basic-classes/product';
import { ProductBEService } from './product-be.service';

@Injectable({
  providedIn: 'root' // Refs: AngularProviders_2018 and AngularServices_2018
})
export class ProductService {
  private products: Product[];
  private categories: string[];
  private shops: string[];
  private units: string[];
  private lastProductId;

  constructor(private productBEService: ProductBEService) {
    this.products = [];
    this.productBEService.getProducts().subscribe(
      (response) => {
        this.products = response !== null ? response : [];
        this.setLastProductId();
      },
      (error) => console.log(error)
    );

    this.categories = [];
    this.productBEService.getCategories().subscribe(
      (response) => {
        this.categories = response !== null ? response : [];
      },
      (error) => console.log(error)
    );

    this.shops = [];
    this.productBEService.getShops().subscribe(
      (response) => {
        this.shops = response !== null ? response : [];
      },
      (error) => console.log(error)
    );

    this.units = [];
    this.productBEService.getUnits().subscribe(
      (response) => {
        this.units = response !== null ? response : [];
      },
      (error) => console.log(error)
    );
  } // end constructor

  getProducts() {
    // TODO: check with favourites for personalized fields
    return this.products;
  } // end getProducts

  getCategories() {
    return this.categories;
  } // end getCategories

  getShops() {
    return this.shops;
  } // end getShops

  getUnits() {
    return this.units;
  } // end getUnits

  getProductIndex(pName: string) {
    return this.products.findIndex(el => el.name === pName);
  } // end getProductIndex

  addProduct(pName: string, pCategory: string, pUnit: string, pImage: string, pNote: string, pShop: string, pIsFixedShop: boolean,
    pIsFavourite: boolean) {
    this.products.push({id: ++this.lastProductId, name: pName, category: pCategory, unit: pUnit, image: pImage,
      note: pNote, shop: pShop, isFixedShop: pIsFixedShop, isFavourite: pIsFavourite});
    // TODO: can this be done in a CanDeactivate Guard to minimise network traffic?
    this.productBEService.storeProducts(this.products).subscribe(
      () => {},
      (error) => console.log(error)
    );

    return this.products[this.products.length - 1];
  } // end addProduct

  updateProduct(index: number, pCategory: string, pUnit: string, pImage: string, pNote: string,
    pShop: string, pIsFixedShop: boolean) {
    this.products[index].category = pCategory;
    this.products[index].unit = pUnit;
    this.products[index].image = pImage;
    this.products[index].note = pNote;
    this.products[index].shop = pShop;
    this.products[index].isFixedShop = pIsFixedShop;
    // TODO: can this be done in a CanDeactivate Guard to minimise network traffic?
    this.productBEService.storeProducts(this.products).subscribe(
      () => {},
      (error) => console.log(error)
    );

    return this.products[index];
  } // end updateProduct

  toggleFavourite(pId: number) {
    const index = this.products.findIndex(el => el.id === pId);
    if (index >= 0) {
      this.products[index].isFavourite = !this.products[index].isFavourite;
    }
    // TODO: can this be done in a CanDeactivate Guard to minimise network traffic?
    this.productBEService.storeProducts(this.products).subscribe(
      () => {},
      (error) => console.log(error)
    );
  } // end toggleFavourite

  private setLastProductId() {
    if (this.products.length) {
      this.lastProductId = this.products[0].id;
      for (const item of this.products) {
        if (item.id > this.lastProductId) {
          this.lastProductId = item.id;
        }
      }
    } else {
      this.lastProductId = 0;
    }
  } // end setLastProductId
}
