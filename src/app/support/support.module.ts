import { NgModule } from '@angular/core';

import { MainComponent } from './components/main/main.component';
import { SupportRoutingModule } from './support-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    SupportRoutingModule
  ],
  declarations: [MainComponent]
})
export class SupportModule { }
