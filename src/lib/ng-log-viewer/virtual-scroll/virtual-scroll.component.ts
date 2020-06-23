import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StreamDataSource} from '../data-sources/stream-data-source';
import {Observable} from 'rxjs';
import {PageModel} from '../page.model';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss']
})
export class VirtualScrollComponent implements OnInit {

  @Input() data: Observable<PageModel<any>>;
  @Input() length: number;
  @Input() totalPages: number;
  @Output() nextPage = new EventEmitter<number>();

  ds: StreamDataSource<any>;

  constructor() {
  }

  ngOnInit() {
    this.ds = new StreamDataSource(this.data, this.length, this.totalPages);

    this.ds.fetchPage.subscribe((pageNumber) => this.nextPage.emit(pageNumber));
  }

}
