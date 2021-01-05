import { Minima, NetworkStatus, History } from 'minima';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  valueTransfer: History;

  updatedStatus: Subject<NetworkStatus>;

  constructor() {
    Minima.cmd('status full', (res: any) => {
      if (res.status) {
        const first = res.response;
        this.updatedStatus = new BehaviorSubject<NetworkStatus>(first);
      }
    });
  }
}
