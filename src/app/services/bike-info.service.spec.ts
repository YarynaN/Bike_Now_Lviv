import { TestBed } from '@angular/core/testing';

import { BikeInfoService } from './bike-info.service';

describe('BikeInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BikeInfoService = TestBed.get(BikeInfoService);
    expect(service).toBeTruthy();
  });
});
