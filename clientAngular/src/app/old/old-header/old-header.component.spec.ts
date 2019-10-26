import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldHeaderComponent } from './old-header.component';

describe('OldHeaderComponent', () => {
  let component: OldHeaderComponent;
  let fixture: ComponentFixture<OldHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
