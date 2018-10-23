import { TestBed } from '@angular/core/testing';

import { ReferencesService } from './references.service';

describe('ReferenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReferencesService = TestBed.get(ReferencesService);
    expect(service).toBeTruthy();
  });
});
