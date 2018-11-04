import { NgModule } from '@angular/core';

import { DownloadRoutingModule } from './download-routing.module';
import { MainComponent } from './components/main/main.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    DownloadRoutingModule,
    SharedModule
  ],
  declarations: [MainComponent]
})
export class DownloadModule { }
