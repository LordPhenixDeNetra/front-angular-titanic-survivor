import { TestBed } from '@angular/core/testing';

import { SurvivorTestService } from './survivor-test.service';

describe('SurvivorTestService', () => {
  let service: SurvivorTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurvivorTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
