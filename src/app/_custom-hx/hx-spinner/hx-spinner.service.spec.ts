import { TestBed } from '@angular/core/testing';

import { HxSpinnerService } from './hx-spinner.service';

describe('HxSpinnerService', () => {
  let service: HxSpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HxSpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
