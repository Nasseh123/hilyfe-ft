import { TestBed } from '@angular/core/testing';

import { SvgiconsService } from './svgicons.service';

describe('SvgiconsService', () => {
  let service: SvgiconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvgiconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
