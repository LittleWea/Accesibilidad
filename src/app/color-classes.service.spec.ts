import { TestBed } from '@angular/core/testing';

import { ColorClassesService } from './color-classes.service';

describe('ColorClassesService', () => {
  let service: ColorClassesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorClassesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
