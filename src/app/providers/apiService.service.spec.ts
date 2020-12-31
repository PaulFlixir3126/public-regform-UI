import { TestBed, inject } from '@angular/core/testing';

import { restApiService } from './apiService.service';

describe('restApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [restApiService]
    });
  });

  it('should be created', inject([restApiService], (service: restApiService) => {
    expect(service).toBeTruthy();
  }));
});
