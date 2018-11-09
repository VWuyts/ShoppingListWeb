import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunctuationPipe } from 'src/app/shared/pipes/punctuation.pipe';
import { ReferencesComponent } from './references.component';
import { SortPipe } from 'src/app/shared/pipes/sort.pipe';

describe('ReferencesComponent', () => {
  let component: ReferencesComponent;
  let fixture: ComponentFixture<ReferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PunctuationPipe,
        ReferencesComponent,
        SortPipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferencesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
