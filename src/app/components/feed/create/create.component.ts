import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/services/feed.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Feed } from 'src/app/models/feed';

@Component({
  selector: 'dt-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public article: Feed;
  feed: FormGroup;

  constructor(private feedService: FeedService) {
    this.feed = this.createFormGroup();
  }

  ngOnInit() {
  }

  createFormGroup() {
    return new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(10)]),
      image: new FormControl(''),
      source: new FormControl('', [Validators.required, Validators.minLength(5)]),
      publisher: new FormControl('', [Validators.required, Validators.minLength(5)]),
      body: new FormControl('', [Validators.required]),
    });
  }

  onSendForm() {
    this.feedService.create(this.feed.value);
  }

  get title() { return this.feed.get('title'); }
  get timage() { return this.feed.get('image'); }
  get source() { return this.feed.get('source'); }
  get publisher() { return this.feed.get('publisher'); }
  get body() { return this.feed.get('body'); }

}
