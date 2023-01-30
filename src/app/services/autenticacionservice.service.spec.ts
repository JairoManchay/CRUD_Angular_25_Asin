import { TestBed } from '@angular/core/testing';

import { AutenticacionserviceService } from './autenticacionservice.service';

describe('AutenticacionserviceService', () => {
  let service: AutenticacionserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticacionserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
