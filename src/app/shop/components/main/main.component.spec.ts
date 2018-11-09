import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { ConstructionComponent } from 'src/app/shared/components/construction/construction.component';
import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ConstructionComponent,
        MainComponent,
        MockFaComponent
      ]
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
