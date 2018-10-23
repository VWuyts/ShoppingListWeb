import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReferencesComponent } from './components/references/references.component';

const routes: Routes = [
  {path: '', component: ReferencesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferencesRoutingModule { }
