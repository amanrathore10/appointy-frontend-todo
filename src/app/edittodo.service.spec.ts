import { TestBed, inject } from '@angular/core/testing';

import { EdittodoService } from './edittodo.service';

describe('EdittodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EdittodoService]
    });
  });

  it('should be created', inject([EdittodoService], (service: EdittodoService) => {
    expect(service).toBeTruthy();
  }));
});
