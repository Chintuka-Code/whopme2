import { TestBed } from '@angular/core/testing';

import { GetConvertService } from './get-convert.service';

describe('GetConvertService', () => {
  let service: GetConvertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetConvertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
