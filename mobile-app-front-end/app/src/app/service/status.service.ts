import { Status } from '../models/status.model';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, concatMap } from 'rxjs/operators';
import { timer } from 'rxjs/Observable/timer';

declare var Minima: any;
@Injectable({
  providedIn: 'root'
})
export class StatusService {

  polledStatus$: Observable<any>;
  manualRefresh = new Subject();

  constructor(
  ) { }
   
  getStatus(): Observable<{ status: boolean, minifunc: string, message: string, response: Status}> {
    return this.request('status');
  }

  private request(route: any) {
    const statusObservable = Observable.create(observer => {

      Minima.cmd('status', (res:any) => {
        observer.next(res.response);
      })
    });

    let status$ = statusObservable;
    
    return this.polledStatus$ = timer(0, 3000).pipe(

      concatMap(_ => status$),
      map((res: {status: boolean, minifunc: string, message: string, response: Status}) => res)

    );
  }
}