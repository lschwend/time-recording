import { TestBed } from '@angular/core/testing';

import { TimeRecordServiceService } from './time-record-service.service';

describe('TimeRecordServiceService', () => {
  let service: TimeRecordServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeRecordServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
