import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Token, Minima } from 'minima';
@Injectable({
  providedIn: 'root'
})

export class BalanceService {

  data: BehaviorSubject<Token[]> = new BehaviorSubject<Token[]>(Minima.balance);

  constructor() { }


}
