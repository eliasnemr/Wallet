import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { environment } from '../../environments/environment';


declare var Minima: any;
@Injectable({
  providedIn: 'root'
})
export class MinimaApiService {

  private host = '';
  private loader: any = null;

  constructor(private http: HttpClient, 
    public loadingController: LoadingController) {

    this.host = environment.defaultNode;
    this.host = this.getHost();

  }

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
    return this.request('createtoken+' + data.token + '+' + data.amount);
  }

  createTXN(data: any){
    const txnidentifier = Math.floor(Math.random()*1000000000);
    const port254 = 254;
    const port255 = 255;
    const customTXN = 
    // Custom TXN with an ID
    "txncreate "+txnidentifier+";"+
    // Add state variable 1
    "txnstate "+txnidentifier+" "+port254+" "+"01000100"+";"+
    // Add User state variable 2
    "txnstate "+txnidentifier+" "+port255+" "+data.message+";"+
    // Auto fill the transaction
    "txnauto "+txnidentifier+" "+data.amount+" "+data.address+" "+data.tokenid+";"+
    // Post it!
    "txnpost "+txnidentifier;

    return this.req(customTXN)
  }

  webLink(data: any) { 
    return this.req('weblink+' + data.url);
  }

  getHost() {
    if (localStorage.getItem('minima_host') == null) {
      localStorage.setItem('minima_host', this.host);
      return this.host;
    } else {
      return localStorage.getItem('minima_host');
    }
  }

  setHost(newHost: string) {
    localStorage.setItem('minima_host', newHost);
    environment.defaultNode = newHost;
    this.host = newHost;
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
    return this.request('history');
  }

  clearMyHistory() {
    return this.request('history clear')
  }

  getStatus() {
    return this.req('status');
  }

  request(route: any) {
    let apiUrl = this.host + route; // this.host = "127.0.0.1:8999/" ** route = "balance" (for example)
    let promise = new Promise((resolve, reject) => {
      this.http.get(apiUrl, {responseType: 'json'})
        .subscribe(data => {
          resolve(data);
        });
    });
    return promise;
  }

  // Use minima.js instead..
  req(fnc: any) {
    let promise = new Promise((resolve, reject) => {
      Minima.cmd(fnc, function(resp){
        resolve(resp);
      });
    })
    return promise;
  }
}
