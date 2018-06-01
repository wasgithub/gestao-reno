import { TestBed, inject } from '@angular/core/testing';

import { NegocioDataService } from './negocio-data.service';

describe('NegocioDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NegocioDataService]
    });
  });

  it('should be created', inject([NegocioDataService], (service: NegocioDataService) => {
    expect(service).toBeTruthy();
  }));
});
