import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgLogViewerComponent} from './ng-log-viewer.component';
import {VirtualScrollComponent} from './virtual-scroll/virtual-scroll.component';
import {LogItemComponent} from './log-item/log-item.component';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [NgLogViewerComponent, VirtualScrollComponent, LogItemComponent],
  imports: [
    CommonModule,
    ScrollingModule
  ],
  exports: [
    NgLogViewerComponent
  ]
})
export class NgLogViewerModule {
}
