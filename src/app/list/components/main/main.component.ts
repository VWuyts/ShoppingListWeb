import { Component, OnInit } from '@angular/core';

import { ListBEService } from '../../services/list-be.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private listBEService: ListBEService
    ) { }

  ngOnInit() {
  }

  isAdmin(): boolean {
    if (this.authService.isAdmin()) {
      return true;
    }
    return false;
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
