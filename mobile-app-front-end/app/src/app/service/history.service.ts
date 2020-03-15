import { T_Summary } from './../MiniObjects/t_summary.model';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
  })
export class HistoryService {

  loadedHistory: T_Summary[];
  private host = '';
  private loader: any = null;

  constructor(private http: HttpClient) {
    this.host = environment.defaultNode;
    this.host = this.getHost();
   }

    getHistory() {
        return this.request('history');
    }

    clearMyHistory() {
        return this.request('history clear')
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
      this.http.get<{ [key: string ]: T_Summary[]}>(apiUrl)
        .pipe(map(responseData => {
          const transHistoryArr: T_Summary[] = [];
          for(const key in responseData.response.history){
            if (responseData.response.history.hasOwnProperty(key)){

                let activity = responseData.response.history;
            // get the information of summary
            let Month = activity.txpow.date.substring(4,7);
            let Day = activity.txpow.date.substring(8, 10);
            let Tokenid = activity.txpow.txn.inputs.tokenid;
            let Amount = activity.value;
            let InputsArr = activity.txpow.txn.inputs;
            let OutputsArr = activity.txpow.txn.outputs;
            let Address = '';

            // get information of Details
            let blockNumber = activity.txpow.block;
            let isBlock = activity.txpow.isblock;
            let txpowid = activity.txpow.txpowid;
            let parent = activity.txpow.parent;
            let blockdiff = activity.txpow.blockdiff;
            let date = activity.txpow.date.substring(4);
            // Loop in inputs and get required key indexes to create our summary obj
            InputsArr.forEach(element => {
                Tokenid = element.tokenid.substring(0, 10);
            });
            OutputsArr.forEach(element => {
                Address = element.address;
            });


              transHistoryArr.push(
                {
                  id: key,
                  transMonth: Month,
                  transDay: Day,
                  transTokenId: Tokenid,
                  transAmount: Amount,
                  transConversion: 0,
                  receivingAddress: Address,
                  blockNumber: blockNumber,
                  isBlock: isBlock,
                  txpowid: txpowid,
                  parent: parent,
                  blockdiff: blockdiff,
                  date: date
                });
            }
          }
          return transHistoryArr;
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