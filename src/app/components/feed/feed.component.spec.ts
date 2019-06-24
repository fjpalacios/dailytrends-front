import { HtmlPipe } from './../../pipes/html.pipe';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedComponent } from './feed.component';
import { HttpClientModule } from '@angular/common/http';

describe('FeedComponent', () => {
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeedComponent, HtmlPipe],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
