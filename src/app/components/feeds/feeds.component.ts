import { map } from 'rxjs/operators';
import { Feed } from './../../models/feed';
import { FeedService } from './../../services/feed.service';
import { Component, OnInit } from '@angular/core';
import { filter } from 'minimatch';

@Component({
  selector: 'dt-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {

  feeds: Feed[];
  feedsWithoutImages: Feed[];

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.feedService.getLatest().pipe(
      map(feeds => feeds.filter((feed: Feed) => feed.image !== ''))
    ).subscribe((feeds: Feed[]) => this.feeds = feeds);
    this.feedService.getLatest().pipe(
      map(feeds => feeds.filter((feed: Feed) => feed.image === ''))
    ).subscribe((feeds: Feed[]) => this.feedsWithoutImages = feeds);
  }

}
