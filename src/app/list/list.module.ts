import { NgModule } from '@angular/core';

import { AddCatalogueProductComponent } from './components/add-catalogue-product/add-catalogue-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ListBEService } from './services/list-be.service';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListRoutingModule } from './list-routing.module';
import { MainComponent } from './components/main/main.component';
import { ProductBEService } from './services/product-be.service';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './components/list/list.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  imports: [
    SharedModule,
    ListRoutingModule
  ],
  declarations: [
    AddCatalogueProductComponent,
    AddProductComponent,
    EditProductComponent,
    ListItemComponent,
    MainComponent,
    ListComponent,
    AdminComponent
  ],
  providers: [
    ListBEService,
    ProductBEService
  ]
})
export class ListModule { }
