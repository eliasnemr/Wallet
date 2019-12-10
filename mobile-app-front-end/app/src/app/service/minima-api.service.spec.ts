import { TestBed } from '@angular/core/testing';

import { MinimaApiService } from './minima-api.service';

describe('MinimaApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MinimaApiService = TestBed.get(MinimaApiService);
    expect(service).toBeTruthy();
  });
});
