import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { History } from 'minima';

@Injectable({
    providedIn: 'root'
})
export class HistoryService {

  updatedHistory: BehaviorSubject<History> = new BehaviorSubject<History>({status: false, minifunc: '', message: '', response:{}});

  constructor() {}
}