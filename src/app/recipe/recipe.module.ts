import { NgModule } from '@angular/core';

import { MainComponent } from './components/main/main.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RecipeRoutingModule,
    SharedModule
  ],
  declarations: [MainComponent]
})
export class RecipeModule { }
