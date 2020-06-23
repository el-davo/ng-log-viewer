import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {ModuleState} from './module.state';
import {Log} from '../lib/ng-log-viewer/log.model';
import {fetch} from './app.actions';
import {PageModel} from '../lib/ng-log-viewer/page.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  logs$: Observable<PageModel<any>>;
  length = 200;
  totalPages = 5;

  constructor(private store: Store<ModuleState>) {
  }

  ngOnInit() {
    this.logs$ = this.store.pipe(select((state) => state.app.logs));
    this.store.dispatch(fetch({pageNumber: 0}));
    this.logs$.subscribe(console.log);
  }

  onNextPage(pageNumber: number) {
    console.log(`Requested page ${pageNumber}`);
    this.store.dispatch(fetch({pageNumber}));
  }
}
