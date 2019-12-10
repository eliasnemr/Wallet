import { Component, OnInit, ViewChild } from '@angular/core';

import {} from 'src/assets/data/terminal.js';
import { Terminal } from 'xterm';

import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-mini-term',
  templateUrl: './mini-term.page.html',
  styleUrls: ['xterm.css']
})

export class MiniTermPage implements OnInit {

  private term: Terminal;
  toExecute = '';
  theExecuted = [];
  

  isEnabled: boolean;
  private host = '';
  private loader: any = null;

  constructor(private http: HttpClient, public loadingController: LoadingController) {
    this.host = environment.defaultNode;
    this.host = this.getHost();
  }

  buttonHandler() {
    if(this.toExecute == '') {
    } else {
      this.isEnabled = true;
    }
  }

  ngOnInit(): void{}

  getHost() {
    if (localStorage.getItem('minima_host') == null) {
      localStorage.setItem('minima_host', this.host);
      return this.host;
    } else {
      return localStorage.getItem('minima_host');
    }
  }

 getCall() {
    return this.request(this.toExecute);
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

  private request(route) {
    const self = this;
    setTimeout( () => {self.showLoader() }, 0);
    console.log(route);
    return new Promise((resolve, reject) => {///+"&t="+Math.random()
      self.http.get(self.host + route, { responseType: 'json' }).subscribe((d: any) => {
        setTimeout( () => { self.hideLoader(); }, 500);
        console.log(d);
        this.theExecuted.push('$' + JSON.stringify(d));
        resolve(d);
      }, (err) => {
        self.hideLoader();
        console.log('Error ' + err );
        reject(err);
      });
    });
  }

}
