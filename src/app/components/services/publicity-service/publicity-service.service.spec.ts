import { TestBed } from '@angular/core/testing';

import { PublicityServiceService } from './publicity-service.service';

describe('PublicityServiceService', () => {
  let service: PublicityServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicityServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
