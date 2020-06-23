import {createAction, props} from '@ngrx/store';
import {Log} from '../lib/ng-log-viewer/log.model';

const FETCH = 'FETCH';
const FETCH_OK = 'FETCH_OK';

export const fetch = createAction(FETCH, props<{ pageNumber: number }>());
export const fetchOk = createAction(FETCH_OK, props<{ pageNumber: number, logs: Log<any>[] }>());
