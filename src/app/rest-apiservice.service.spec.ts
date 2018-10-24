import { TestBed, inject } from '@angular/core/testing';

import { RestApiserviceService } from './rest-apiservice.service';

describe('RestApiserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestApiserviceService]
    });
  });

  it('should be created', inject([RestApiserviceService], (service: RestApiserviceService) => {
    expect(service).toBeTruthy();
  }));
});
