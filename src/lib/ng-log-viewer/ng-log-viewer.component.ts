import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Log} from './log.model';
import {Observable} from 'rxjs';
import {PageModel} from './page.model';

@Component({
  selector: 'app-ng-log-viewer',
  templateUrl: './ng-log-viewer.component.html',
  styleUrls: ['./ng-log-viewer.component.scss']
})
export class NgLogViewerComponent implements OnInit {

  @Input() logs: Observable<PageModel<any>>;
  @Input() length: number;
  @Input() totalPages: number;
  @Output() nextPage = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  onNextPage(pageNumber: number) {
    this.nextPage.emit(pageNumber);
  }

}
