import { TestBed } from '@angular/core/testing';

import { FruitsService } from './fruits.service';

describe('FruitsService', () => {
  let service: FruitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FruitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
