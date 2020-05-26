import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgLogViewerComponent } from './ng-log-viewer.component';

describe('NgLogViewerComponent', () => {
  let component: NgLogViewerComponent;
  let fixture: ComponentFixture<NgLogViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgLogViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgLogViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
