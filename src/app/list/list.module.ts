import { NgModule } from '@angular/core';

import { AddCatalogueProductComponent } from './components/add-catalogue-product/add-catalogue-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AdminComponent } from './components/admin/admin.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ListBEService } from './services/list-be.service';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListRoutingModule } from './list-routing.module';
import { ListService } from './services/list.service';
import { MainComponent } from './components/main/main.component';
import { ProductBEService } from './services/product-be.service';
import { ProductComponent } from './components/product/product.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    ListRoutingModule,
    SharedModule
  ],
  declarations: [
    AddCatalogueProductComponent,
    AddProductComponent,
    AdminComponent,
    EditProductComponent,
    ListComponent,
    ListItemComponent,
    MainComponent,
    ProductComponent
  ],
  providers: [
    ListBEService,
    ListService,
    ProductBEService
  ]
})
export class ListModule { }
