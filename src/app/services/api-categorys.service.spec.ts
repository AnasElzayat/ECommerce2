import { TestBed } from '@angular/core/testing';

import { ApiCategorysService } from './api-categorys.service';

describe('ApiCategorysService', () => {
  let service: ApiCategorysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCategorysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
