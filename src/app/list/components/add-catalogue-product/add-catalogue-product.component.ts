import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ListService } from '../../services/list.service';
import { Product } from '../../basic-classes/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-catalogue-product',
  templateUrl: './add-catalogue-product.component.html',
  styleUrls: ['./add-catalogue-product.component.css']
})
export class AddCatalogueProductComponent implements OnInit {
  category: string;

  constructor(
    private listService: ListService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { } // end constructor

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: Params) => {
        this.category = params.get('category');
      }
    );
  } // end ngOnInit

  getProducts() {
    return this.productService.getProducts();
  } // end getProducts

  isProductOnList(product: Product) {
    return this.listService.isProductOnList(product.id);
  } // end isProductOnList

  addProductToList(product: Product) {
    if (!this.listService.isProductOnList(product.id)) {
      this.listService.addProductToList(0, false, product);
    }
  } // end addProductToList

  onNewProduct() {
    this.router.navigate(['/lijst/nieuwProduct/-1/Nieuw product']);
  } // end onNewProduct

  onReady() {
    this.router.navigate(['/lijst']);
  } // end onReady
}
