import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', children: [
    { path: '', redirectTo: '/auth/login' , pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'registreren', component: RegisterComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
