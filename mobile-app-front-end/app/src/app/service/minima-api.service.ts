import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Minima } from 'minima';

@Injectable({
  providedIn: 'root'
})
export class MinimaApiService {

  constructor(  
    public loadingController: LoadingController
  ) { }

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
}
