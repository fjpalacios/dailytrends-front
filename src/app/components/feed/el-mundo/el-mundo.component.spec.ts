import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElMundoComponent } from './el-mundo.component';
import { HttpClientModule } from '@angular/common/http';
import { SummarizePipe } from 'src/app/pipes/summarize.pipe';
import { RouterTestingModule } from '@angular/router/testing';

describe('ElMundoComponent', () => {
  let component: ElMundoComponent;
  let fixture: ComponentFixture<ElMundoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ElMundoComponent, SummarizePipe],
      imports: [HttpClientModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElMundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
