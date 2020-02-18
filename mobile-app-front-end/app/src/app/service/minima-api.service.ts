import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MinimaApiService {

  private host = '';
  private loader: any = null;

  constructor(private http: HttpClient, public loadingController: LoadingController) {
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

  getStatus() {
    return this.request('status');
  }

  request(route) {
    const self = this;
    // self.showLoader();
    console.log(route);
    return new Promise((resolve, reject) => {
      self.http.get(self.host + route, { responseType: 'json' }).subscribe(( d: any ) => {
        // setTimeout(() => { self.hideLoader(); }, 500);
        console.log(d);
        resolve(d);
      }, (err) => {
        self.hideLoader();
        console.log('Error ' + err );
        reject(err);
      });
    });
  }
}
