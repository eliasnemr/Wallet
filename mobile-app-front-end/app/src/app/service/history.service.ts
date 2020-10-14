import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { History } from '../models/history.model';

declare var Minima: any;
@Injectable({
    providedIn: 'root'
})
export class HistoryService {

  historyData$: BehaviorSubject<History>;

  constructor() {}

}