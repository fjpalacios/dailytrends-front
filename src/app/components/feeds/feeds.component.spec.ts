import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedsComponent } from './feeds.component';
import { HttpClientModule } from '@angular/common/http';
import { SummarizePipe } from 'src/app/pipes/summarize.pipe';
import { RouterTestingModule } from '@angular/router/testing';

describe('FeedsComponent', () => {
  let component: FeedsComponent;
  let fixture: ComponentFixture<FeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeedsComponent, SummarizePipe],
      imports: [HttpClientModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
