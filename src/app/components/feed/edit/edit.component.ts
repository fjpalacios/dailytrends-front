import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FeedService } from 'src/app/services/feed.service';
import { Feed } from 'src/app/models/feed';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dt-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  private id: string;
  public article: Feed;
  feed: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private feedService: FeedService
  ) {
    this.feed = this.createFormGroup();
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
    });
    this.feedService.getOne(this.id).subscribe(
      data => {
        this.article = data;
        this.updateForm();
      },
      err => console.log
    );
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

  updateForm() {
    this.feed.setValue({
      title: this.article.title,
      image: this.article.image,
      source: this.article.source,
      publisher: this.article.publisher,
      body: this.article.body
    });
  }

  onSendForm() {
    if (this.feed.valid) {
      this.feedService.update(this.id, this.feed.value);
    }
  }

  get title() { return this.feed.get('title'); }
  get timage() { return this.feed.get('image'); }
  get source() { return this.feed.get('source'); }
  get publisher() { return this.feed.get('publisher'); }
  get body() { return this.feed.get('body'); }

}
