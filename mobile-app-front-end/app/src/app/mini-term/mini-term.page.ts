import { Component, OnInit, ViewChild } from '@angular/core';

import {} from 'src/assets/data/terminal.js';
import { Terminal } from 'xterm';

import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-mini-term',
  templateUrl: './mini-term.page.html',
  styleUrls: ['mini-term.page.scss']
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
        
        const objpretty = JSON.stringify(d, undefined, 1);
        this.theExecuted.push('$' + objpretty);
        resolve(d);
      }, (err) => {
        self.hideLoader();
        console.log('Error ' + err );
        reject(err);
      });
    });
  }



  syntaxHighlight(json) {
    if (typeof json !== 'string') {
         json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, 
    (match) => {
        let cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
  }

}
