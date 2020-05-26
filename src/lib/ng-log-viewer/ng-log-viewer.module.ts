import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgLogViewerComponent} from './ng-log-viewer.component';
import {VirtualScrollComponent} from './virtual-scroll/virtual-scroll.component';
import { LogItemComponent } from './log-item/log-item.component';

@NgModule({
  declarations: [NgLogViewerComponent, VirtualScrollComponent, LogItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NgLogViewerComponent
  ]
})
export class NgLogViewerModule {
}
