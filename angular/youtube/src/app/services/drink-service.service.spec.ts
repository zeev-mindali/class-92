import { TestBed } from '@angular/core/testing';

import { DrinkServiceService } from './drink-service.service';

describe('DrinkServiceService', () => {
  let service: DrinkServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrinkServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
