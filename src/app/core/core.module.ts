import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthInterceptor } from './interceptors/auth.interceptor';
import { FooterComponent } from './components/footer/footer.component';
import { CanDeactivateGuard } from './guards/can-deactivate-guard';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

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
    CanDeactivateGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ]
})
export class CoreModule { }
