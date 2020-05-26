import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgLogViewerComponent} from './ng-log-viewer.component';

@NgModule({
  declarations: [NgLogViewerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NgLogViewerComponent
  ]
})
export class NgLogViewerModule {
}
