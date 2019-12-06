import { TestBed } from '@angular/core/testing';

import { DatenServiceService } from './daten-service.service';

describe('DatenServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatenServiceService = TestBed.get(DatenServiceService);
    expect(service).toBeTruthy();
  });
});
