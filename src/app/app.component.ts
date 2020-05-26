import {Component} from '@angular/core';
import {Log} from '../lib/ng-log-viewer/log.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  logs: Log<{ id: string }>[] = [
    {date: new Date().toISOString(), message: 'Test Message 1', metadata: {id: 'abc1'}},
    {date: new Date().toISOString(), message: 'Test Message 2', metadata: {id: 'abc2'}},
    {date: new Date().toISOString(), message: 'Test Message 3', metadata: {id: 'abc3'}},
    {date: new Date().toISOString(), message: 'Test Message 4', metadata: {id: 'abc4'}},
    {date: new Date().toISOString(), message: 'Test Message 5', metadata: {id: 'abc5'}},
  ];
}
