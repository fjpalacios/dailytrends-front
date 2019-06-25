import { Component, OnInit } from '@angular/core';
import { Feed } from 'src/app/models/feed';
import { FeedService } from 'src/app/services/feed.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'dt-el-mundo',
  templateUrl: './el-mundo.component.html',
  styleUrls: ['./el-mundo.component.scss']
})
export class ElMundoComponent implements OnInit {

  feeds: Feed[];
  feedsWithoutImages: Feed[];

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.feedService
      .getAll()
      .pipe(
        map(feeds =>
          feeds.filter(
            (feed: Feed) => feed.image !== '' && feed.source === 'El Mundo'
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
            (feed: Feed) => feed.image === '' && feed.source === 'El Mundo'
          )
        )
      )
      .subscribe(
        (feeds: Feed[]) => (this.feedsWithoutImages = feeds),
        err => console.log
      );
  }

}
