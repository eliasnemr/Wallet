import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  confirmedBalance = new Subject<number>();
  unconfirmedBalance = new Subject<number>();

  constructor() { }


}
