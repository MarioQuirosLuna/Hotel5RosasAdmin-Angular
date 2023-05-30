import { TestBed } from '@angular/core/testing';

import { SeasonsServiceService } from './seasons-service.service';

describe('SeasonsServiceService', () => {
  let service: SeasonsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeasonsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
