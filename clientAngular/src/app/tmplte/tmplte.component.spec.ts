import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmplteComponent } from './tmplte.component';

describe('TmplteComponent', () => {
  let component: TmplteComponent;
  let fixture: ComponentFixture<TmplteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmplteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmplteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
