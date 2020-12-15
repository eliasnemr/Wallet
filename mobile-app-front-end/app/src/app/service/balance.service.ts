import { Mini } from '../models/mini.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Token } from 'minima';
@Injectable({
  providedIn: 'root'
})

export class BalanceService {
  
  updatedBalance: BehaviorSubject<Token[]> = new BehaviorSubject<Token[]>([]);

  constructor() { }

  // take in tokenArr and the element you'd like to add to front of array
  update = (a: Token[] | Mini[], e) => { var i = a.findIndex(o => o.tokenid === e);
    i > 0 ? a.splice(0,0,a.splice(i,1)[0]) : i && a.splice(0,0,e);
    (a.length > 5) && a.length--
    return a;  
  };

}
