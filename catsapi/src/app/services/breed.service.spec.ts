import { TestBed } from '@angular/core/testing';

import { BreedService } from './breed.service';

describe('BridService', () => {
  let service: BreedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
