import { Tokens } from '../MinimaModels/tokens.model';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  loadedTokens: Tokens[];
  public tokensArrService: any;
  private host = '';
  private loader: any = null;

  constructor(private http: HttpClient) {
    this.host = environment.defaultNode;
    this.host = this.getHost();
   }
   
  getBalance() {
    return this.request('balance');
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
    let apiUrl = this.host + route; // this.host+'route' = "127.0.0.1:8999/'balance'"
    let promise = new Promise((resolve, reject) => {
      this.http.get<{ [key: string ]: Tokens}>(apiUrl)
        .pipe(map(responseData => {
          const tokenArr: Tokens[] = [];
          for(const key in responseData.response.balance){
            if (responseData.response.balance.hasOwnProperty(key)){
              let element = responseData.response.balance[key];
              // round up confirmed && unconfirmed
              let tempConfirmed = (Math.round(element.confirmed * 100)/100);
              let tempUnconfirmed = (Math.round(element.unconfirmed * 100)/100);

              tokenArr.push(
                {
                  id: element.tokenid, 
                  token: element.token, 
                  confirmed: tempConfirmed, 
                  unconfirmed: tempUnconfirmed, 
                  total: element.total
                });
            }
          }
          return tokenArr;
        })
        )
        .subscribe(data => {
          console.log(data);
          resolve(data);
        });
    });
    return promise;

  }


}
