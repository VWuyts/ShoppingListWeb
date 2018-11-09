/* Karma failure: [DEFAULT]: Firebase: No Firebase App '[DEFAULT]' has been created - call Firebase App.initializeApp() (app/no-app)

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

import { AddCatalogueProductComponent } from './add-catalogue-product.component';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { LimitPipe } from 'src/app/shared/pipes/limit.pipe';
import { ProductComponent } from '../product/product.component';
import { SortPipe } from 'src/app/shared/pipes/sort.pipe';

describe('AddCatalogueProductComponent', () => {
  let component: AddCatalogueProductComponent;
  let fixture: ComponentFixture<AddCatalogueProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddCatalogueProductComponent,
        FilterPipe,
        LimitPipe,
        MockFaComponent,
        ProductComponent,
        SortPipe
      ],
      imports: [ HttpClientModule ],
      providers: [
        {provide: Router, useValue: MockRouter},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCatalogueProductComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// Mock components - Ref: Kern_2017
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'fa',
  template: ''
})
class MockFaComponent { }

// Mock services
class MockRouter { }
*/
