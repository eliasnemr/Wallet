import { MinimaApiService } from './../../service/minima-api.service';
import { Subscription } from 'rxjs';
import { PopTermComponent } from '../../components/pop-term/pop-term.component';
import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { LoadingController, NavController, IonContent, PopoverController, IonTextarea, AlertController, MenuController } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { UserTerminal } from '../../service/userterminal.service';
import { Minima } from 'minima';

@Component({
  selector: 'app-mini-term',
  templateUrl: './mini-term.page.html',
  styleUrls: ['./mini-term.page.scss']
})

export class MiniTermPage implements OnInit {

  @ViewChild(IonContent, {static : false} ) ionContent: IonContent;
  @ViewChild('terminal', {static: false}) terminal: ElementRef;
  public size: number;
  private host = '';
  public lastLine = '';
  public isEnabled: boolean;
  private loader: any = null;
  public globalInstance: any;
  public fontSubscription: Subscription;

  constructor(
    public menu: MenuController,
    private api: MinimaApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
    public navCtrl: NavController, private renderer: Renderer2,
    public popoverController: PopoverController,
    public userTerminal: UserTerminal) {

    // Disable up and down keys.
      window.addEventListener('keydown', function(e) {
        if ( [37, 38, 39, 40].indexOf(e.keyCode) > -1 ) {
          e.preventDefault();
        }
      }, false);
  }

  ngOnInit() {
    const mStr = parseInt(localStorage.getItem('termFontSize'), 10);
    this.size = mStr;
    // Stored subscription that watches if we activated button on PopTerm
    this.fontSubscription = 
    this.userTerminal.fontSizeEmitter.subscribe( didActivate => {
      if ( this.size !== didActivate ){
          if ( this.size > 0 && this.size <= 50 ) {
            this.size += didActivate;
            localStorage.setItem('termFontSize', '' + this.size);
          } else {
            this.size = 14;
            localStorage.setItem('termFontSize', '' + this.size);
          }
      }
    });
  }

  openMenu() {
    this.menu.open();
  }

  ionViewWillEnter() {}
  ionViewWillLeave() {
   localStorage.setItem('termFontSize', '' + this.size);
   this.fontSubscription.unsubscribe();
  }

  ngAfterViewInit() {
  this.terminal.nativeElement.value += '**********************************************\n';
  this.terminal.nativeElement.value += '*  __  __  ____  _  _  ____  __  __    __    *\n';
  this.terminal.nativeElement.value += '* (  \\/  )(_  _)( \\( )(_  _)(  \\/  )  /__\\   *\n';
  this.terminal.nativeElement.value += '*  )    (  _)(_  )  (  _)(_  )    (  /(__)\\  *\n';
  this.terminal.nativeElement.value += '* (_/\\/\\_)(____)(_)\\_)(____)(_/\\/\\_)(__)(__) *\n';
  this.terminal.nativeElement.value += '*                                            *\n';
  this.terminal.nativeElement.value += '**********************************************\n';

  this.terminal.nativeElement.value += 'Welcome to Minima. For assistance type help. Then press enter.\n';

  this.globalInstance = this.renderer.listen(this.terminal.nativeElement, 'keydown', (e) => {

      if ( [13].indexOf(e.keyCode) > -1 ) {
        // get the whole textarea text..
        const msg = this.terminal.nativeElement.value;
        // get the last line...
        this.lastLine = msg.substr(msg.lastIndexOf('\n') + 1);
        if (this.lastLine.length > 1) {
          // get the json call
          this.request(this.lastLine);
        }
      }
  });

 }

// PopTerm Editing methods
getFontSize() {
  return this.size + 'px';
}

// end of PopTerm Editing methods
scrollToBottomOnInit() {
  // scroll
  setTimeout(() => {

    this.ionContent.scrollToBottom(300);

  }, 200);
}

// Minima Api Service
getHost() {
  if (localStorage.getItem('minima_host') == null) {
    localStorage.setItem('minima_host', this.host);
    return this.host;
  } else {
    return localStorage.getItem('minima_host');
    }
  }

// api calls
request(route: any) {
    if (route === 'printchain') {
      return new Promise((resolve) => {

        Minima.cmd('printchain', (res: any) => {

          const regex = res.replace(environment.newLine, '\\n'); // replace \n with <br/> has all 3 \n|\r|\r\n

          this.terminal.nativeElement.value += regex;

          this.terminal.nativeElement.scrollTop = this.terminal.nativeElement.scrollHeight;

          resolve(res);

        });
      });
    } else if (route === 'tutorial' || route === 'Tutorial') {
        return new Promise((resolve, reject) => {
          Minima.cmd('tutorial', (res: any) => {
            const regex = JSON.stringify(res, undefined, 2).replace('\\\\n', '\n');
            this.terminal.nativeElement.value += regex;
            this.terminal.nativeElement.scrollTop = this.terminal.nativeElement.scrollHeight;
            resolve(res);
          });
        });
    } else {
      return new Promise((resolve, reject) => {
        Minima.cmd(route, ( res: any) => {
          this.terminal.nativeElement.value += JSON.stringify(res, undefined, 2) + '\n';
          this.terminal.nativeElement.scrollTop = this.terminal.nativeElement.scrollHeight;
          resolve(res);
        });
      });
    }
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

  async presentPopover(ev: any) {
  const popover = await this.popoverController.create({
    component: PopTermComponent,
    cssClass: 'terminal-pop',
    event: ev,
    translucent: false
  });

  return await popover.present();

  }

  giveMe50() {
    this.api.giveMe50().then((res: any) => {
      if(res.status === true) {
        this.presentAlert('Gimme50', 'Successful', 'Status');
      } else {
        this.presentAlert('Gimme50', res.message, 'Status');
      }
    });
  }
  async presentAlert(hdr: string, msg: string, sub: string) {
    const alert = await this.alertController.create({
      cssClass: 'alert',
      header: hdr,
      subHeader: sub,
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
   }


}


