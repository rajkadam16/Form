import { TestBed } from '@angular/core/testing';

import { JsonfilereaderService } from './jsonfilereader.service';

describe('JsonfilereaderService', () => {
  let service: JsonfilereaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonfilereaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
