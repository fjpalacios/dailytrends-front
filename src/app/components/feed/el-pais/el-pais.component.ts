import { Component, OnInit } from '@angular/core';
import { Feed } from 'src/app/models/feed';
import { FeedService } from 'src/app/services/feed.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'dt-el-pais',
  templateUrl: './el-pais.component.html',
  styleUrls: ['./el-pais.component.scss']
})
export class ElPaisComponent implements OnInit {

  feeds: Feed[];
  feedsWithoutImages: Feed[];

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.feedService
      .getAll()
      .pipe(
        map(feeds =>
          feeds.filter(
            (feed: Feed) => feed.image !== '' && feed.source === 'El País'
          )
        )
      )
      .subscribe(
        (feeds: Feed[]) => (this.feeds = feeds),
        err => console.log
      );
    this.feedService
      .getAll()
      .pipe(
        map(feeds =>
          feeds.filter(
            (feed: Feed) => feed.image === '' && feed.source === 'El País'
          )
        )
      )
      .subscribe(
        (feeds: Feed[]) => (this.feedsWithoutImages = feeds),
        err => console.log
      );
  }

}
