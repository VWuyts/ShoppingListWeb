import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [
    AngularFontAwesomeModule,
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ],
  providers: [
    AuthService
  ]
})
export class CoreModule { }
