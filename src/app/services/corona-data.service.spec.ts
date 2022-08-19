import { TestBed } from '@angular/core/testing';

import { CoronaDataService } from './corona-data.service';

describe('CoronaDataService', () => {
  let service: CoronaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoronaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
