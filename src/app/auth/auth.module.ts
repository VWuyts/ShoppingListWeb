import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    AuthRoutingModule,
    SharedModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
