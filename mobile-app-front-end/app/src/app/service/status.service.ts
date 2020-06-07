import { Status } from '../models/status.model';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable, ChangeDetectorRef } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs';
import { map, concatMap, merge } from 'rxjs/operators';
import { timer } from 'rxjs/Observable/timer';

declare var Minima: any;
@Injectable({
  providedIn: 'root'
})
export class StatusService {

  polledStatus$: Observable<any>;
  manualRefresh = new Subject();

  private host = '';
  private loader: any = null;

  constructor(private http: HttpClient, private ref: ChangeDetectorRef) {
    this.host = environment.defaultNode;
    this.host = this.getHost();
   }
   
  getStatus(): Observable<{ status: boolean, minifunc: string, message: string, response: Status}> {
    return this.request('status');
  }

  private getHost() {
    if (localStorage.getItem('minima_host') == null) {
      localStorage.setItem('minima_host', this.host);
      return this.host;
    } else {
      return localStorage.getItem('minima_host');
    }
  }

  doRefresh(event) {
    this.manualRefresh.next('');
    setTimeout( () => {
      event.target.complete();
    }, 1000);
  }

  private request(route: any) {
    // let apiUrl = this.host + route; // this.host+'route' = "127.0.0.1:8999/'balance'"
    // let status$ = this.http.get(apiUrl);

    const statusObservable = Observable.create(observer => {
      observer.next(Minima.status);
    });

    let status$ = statusObservable;
    
    return this.polledStatus$ = timer(0, 3000).pipe(

      concatMap(_ => status$),
      map((res: {status: boolean, minifunc: string, message: string, response: Status}) => res)

    );
  }


    

}