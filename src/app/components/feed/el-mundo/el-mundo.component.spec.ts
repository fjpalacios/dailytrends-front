import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElMundoComponent } from './el-mundo.component';

describe('ElMundoComponent', () => {
  let component: ElMundoComponent;
  let fixture: ComponentFixture<ElMundoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElMundoComponent ]
    })
    .compileComponents();
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
