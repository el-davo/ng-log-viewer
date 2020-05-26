import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LogItemComponent} from './log-item.component';
import {By} from '@angular/platform-browser';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('LogItemComponent', () => {
  let component: LogItemComponent;
  let fixture: ComponentFixture<LogItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [LogItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogItemComponent);
    component = fixture.componentInstance;

    component.log = {
      date: 'Today',
      message: 'Test Message',
      metadata: {}
    };

    fixture.detectChanges();
  });

  it('should display date', () => {
    expect(fixture.debugElement.query(By.css('.date')).nativeElement.textContent).toContain('Today');
  });

  it('should display message', () => {
    expect(fixture.debugElement.query(By.css('.message')).nativeElement.textContent).toContain('Test Message');
  });
});
