import { TestBed } from '@angular/core/testing';

import { FeedService } from './feed.service';
import { HttpClientModule } from '@angular/common/http';

describe('FeedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
  });

  it('should be created', () => {
    const service: FeedService = TestBed.get(FeedService);
    expect(service).toBeTruthy();
  });
});
