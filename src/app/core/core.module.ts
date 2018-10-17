import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularFontAwesomeModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  providers: [

  ]
})
export class CoreModule { }
