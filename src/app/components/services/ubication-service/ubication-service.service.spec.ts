import { TestBed } from '@angular/core/testing';

import { UbicationServiceService } from './ubication-service.service';

describe('UbicationServiceService', () => {
  let service: UbicationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UbicationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
