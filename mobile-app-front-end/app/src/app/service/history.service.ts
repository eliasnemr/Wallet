import { Injectable } from '@angular/core';
import { map, concatMap } from 'rxjs/operators';
import { Observable, timer, Subject, BehaviorSubject } from 'rxjs';
import { History } from '../models/history.model';

declare var Minima: any;
@Injectable({
    providedIn: 'root'
  })
export class HistoryService {

  // updatedHistory: BehaviorSubject<History[]> = new BehaviorSubject<History[]>();

  public polledHistory$: Observable<any>;
  manualRefresh = new Subject();

  constructor(
  ) { }
      
  getHistory() {
    return this.request('history');
  }
  
  private request(route: any) {
    const historyObservable = Observable.create(observer => {
      Minima.cmd('history', function(res){
        observer.next(res);
      })
      
    });

    let history$ = historyObservable;
    
    return this.polledHistory$ = timer(0, 2000).pipe(
      
      concatMap(_ => history$),
      map((res: {status: boolean, minifunc: string, message: string, response: {history: History[]}}) => res)


  );
  }   
}