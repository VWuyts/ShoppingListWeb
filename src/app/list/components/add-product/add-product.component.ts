import { Component, OnInit } from '@angular/core';

import { ListService } from '../../services/list.service';
import { Product } from '../../basic-classes/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(
    private listService: ListService,
    private productService: ProductService
  ) { } // end constructor

  ngOnInit() {
  } // end ngOnInit

  getCategories() {
    return this.productService.getCategories();
  } // end getCategories

  getFavourites() {
    return this.listService.getFavourites();
  } // end getFavourites

  isProductOnList(product: Product) {
    return this.listService.isProductOnList(product.id);
  } // end isProductOnList

  addProductToList(product: Product) {
    if (!this.listService.isProductOnList(product.id)) {
      this.listService.addProductToList(0, false, product);
    }
  } // end addProductToList
}
