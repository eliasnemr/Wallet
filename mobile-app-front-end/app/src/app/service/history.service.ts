import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { History, Minima } from 'minima';

@Injectable({
    providedIn: 'root'
})
export class HistoryService {

  data: Subject<History> = new ReplaySubject<History>(1);

  constructor() {
    this.loadHistory();
  }

  loadHistory() {
    Minima.cmd('history', (res: {status: boolean; message: string; minifunc: string; response: History}) => {
      if (res.status) {
        this.data.next(res.response);
      }
    });
  }

}
