import { TestBed } from '@angular/core/testing';

import { ListBEService } from './list-be.service';

describe('ListBEService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListBEService = TestBed.get(ListBEService);
    expect(service).toBeTruthy();
  });
});
