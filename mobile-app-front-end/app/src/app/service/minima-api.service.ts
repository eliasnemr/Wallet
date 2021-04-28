import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';
import { ToolsService } from './tools.service';
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Minima, Token } from 'minima';

export interface HistoryInterface {
  status: boolean;
  minifunc: string;
  message: string;
  response: any;
}

@Injectable({
  providedIn: 'root'
})
export class MinimaApiService {
 
  public $balance: Subject<Token[]> = new ReplaySubject<Token[]>(1);
  public $history: Subject<History>;


  constructor(  
    public loadingController: LoadingController,
    private _tools: ToolsService 
  ) {

    // this.$balance = new Subject<Token[]>();
    this.$history = new Subject<History>();

  }

  init(balance: Token[]) {
    this.$balance.next(balance);
  }

  createToken(data: any) {
    if (data.script !== "") {
      if (data.nft === true) {
        return this.req("tokencreate name:\""+data.name+"\" amount:\""+data.amount+'.'+0+"\" description:\""+data.description+"\" script:\""+data.script+"\" icon:\""+data.icon+"\" proof:\""+data.proof+"\"");
      } else {
        return this.req("tokencreate name:\""+data.name+"\" amount:\""+data.amount+"\" description:\""+data.description+"\" script:\""+data.script+"\" icon:\""+data.icon+"\" proof:\""+data.proof+"\"");
      }
    } else {
      if (data.nft === true) {
        return this.req("tokencreate name:\""+data.name+"\" amount:\""+data.amount+'.'+0+"\" description:\""+data.description+"\" icon:\""+data.icon+"\" proof:\""+data.proof+"\"");
      } else {
        return this.req("tokencreate name:\""+data.name+"\" amount:\""+data.amount+"\" description:\""+data.description+"\" icon:\""+data.icon+"\" proof:\""+data.proof+"\"");
      }
    }
    
  }

  validateTokenID(tokenid: string){
    return this.req("tokenvalidate "+tokenid);
  }

  sendMessageTransaction(data: any){
    const postTransaction = "send "+data.amount+" "+data.address+" "+data.tokenid+" "+" 254:[01000100]#255:[\""+data.message+"\"]";
    return this.req(postTransaction);
  }

  webLink(data: any) { 
    return this.req('weblink+' + data.url);
  }

  setHost(newHost: string) {
    localStorage.setItem('minima_host', newHost);
  }

  newAddress() {
    return this.req('newaddress');
  }

  sendFunds(data: any) {
    return this.req('send ' + data.amount + ' ' + data.address + ' ' + data.tokenid);
  }

  giveMe50() {
    return this.req('gimme50');
  }

  getBalance() {
    return this.req('balance');
  }

  getHistory() {
    return this.req('history');
  }

  clearMyHistory() {
    return this.req('history clear')
  }

  getStatus() {
    return this.req('status');
  }

  req(fnc: any) {
    const promise = new Promise((resolve) => {
      Minima.cmd(fnc, (resp: any) => {
        //console.log(resp);
        resolve(resp);
      });
    });
    return promise;
  }
  // File System
  saveFile(data: string, filename: string) {
    return new Promise((resolve, reject) => {
      Minima.file.save(data, filename, (res: any) => {
        resolve(res);
      });
    });
  }

  loadFile(filename: string) {
    return new Promise((resolve, reject) => {
      Minima.file.load(filename, (res: any) => {
        resolve(res);
      })
    });
  }

  removeFile(filename: string) {
    return new Promise((resolve, reject) => {
      Minima.file.delete(filename, (res: any) => {
        if (res.success) {
          resolve(res);
        } else {
          reject();
        }
      });
    })
  }

}
