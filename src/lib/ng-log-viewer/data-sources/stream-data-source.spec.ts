import {StreamDataSource} from './stream-data-source';
import {of} from 'rxjs';

describe('Stream Data Source', () => {

  it('should set observable data source', () => {
    const ds = new StreamDataSource(of([{date: 'Today', message: 'abc123'}]), 1000, 100);

    ds.dateStream.subscribe((result) => {
      expect(result).toEqual([{date: 'Today', message: 'abc123'}]);
    });
  });

  it('should set total pages and page size', () => {
    const ds = new StreamDataSource(of([]), 1000, 10);

    expect(ds.length).toEqual(1000);
    expect(ds.pageSize).toEqual(10);
  });

  it('should request new page be sent', () => {
    const ds = new StreamDataSource(of([]), 1000, 10);

    let count = 0;

    ds.fetchPage.subscribe((result) => {
      expect(result).toEqual(count);
      count++;
    });

    ds.connect({viewChange: of({start: 0, end: 200})});

    expect(count).toEqual(20);
  });
});
