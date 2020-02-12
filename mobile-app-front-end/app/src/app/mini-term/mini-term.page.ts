import { Component, OnInit, ViewChild, ElementRef, Renderer2} from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { LoadingController, NavController, IonContent } from '@ionic/angular';
import { environment } from '../../environments/environment';
import { MinimaApiService } from '../service/minima-api.service';

@Component({
  selector: 'app-mini-term',
  templateUrl: './mini-term.page.html',
  styleUrls: ['./mini-term.page.scss']
})

export class MiniTermPage implements OnInit {
  @ViewChild(IonContent, {static : false} ) ionContent: IonContent;
  @ViewChild('terminal', {static: false}) terminal: ElementRef;


  private host = '';
  lastLine = '';
  isEnabled: boolean; 
  private loader: any = null;
  globalInstance: any;
   

  constructor(private http: HttpClient, public loadingController: LoadingController,
     public navCtrl: NavController, private renderer: Renderer2) {

      this.host = environment.defaultNode;
      this.host = this.getHost();

    // Disable up and down keys.
          window.addEventListener("keydown", function(e) {
            if([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
                e.preventDefault();
            }
        }, false);

    }

  
  ngOnInit(){}

  ngAfterViewInit() {

    this.terminal.nativeElement.value += "**********************************************\n";
    this.terminal.nativeElement.value += "*  __  __  ____  _  _  ____  __  __    __    *\n";
    this.terminal.nativeElement.value += "* (  \\/  )(_  _)( \\( )(_  _)(  \\/  )  /__\\   *\n";
    this.terminal.nativeElement.value += "*  )    (  _)(_  )  (  _)(_  )    (  /(__)\\  *\n";
    this.terminal.nativeElement.value += "* (_/\\/\\_)(____)(_)\\_)(____)(_/\\/\\_)(__)(__) *\n";
    this.terminal.nativeElement.value += "*                                            *\n";
    this.terminal.nativeElement.value += "**********************************************\n";

    this.terminal.nativeElement.value += "Welcome to Minima. For assistance type help. Then press enter.\n";

    this.globalInstance = this.renderer.listen(this.terminal.nativeElement, 'keydown', (e) => {

        if([13].indexOf(e.keyCode) > -1) {
          // get the whole textarea text..
          var msg = this.terminal.nativeElement.value;

          // get the last line...
          this.lastLine = msg.substr(msg.lastIndexOf("\n")+1);

          // get the json call
          this.request(this.lastLine);
        }
    });

 }


  scrollToBottomOnInit() {
    console.log("scrolling");
    setTimeout(() => {
      this.ionContent.scrollToBottom(300);
    }, 200);
    console.log("scrolled.") 
  }


  //Minima Api Service
  getHost() {
    if (localStorage.getItem('minima_host') == null) {
      localStorage.setItem('minima_host', this.host);
      return this.host;
    } else {
      return localStorage.getItem('minima_host');
    }
  }

  //api calls
  request(route) {
    const self = this;
    console.log(route);
    return new Promise((resolve, reject) => {
      self.http.get(self.host + route, { responseType: 'json' }).subscribe(( d: any ) => {

        this.terminal.nativeElement.value += JSON.stringify(d, undefined, 2) + "\n";

        this.terminal.nativeElement.scrollTop = this.terminal.nativeElement.scrollHeight;
        resolve(d);
      }, (err) => {
        self.hideLoader();
        console.log('Error ' + err );
        reject(err);
      });
    });
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


}


