import { Tokens } from '../models/tokens.model';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, concatMap, merge } from 'rxjs/operators';
import { Observable, timer, Subject } from 'rxjs';
import { History } from '../models/history.model';

declare var Minima: any;
@Injectable({
    providedIn: 'root'
  })
export class HistoryService {

  public polledHistory$: Observable<any>;
  manualRefresh = new Subject();
  private host = '';

  constructor(private http: HttpClient) {
      this.host = environment.defaultNode;
      this.host = this.getHost();
      }
      
  getHistory() {
    return this.request('history');
  }
  
  private getHost() {
    if (localStorage.getItem('minima_host') == null) {
      localStorage.setItem('minima_host', this.host);
      return this.host;
    } else {
      return localStorage.getItem('minima_host');
    }
  }
  
  private request(route: any) {
    // let apiUrl = this.host + route; // this.host+'route' = "127.0.0.1:8999/'balance'"
    // let history$ = this.http.get(apiUrl);

    const historyObservable = Observable.create(observer => {
      Minima.cmd('history', function(res){
        observer.next(res);
      })
      
    });

    let history$ = historyObservable;
    
    return this.polledHistory$ = timer(0, 2000).pipe(
      
      merge(this.manualRefresh),
      concatMap(_ => history$),
      map((res: {status: boolean, minifunc: string, message: string, response: {history: History[]}}) => res)


  );
  }   
}