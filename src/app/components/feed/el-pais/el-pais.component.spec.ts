import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElPaisComponent } from './el-pais.component';
import { HttpClientModule } from '@angular/common/http';
import { SummarizePipe } from 'src/app/pipes/summarize.pipe';
import { RouterTestingModule } from '@angular/router/testing';

describe('ElPaisComponent', () => {
  let component: ElPaisComponent;
  let fixture: ComponentFixture<ElPaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ElPaisComponent, SummarizePipe],
      imports: [HttpClientModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
