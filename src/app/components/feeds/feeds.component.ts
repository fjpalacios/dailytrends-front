import { FeedService } from './../../services/feed.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'dt-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {

  feeds: Observable<any>;

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.feeds = this.feedService.getAll();
  }

}
