import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldFooterComponent } from './old-footer.component';

describe('OldFooterComponent', () => {
  let component: OldFooterComponent;
  let fixture: ComponentFixture<OldFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
