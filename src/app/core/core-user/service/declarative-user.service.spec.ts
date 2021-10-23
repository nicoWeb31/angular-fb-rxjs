import { TestBed } from '@angular/core/testing';

import { DeclarativeUserService } from './declarative-user.service';

describe('DeclarativeUserService', () => {
  let service: DeclarativeUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeclarativeUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
