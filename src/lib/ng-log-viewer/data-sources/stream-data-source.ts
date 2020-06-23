import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {Log} from '../log.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {EventEmitter} from '@angular/core';
import {PageModel} from '../page.model';
import {filter, first} from 'rxjs/operators';

export class StreamDataSource<T> extends DataSource<Log<T>> {

  private readonly _dataStream = new BehaviorSubject<Log<T>[]>([]);
  private readonly _length: number;
  private readonly _pageSize: number;
  private readonly _fetchPage: EventEmitter<number>;
  private readonly _fetchedPages = new Set<number>();

  constructor(private inputDataStream: Observable<PageModel<T>>, length: number, pageSize: number) {
    super();

    this._length = length;
    this._pageSize = pageSize;
    this._fetchPage = new EventEmitter<number>();
  }

  connect(collectionViewer: CollectionViewer): Observable<Log<T>[]> {
    collectionViewer.viewChange.subscribe((range) => {
      const startPage = this._getPageForIndex(range.start);
      const endPage = this._getPageForIndex(range.end - 1);
      for (let i = startPage; i <= endPage; i++) {
        this._fetchPage.emit(i);

        this.inputDataStream.pipe(first(), filter(data => i in data)).subscribe((data) => {

          console.log('Hello');
          this._dataStream.next(data[i]);
        });
      }
    });

    return this.dateStream;
  }

  disconnect(collectionViewer: CollectionViewer) {
  }

  private _getPageForIndex(index: number): number {
    return Math.floor(index / this._pageSize);
  }

  get dateStream() {
    return this._dataStream;
  }

  get length() {
    return this._length;
  }

  get pageSize() {
    return this._pageSize;
  }

  get fetchPage() {
    return this._fetchPage;
  }

}
