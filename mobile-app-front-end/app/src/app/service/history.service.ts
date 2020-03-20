import { Tokens } from '../MinimaModels/tokens.model';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
export class HistoryService {

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
        let apiUrl = this.host + route; // this.host+'route' = "127.0.0.1:8999/'history'"
      //   let promise = new Promise((resolve, reject) => {
      //     this.http.get<{ status: boolean, minifunc: string, response: {history: MiniHistory} }>(apiUrl)
      //       .pipe(map(responseData => {
      //         const tokenArr: Tokens[] = [];
      //         for(const key in responseData.response.balance){
      //           if (responseData.response.balance.hasOwnProperty(key)){
                  
                    
                  
      //           }
      //         }
      //         return tokenArr;
      //       })
      //       )
      //       .subscribe(data => {
              
      //         console.log(data);
      //         resolve(data);
      //       });
      //   });
      //   return promise;
    
      // }
      }
}