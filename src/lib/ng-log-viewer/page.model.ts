import {Log} from './log.model';

export interface PageModel<T> {
  [key: number]: Log<T>[];
}
