import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

declare var Minima: any;
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

  createTXN(data: any){
    const txnidentifier = Math.floor(Math.random()*1000000000);
    const port254 = 254;
    const port255 = 255;
    const customTXN = 
    // Custom TXN with an ID
    "txncreate "+txnidentifier+";"+
    // Add state variable 1
    "txnstate "+txnidentifier+" 254 01000100"+";"+
    // Add User state variable 2
    "txnstate "+txnidentifier+" 255 \""+data.message+"\""+";"+
    // Auto fill the transaction
    "txnauto "+txnidentifier+" "+data.amount+" "+data.address+" "+data.tokenid+";"+
    // Post it!
    "txnpost "+txnidentifier+";"+
    // Clear the txn
    "txndelete "+txnidentifier+";";

    return this.req(customTXN)
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
    let promise = new Promise((resolve, reject) => {
      Minima.cmd(fnc, function(resp){
        //console.log(resp);
        resolve(resp);
      });
    })
    return promise;
  }
}
