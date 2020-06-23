import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {VirtualScrollComponent} from './virtual-scroll.component';
import {By} from '@angular/platform-browser';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {of} from 'rxjs';

describe('VirtualScrollComponent', () => {
  let component: VirtualScrollComponent;
  let fixture: ComponentFixture<VirtualScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [ScrollingModule],
      declarations: [VirtualScrollComponent]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualScrollComponent);
    component = fixture.componentInstance;

    component.data = of([
      {date: 'Today1', message: 'Test 1', metadata: {}},
      {date: 'Today2', message: 'Test 2', metadata: {}},
      {date: 'Today3', message: 'Test 3', metadata: {}},
    ]);

    fixture.detectChanges();
  });

  xit('should display logs', fakeAsync(() => {
    fixture.detectChanges();

    tick(5000);

    console.log(fixture.debugElement.query(By.css('cdk-virtual-scroll-viewport')).nativeElement);

    expect(fixture.debugElement.queryAll(By.css('app-log-item')).length).toEqual(3);
  }));

  it('should request next page when user scrolls', () => {

  });
});
