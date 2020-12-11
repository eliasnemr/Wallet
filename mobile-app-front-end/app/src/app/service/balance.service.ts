import { Mini } from './../models/minima.model';
import { Token } from '../models/tokens.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  
  updatedBalance: BehaviorSubject<Token[] | Mini[]> = new BehaviorSubject<Mini[] | Token[]>([]);

  constructor() { }

  // take in tokenArr and the element you'd like to add to front of array
  update = (a: Token[] | Mini[], e) => { var i = a.findIndex(o => o.tokenid === e);
    i > 0 ? a.splice(0,0,a.splice(i,1)[0]) : i && a.splice(0,0,e);
    (a.length > 5) && a.length--
    return a;  
  };

}
