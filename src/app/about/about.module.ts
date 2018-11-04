import { NgModule } from '@angular/core';

import { AboutRoutingModule } from './about-routing.module';
import { MainComponent } from './components/main/main.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    AboutRoutingModule,
    SharedModule
  ],
  declarations: [MainComponent]
})
export class AboutModule { }
