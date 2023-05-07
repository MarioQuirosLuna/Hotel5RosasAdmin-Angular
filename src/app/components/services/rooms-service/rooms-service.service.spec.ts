import { TestBed } from '@angular/core/testing';

import { RoomsTypeServiceService } from './rooms-service.service';

describe('RoomsTypeServiceService', () => {
  let service: RoomsTypeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomsTypeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
