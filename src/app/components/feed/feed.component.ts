import { Feed } from './../../models/feed';
import { FeedService } from './../../services/feed.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'dt-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  private id: string;
  public article: Feed;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private feedService: FeedService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
    });
    this.feedService.getOne(this.id).subscribe(data => {
      this.article = data;
    });
  }

}
