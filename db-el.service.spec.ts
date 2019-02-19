import { TestBed } from '@angular/core/testing';

import { DbElService } from './db-el.service';

describe('DbElService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbElService = TestBed.get(DbElService);
    expect(service).toBeTruthy();
  });
});
