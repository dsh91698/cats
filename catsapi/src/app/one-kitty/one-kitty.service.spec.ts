import { TestBed } from '@angular/core/testing';

import { OneKittyService } from './one-kitty.service';

describe('OneKittyService', () => {
  let service: OneKittyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OneKittyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
