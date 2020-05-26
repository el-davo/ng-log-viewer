import {Component, Input, OnInit} from '@angular/core';
import {Log} from '../log.model';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss']
})
export class VirtualScrollComponent implements OnInit {

  @Input() logs: Log<any>[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
