import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ConstructionComponent } from './components/construction/construction.component';
import { FilterPipe } from './pipes/filter.pipe';
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
    FilterPipe,
    LimitPipe,
    PunctuationPipe,
    SortPipe,
    UnitPipe
  ],
  exports: [
    AngularFontAwesomeModule,
    CommonModule,
    ConstructionComponent,
    FilterPipe,
    LimitPipe,
    PunctuationPipe,
    ReactiveFormsModule,
    SortPipe,
    UnitPipe
  ]
})
export class SharedModule { }
