import {Component, Input, OnInit} from '@angular/core';
import {Log} from '../log.model';

@Component({
  selector: 'app-log-item',
  templateUrl: './log-item.component.html',
  styleUrls: ['./log-item.component.scss']
})
export class LogItemComponent implements OnInit {

  @Input() log: Log<any>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
