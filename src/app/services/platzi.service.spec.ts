import { TestBed } from '@angular/core/testing';

import { PlatziService } from './platzi.service';

describe('PlatziService', () => {
  let service: PlatziService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatziService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
