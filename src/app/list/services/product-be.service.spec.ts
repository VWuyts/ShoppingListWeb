import { TestBed } from '@angular/core/testing';

import { ProductBEService } from './product-be.service';

describe('ProductBEService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductBEService = TestBed.get(ProductBEService);
    expect(service).toBeTruthy();
  });
});
