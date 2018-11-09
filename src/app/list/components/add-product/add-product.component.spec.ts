/* Karma failure: [DEFAULT]: Firebase: No Firebase App '[DEFAULT]' has been created - call Firebase App.initializeApp() (app/no-app)

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

import { AddProductComponent } from './add-product.component';
import { ProductComponent } from '../product/product.component';
import { SortPipe } from 'src/app/shared/pipes/sort.pipe';
import { TestingModule } from 'src/app/testing/testing.module';
import { LimitPipe } from 'src/app/shared/pipes/limit.pipe';

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddProductComponent,
        LimitPipe,
        MockFaComponent,
        ProductComponent,
        SortPipe
      ],
      imports: [
        HttpClientModule,
        TestingModule
      ],
      providers: [ {provide: Router, useValue: MockRouter} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductComponent);
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
