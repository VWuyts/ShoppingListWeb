/* Karma failure: [DEFAULT]: Firebase: No Firebase App '[DEFAULT]' has been created - call Firebase App.initializeApp() (app/no-app)

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

import { MainComponent } from './main.component';
import { TestingModule } from 'src/app/testing/testing.module';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListStubComponent,
        MainComponent,
        MockFaComponent,
        RouterOutletStubComponent
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
    fixture = TestBed.createComponent(MainComponent);
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

// Stub components
@Component({
  selector: 'app-list',
  template: ''
})
class ListStubComponent { }

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'router-outlet',
  template: ''
})
class RouterOutletStubComponent { }

// Mock services
class MockRouter { }
*/
