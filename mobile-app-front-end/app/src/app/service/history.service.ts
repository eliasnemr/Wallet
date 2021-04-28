import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { Minima, History } from 'minima';

@Injectable({
    providedIn: 'root'
})
export class HistoryService {

  data: Subject<History> = new ReplaySubject<History>(1);

  constructor() {
    console.log('HistoryService started!');
    this.loadHistory();
  }

  loadHistoryOnce() {
    return this.data.pipe(take(1))
      .toPromise();
  }

  loadHistory() {
    Minima.cmd('history', (response: {status: boolean, minifunc: string, message: string, response: History  }  ) => {
      if (response.status) {
        this.data.next(response.response);
      }
    });
  }

}
