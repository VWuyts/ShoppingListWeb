import { Component, Input, OnInit } from '@angular/core';

import { ListService } from '../../services/list.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() childSort: {abc: boolean, direction: number};

  constructor(
    private listService: ListService,
    private productService: ProductService
  ) { }

  ngOnInit() { }

  getCategories() {
    return this.productService.getCategories();
  }

  getList() {
    return this.listService.getShoppingList();
  }
}
