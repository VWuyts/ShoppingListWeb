import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LimitPipe } from './pipes/limit.pipe';
import { PunctuationPipe } from './pipes/punctuation.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { UnitPipe } from './pipes/unit.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LimitPipe,
    PunctuationPipe,
    SortPipe,
    UnitPipe
  ],
  exports: [
    CommonModule,
    LimitPipe,
    PunctuationPipe,
    SortPipe,
    UnitPipe
  ]
})
export class SharedModule { }
