import { TestBed } from '@angular/core/testing';

import { NgServiceService } from './ng-service.service';

describe('NgServiceService', () => {
  let service: NgServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
