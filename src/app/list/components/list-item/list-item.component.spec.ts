import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitPipe } from 'src/app/shared/pipes/limit.pipe';
import { ListItemComponent } from './list-item.component';
import { UnitPipe } from 'src/app/shared/pipes/unit.pipe';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LimitPipe,
        ListItemComponent,
        UnitPipe
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
