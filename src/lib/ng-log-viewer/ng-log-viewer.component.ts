import {Component, Input, OnInit} from '@angular/core';
import {Log} from './log.model';

@Component({
  selector: 'app-ng-log-viewer',
  templateUrl: './ng-log-viewer.component.html',
  styleUrls: ['./ng-log-viewer.component.scss']
})
export class NgLogViewerComponent implements OnInit {

  @Input() logs: Log<any>[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
