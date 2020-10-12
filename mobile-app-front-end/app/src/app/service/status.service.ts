import { Status } from '../models/status.model';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

declare var Minima: any;
@Injectable({
  providedIn: 'root'
})
export class StatusService {

  updatedStatus: BehaviorSubject<Status>;
  currentStatus: Observable<Status>;

  constructor() {
    Minima.cmd('status full', (res: any) => {
      if (res.status) {
        this.updatedStatus = new BehaviorSubject<Status>(res.response);  
        this.currentStatus = this.updatedStatus.asObservable();
      }
    });
    
  }
}