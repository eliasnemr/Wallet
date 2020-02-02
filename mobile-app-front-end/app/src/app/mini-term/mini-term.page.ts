import { FitAddon } from 'xterm-addon-fit';
import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import * as xterm from 'xterm';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { LoadingController, NavController, IonContent } from '@ionic/angular';
import { environment } from '../../environments/environment';
import { Content } from "ionic-angular";

//node_modules/xterm/css/xterm.css
@Component({
  selector: 'app-mini-term',
  templateUrl: './mini-term.page.html',
  styleUrls: ['../../../node_modules/xterm/css/xterm.css']
})

export class MiniTermPage implements OnInit {
  @ViewChild('content', {static : false} ) private content: IonContent;
  
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

  }

  buttonHandler() {
    if(this.toExecute == '') {
    } else {
      this.isEnabled = true;
    }
  }

  ngOnInit(){}
  ionViewDidEnter(){

  }

  scrollToBottomOnInit() {
    this.content.scrollToBottom(1500);
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
    //setTimeout( () => {self.showLoader() }, 0);
    console.log(route);
    return new Promise((resolve, reject) => {///+"&t="+Math.random()
      self.http.get(self.host + route, { responseType: 'json' }).subscribe((d: any) => {
        //setTimeout( () => { self.hideLoader(); }, 500);
        console.log(d);
      
        if(this.toExecute === '') {
          this.theExecuted.push('m:/ > ' + this.toExecute);
          this.scrollToBottomOnInit();
        } else if (d.status === true) {

        const objpretty = JSON.stringify(d, undefined, 1);
        this.theExecuted.push('m:/ > ' + this.toExecute);
        this.theExecuted.push(objpretty);
      
        this.toExecute = '';
        this.scrollToBottomOnInit();
      } else {
        this.theExecuted.push('m:/ > ' + this.toExecute + '\n' 
        + 'zsh: command not found: '+this.toExecute);
        this.toExecute = '';
        this.scrollToBottomOnInit();
      }  
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

  // $(function() {
  //   $('.terminal').on('click', function(){
  //      $('#input').focus();
  //   });
  
  //   $('#input').on('keydown',function search(e) {
  //     if(e.keyCode == 13) {
  //       // append your output to the history,
  //       // here I just append the input
  //       $('#history').append($(this).val()+'<br/>');
        
  //       // you can change the path if you want
  //       // crappy implementation here, but you get the idea
  //       if($(this).val().substring(0, 3) === 'cd '){
  //         $('#path').html($(this).val().substring(3)+'&nbsp;>&nbsp;');
  //       }
        
  //       // clear the input
  //       $('#input').val('');
        
  //     }
  //   });
  // });
  execute() {


  }

}
