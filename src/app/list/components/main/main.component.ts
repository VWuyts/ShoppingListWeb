import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/core/services/auth.service';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private listService: ListService
  ) { }

  ngOnInit() { }

  isAdmin(): boolean {
    if (this.authService.isAdmin()) {
      return true;
    }
    return false;
  }

  onSortAZ() {
    this.listService.changeSortOrder({abc: true, direction: 1});
  }

  onSortZA() {
    this.listService.changeSortOrder({abc: true, direction: -1});
  }

  onSortCategory() {
    this.listService.changeSortOrder({abc: false, direction: 0});
  }

  onClearList() {
    if (confirm('Wil je jouw boodschappenlijst leegmaken?')) {
      this.listService.clearShoppingList();
    }
  }
}
