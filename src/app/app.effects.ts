/**
 * Copyright 2019 Dell Inc. or its subsidiaries. All Rights Reserved.
 */
import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {debounceTime, switchMap} from 'rxjs/operators';
import {fetchOk, fetch} from './app.actions';

@Injectable()
export class AppEffects {

  @Effect()
  fetch$ = this.actions$.pipe(
    ofType(fetch),
    debounceTime(150),
    switchMap(({pageNumber}) => of(fetchOk({
      pageNumber,
      logs: Array.from({length: 20}).map((_, i) => ({
        date: new Date().toISOString(),
        message: `Test Message ${pageNumber + i}`,
        metadata: {id: 'abc1'}
      }))
    })))
  );

  constructor(
    private actions$: Actions
  ) {
  }
}
