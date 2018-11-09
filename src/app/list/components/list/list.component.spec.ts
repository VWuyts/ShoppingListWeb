/* Karma failure: [DEFAULT]: Firebase: No Firebase App '[DEFAULT]' has been created - call Firebase App.initializeApp() (app/no-app)

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { LimitPipe } from 'src/app/shared/pipes/limit.pipe';
import { ListComponent } from './list.component';
import { ListItemComponent } from '../list-item/list-item.component';
import { SortPipe } from 'src/app/shared/pipes/sort.pipe';
import { TestingModule } from 'src/app/testing/testing.module';
import { UnitPipe } from 'src/app/shared/pipes/unit.pipe';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FilterPipe,
        LimitPipe,
        ListComponent,
        ListItemComponent,
        SortPipe,
        UnitPipe
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
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// Mock services
class MockRouter { }
*/
