import { Tokens } from '../models/tokens.model';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

declare var Minima: any;
@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  
  updatedBalance: BehaviorSubject<Tokens[]> = new BehaviorSubject<Tokens[]>(Minima.balance);
  currentBalance: Observable<Tokens[]> = this.updatedBalance.asObservable();

  constructor() { }

  // take in tokenArr and the element you'd like to add to front of array
  update = (a: Tokens[], e) => { var i = a.findIndex(o => o.tokenid === e);
    i > 0 ? a.splice(0,0,a.splice(i,1)[0]) : i && a.splice(0,0,e);
    (a.length > 5) && a.length--
    return a;  
  };

}
