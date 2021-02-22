import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Minima } from 'minima';

@Injectable({
  providedIn: 'root'
})
export class MinimaApiService {

  private loader: any = null;

  constructor(  
    public loadingController: LoadingController
  ) { }

  async showLoader() {
    if (this.loader == null) {
      this.loader = await this.loadingController.create({
        message: 'Loading'
      });
      this.loader.present();
    }
  }
  async hideLoader() {
    if (this.loader !== null) {
      await this.loader.dismiss();
      this.loader = null;
    } else {}
  }

  createToken(data: any) {
    return this.req("tokencreate name:\""+data.name+"\" amount:"+data.amount+" description:\""+data.description+"\" script:\""+data.script+"\" icon:"+data.icon+" proof:"+data.proof);
  }

  validateTokenID(tokenid: string){
    return this.req("tokenvalidate "+tokenid);
  }

  sendMessageTransaction(data: any){
    //const txnidentifier = Math.floor(Math.random()*1000000000);
    
    const postTransaction = "send "+data.amount+" "+data.address+" "+data.tokenid+" "+" 254:[01000100]#255:["+data.message+"]";
    
    // const customTXN = 
    // // Custom TXN with an ID
    // "txncreate "+txnidentifier+";"+
    // // Add state variable 1
    // "txnstate "+txnidentifier+" 254 01000100"+";"+
    // // Add User state variable 2
    // "txnstate "+txnidentifier+" 255 \""+data.message+"\""+";"+
    // // Auto fill the transaction
    // "txnauto "+txnidentifier+" "+data.amount+" "+data.address+" "+data.tokenid+";"+
    // // Post it!
    // "txnpost "+txnidentifier+";"+
    // // Clear the txn
    // "txndelete "+txnidentifier+";";
    // // send 1 0xFF 0x00 '254:0x1000#255:[This is a message]'
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

  // Use minima.js instead..
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
