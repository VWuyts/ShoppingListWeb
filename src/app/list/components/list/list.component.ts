import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/core/services/auth.service';
import { ListBEService } from '../../services/list-be.service';
import { ListItem } from '../../basic-classes/list-item';
import { ProductBEService } from '../../services/product-be.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  categories: string[] = [];
  uid: string;

  constructor(
    private authService: AuthService,
    private listBEService: ListBEService,
    private productBEService: ProductBEService
  ) { }

  ngOnInit() {
    /*this.productBEService.getCategories().subscribe(
      (response) => this.categories = response,
      (error) => console.log(error)
    );
    this.uid = this.authService.getUid();*/
  }

  getShoppingList(): ListItem[] {
    let list: ListItem[] = [];
    this.listBEService.getList(this.uid).subscribe(
      (response) => list = response,
      (error) => console.log(error)
    );

    return list;
  }
}
