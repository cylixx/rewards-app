import { TestBed } from '@angular/core/testing';

import { RewardsDataService } from './rewards-data.service';

describe('RewardsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RewardsDataService = TestBed.get(RewardsDataService);
    expect(service).toBeTruthy();
  });
});
