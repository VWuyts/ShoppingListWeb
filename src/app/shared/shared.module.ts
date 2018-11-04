import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ConstructionComponent } from './components/construction/construction.component';
import { LimitPipe } from './pipes/limit.pipe';
import { PunctuationPipe } from './pipes/punctuation.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { UnitPipe } from './pipes/unit.pipe';

@NgModule({
  imports: [
    AngularFontAwesomeModule,
    CommonModule,
    RouterModule // needed for home link in ConstructionComponent
  ],
  declarations: [
    ConstructionComponent,
    LimitPipe,
    PunctuationPipe,
    SortPipe,
    UnitPipe,
  ],
  exports: [
    CommonModule,
    ConstructionComponent,
    LimitPipe,
    PunctuationPipe,
    SortPipe,
    UnitPipe
  ]
})
export class SharedModule { }
