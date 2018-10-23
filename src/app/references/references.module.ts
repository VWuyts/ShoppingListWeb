import { NgModule } from '@angular/core';

import { ReferencesComponent } from './components/references/references.component';
import { ReferencesRoutingModule } from './references-routing.module';
import { ReferencesService } from './services/references.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    ReferencesRoutingModule,
    SharedModule
  ],
  declarations: [ReferencesComponent],
  providers: [ReferencesService]
})
export class ReferencesModule { }
