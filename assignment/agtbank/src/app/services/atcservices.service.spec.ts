import { TestBed } from '@angular/core/testing';

import { AtcservicesService } from './atcservices.service';

describe('AtcservicesService', () => {
  let service: AtcservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtcservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
