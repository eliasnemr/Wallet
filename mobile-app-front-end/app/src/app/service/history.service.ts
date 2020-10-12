import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { History } from '../models/history.model';

declare var Minima: any;
@Injectable({
    providedIn: 'root'
})
export class HistoryService {

  hist: History[];
  history: BehaviorSubject<History[]> = new BehaviorSubject<History[]>(this.hist);

  constructor() {
    Minima.cmd('history', (res: any) => {
      this.history.next(res);
    });
  }

}