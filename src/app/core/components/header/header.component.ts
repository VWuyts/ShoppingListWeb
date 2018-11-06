import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private pageTitle = 'Boodschappenlijst';

  constructor(
    private title: Title,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
  }

  isLoggedIn() {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    return false;
  }

  onLogout() {
    this.authService.logout();
  }
}
