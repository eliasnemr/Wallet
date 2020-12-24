import { Minima, Status, History } from 'minima';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  valueTransfer: History;

  updatedStatus: Subject<Status>;

  constructor() {
    Minima.cmd('status full', (res: any) => {
      if (res.status) {
        const first = res.response;
        this.updatedStatus = new BehaviorSubject<Status>(first);
      }
    });
  }
}
