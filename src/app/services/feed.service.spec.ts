import { TestBed } from '@angular/core/testing';

import { FeedService } from './feed.service';
import { HttpClientModule } from '@angular/common/http';
import { Feed } from '../models/feed';
import { RouterTestingModule } from '@angular/router/testing';

describe('FeedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule]
    });
  });

  it('should be created', () => {
    const service: FeedService = TestBed.get(FeedService);
    expect(service).toBeTruthy();
  });

  describe('getAll()', () => {
    it('should return at least 10 feeds', (done) => {
      const service: FeedService = TestBed.get(FeedService);
      return service.getAll().subscribe(feeds => {
        expect(feeds.length).toBeGreaterThanOrEqual(10);
        done();
      });
    });
  });
});
