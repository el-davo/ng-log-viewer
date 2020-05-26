import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VirtualScrollComponent} from './virtual-scroll.component';
import {By} from '@angular/platform-browser';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('VirtualScrollComponent', () => {
  let component: VirtualScrollComponent;
  let fixture: ComponentFixture<VirtualScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [VirtualScrollComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualScrollComponent);
    component = fixture.componentInstance;

    component.logs = [
      {date: 'Today1', message: 'Test 1', metadata: {}},
      {date: 'Today2', message: 'Test 2', metadata: {}},
      {date: 'Today3', message: 'Test 3', metadata: {}},
    ];

    fixture.detectChanges();
  });

  it('should display logs', () => {
    expect(fixture.debugElement.queryAll(By.css('app-log-item')).length).toEqual(3);
  });
});
