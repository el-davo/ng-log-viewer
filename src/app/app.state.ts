import {Log} from '../lib/ng-log-viewer/log.model';
import {PageModel} from '../lib/ng-log-viewer/page.model';

export const appState: AppState = {
  logs: {}
};

export interface AppState {
  logs: PageModel<any>;
}
