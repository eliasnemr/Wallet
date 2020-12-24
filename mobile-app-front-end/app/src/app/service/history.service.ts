import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { History } from 'minima';

declare var Minima: any;
@Injectable({
    providedIn: 'root'
})
export class HistoryService {

  historyData$: BehaviorSubject<History>;

  constructor() {}

}