import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCatalogueProductComponent } from './components/add-catalogue-product/add-catalogue-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminGuard } from '../auth/guards/admin.guard';
import { AuthGuard } from '../auth/guards/auth.guard';
import { CanDeactivateGuard } from '../core/guards/can-deactivate-guard';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent, canActivate: [AuthGuard], children: [
    { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
    { path: 'catalogus/:category', component: AddCatalogueProductComponent },
    { path: 'nieuwProduct/:id/:name', component: EditProductComponent, canDeactivate: [CanDeactivateGuard] },
    { path: 'pasProductAan/:id/:name', component: EditProductComponent, canDeactivate: [CanDeactivateGuard] },
    { path: 'voegProductToe', component: AddProductComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
