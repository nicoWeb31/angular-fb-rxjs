import { TestBed } from '@angular/core/testing';

import { CoreLoaderService } from './core-loader.service';

describe('CoreLoaderService', () => {
  let service: CoreLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
