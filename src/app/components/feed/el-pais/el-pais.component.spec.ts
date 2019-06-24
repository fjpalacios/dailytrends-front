import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElPaisComponent } from './el-pais.component';

describe('ElPaisComponent', () => {
  let component: ElPaisComponent;
  let fixture: ComponentFixture<ElPaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElPaisComponent ]
    })
    .compileComponents();
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
