import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgLogViewerModule} from '../public_api';
import {StoreModule} from '@ngrx/store';
import {reducer} from './app.reducer';
import {EffectsModule} from '@ngrx/effects';
import {AppEffects} from './app.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgLogViewerModule,
    StoreModule.forRoot({app: reducer}),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
