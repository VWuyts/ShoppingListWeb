import { NgModule } from '@angular/core';

import { MainComponent } from './components/main/main.component';
import { SharedModule } from '../shared/shared.module';
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ShopRoutingModule
  ],
  declarations: [MainComponent]
})
export class ShopModule { }
