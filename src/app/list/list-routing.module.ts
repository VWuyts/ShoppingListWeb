import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCatalogueProductComponent } from './components/add-catalogue-product/add-catalogue-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminGuard } from '../core/services/admin.guard';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent, children: [
    { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
    { path: 'catalogus/:category', component: AddCatalogueProductComponent },
    { path: 'nieuwProduct/:id/:name', component: EditProductComponent },
    { path: 'pasProductAan/:id/:name', component: EditProductComponent },
    { path: 'voegProductToe', component: AddProductComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
