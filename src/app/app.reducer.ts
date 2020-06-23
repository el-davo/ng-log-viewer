import {createReducer, on} from '@ngrx/store';
import {appState} from './app.state';
import {fetchOk} from './app.actions';

export const reducer = createReducer(
  appState,
  on(fetchOk, (state, {pageNumber, logs}) => ({...state, logs: {...state.logs, [pageNumber]: logs}})),
);
