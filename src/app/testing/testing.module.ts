import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterLinkDirectiveStub } from './router-link-directive-stub.directive';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ RouterLinkDirectiveStub ],
  exports: [ RouterLinkDirectiveStub ]
})
export class TestingModule { }
