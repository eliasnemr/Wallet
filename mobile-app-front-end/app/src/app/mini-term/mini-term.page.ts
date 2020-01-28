import { FitAddon } from 'xterm-addon-fit';
import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import * as xterm from 'xterm';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { LoadingController, NavController } from '@ionic/angular';
import { environment } from '../../environments/environment';
import "../../../node_modules/xterm/lib/xterm.js";
import { Content } from "ionic-angular";


//node_modules/xterm/css/xterm.css
@Component({
  selector: 'app-mini-term',
  templateUrl: './mini-term.page.html',
  styleUrls: ['../../../node_modules/xterm/css/xterm.css']
})

export class MiniTermPage implements OnInit {
  @ViewChild('content', {static : false} ) private content: any;
  
  //@ViewChild('terminal', {static: false}) terminal: ElementRef;

  private term: xterm.Terminal;
  
  toExecute = '';
  theExecuted = [];
  isEnabled: boolean;
  private host = '';
  private loader: any = null;



  constructor(private http: HttpClient, public loadingController: LoadingController, public navCtrl: NavController) {
    this.host = environment.defaultNode;
    this.host = this.getHost();

    this.term = new xterm.Terminal({
      cursorBlink: true,
      scrollback: 60,
      rows: 30,
    });


  }

  buttonHandler() {
    if(this.toExecute == '') {
    } else {
      this.isEnabled = true;
    }
  }

  ngOnInit(){}
  ionViewDidEnter(){
    // Xterm.js possible terminal
    // const fitAddon = new FitAddon();
    // this.term.loadAddon(fitAddon);
    // this.term.open( document.getElementById("terminal") );

    // this.term.setOption("allowTransperency", true);
    // this.term.setOption("theme", {background: "rgba(0,0,0,0)"});
    // this.term.focus();

    // fitAddon.fit();
    // this.term.writeln("Welcome to the Minima terminal, type help to start.");
  }

  scrollToBottomOnInit() {
    this.content.scrollToBottom(50);
  }

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
        this.scrollToBottomOnInit();
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
