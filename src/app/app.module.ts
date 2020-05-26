import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgLogViewerModule} from '../public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgLogViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
