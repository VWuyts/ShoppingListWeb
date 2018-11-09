import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ListService } from '../../services/list.service';
import { ProductService } from '../../services/product.service';
import { SortOrder } from '../../basic-classes/sort-order';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  sortOrder: SortOrder;
  sortSubscription: Subscription;

  constructor(
    private listService: ListService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.sortOrder = {abc: false, direction: 0};
    this.sortSubscription = this.listService.sortOrderChanged.subscribe(
      (sortOrder: SortOrder) => {
        this.sortOrder = sortOrder;
      }
    );
  }

  ngOnDestroy(): void {
    this.sortSubscription.unsubscribe();
  }

  getCategories() {
    return this.productService.getCategories();
  }

  getList() {
    return this.listService.getShoppingList();
  }
}
