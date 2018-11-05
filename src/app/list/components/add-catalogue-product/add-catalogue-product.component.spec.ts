import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCatalogueProductComponent } from './add-catalogue-product.component';

describe('AddCatalogueProductComponent', () => {
  let component: AddCatalogueProductComponent;
  let fixture: ComponentFixture<AddCatalogueProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCatalogueProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCatalogueProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
