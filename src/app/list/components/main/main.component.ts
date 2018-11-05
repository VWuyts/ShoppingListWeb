import { Component, OnInit } from '@angular/core';

import { ListBEService } from '../../services/list-be.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private listBEService: ListBEService) { }

  ngOnInit() {
  }

  onSortAbc() {

  }

  onSortCategory() {

  }

  onClearList() {
    // TODO: ask confirmation
    this.listBEService.clearShoppingList();
  }
}
