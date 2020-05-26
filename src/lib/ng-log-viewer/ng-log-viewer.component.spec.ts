import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgLogViewerComponent} from './ng-log-viewer.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('NgLogViewerComponent', () => {
  let component: NgLogViewerComponent;
  let fixture: ComponentFixture<NgLogViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [NgLogViewerComponent]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgLogViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a virtual scroll', () => {
    expect(fixture.debugElement.query(By.css('app-virtual-scroll'))).not.toBeNull();
  });
});
