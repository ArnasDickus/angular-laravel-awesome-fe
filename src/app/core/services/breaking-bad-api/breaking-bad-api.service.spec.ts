import { TestBed } from '@angular/core/testing';

import { BreakingBadApiService } from './breaking-bad-api.service';

describe('BreakingBadApiService', () => {
  let service: BreakingBadApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreakingBadApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
