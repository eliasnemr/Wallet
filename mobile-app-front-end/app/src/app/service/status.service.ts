import { Minima, NetworkStatus } from 'minima';
import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  updatedStatus: Subject<NetworkStatus> = new ReplaySubject<NetworkStatus>(1) ;

  constructor() {
    //console.log('StatusService started.');
    Minima.cmd('status full', (res: any) => {
      if (res.status) {
        //console.log(res);
        const first = res.response;
        this.updatedStatus.next(first);
      }
    });
  }
}
