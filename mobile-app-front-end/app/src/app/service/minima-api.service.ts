import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { environment } from '../../environments/environment';


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
    console.log('Showloader called. ' + this);
    if (this.loader == null) {
      console.log('Loader called');
      this.loader = await this.loadingController.create({
        message: 'Loading'
      });
      this.loader.present();
      console.log('After showloader finished.');
    }
  }
  async hideLoader() {
    if (this.loader !== null) {
      console.log('Hideloader passed.');
      await this.loader.dismiss();
      this.loader = null;
    } else {}
  }

  createToken(data: any) {
    return this.request('createtoken+' + data.token + '+' + data.amount);
  }

  webLink(data: any) {
    return this.request('weblink+' + data.url);
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
    this.host = newHost;
  }

  newAddress() {
    return this.request('newaddress');
  }

  sendFunds(data: any) {
    return this.request('send+' + data.amount + '+' + data.address + '+' + data.tokenid);
  }

  giveMe50() {
    return this.request('gimme50');
  }

  getBalance() {
    return this.request('balance');
  }

  getHistory() {
    return this.request('history');
  }

  clearMyHistory() {
    return this.request('history clear')
  }

  getStatus() {
    return this.request('status');
  }

  request(route: any) {
    let apiUrl = this.host + route; // this.host = "127.0.0.1:8999/" ** route = "balance" (for example)
    let promise = new Promise((resolve, reject) => {
      this.http.get(apiUrl, {responseType: 'json'})
        .subscribe(data => {
          console.log(data);
          resolve(data);
        });
    });
    return promise;

    // const self = this;
    // console.log(route);
    // return new Promise((resolve, reject) => {
    //   self.http.get(self.host + route, { responseType: 'json' }).subscribe(( d: any ) => {
    //     resolve(d);
    //   }, (err) => {
    //     console.log('Error ' + err );
    //     reject(err);
    //   });
    // });
  }

}
