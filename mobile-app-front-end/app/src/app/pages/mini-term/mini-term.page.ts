import { Font } from './../../service/userterminal.service';
import { ToolsService } from './../../service/tools.service';
import { MinimaApiService } from './../../service/minima-api.service';
import { Subscription } from 'rxjs';
import { PopTermComponent } from '../../components/pop-term/pop-term.component';
import { Component, OnInit, ViewChild, ElementRef, Renderer2, HostListener } from '@angular/core';
import { LoadingController, NavController, IonContent, PopoverController, MenuController } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { UserTerminal } from '../../service/userterminal.service';
import { Minima } from 'minima';

@Component({
  selector: 'app-mini-term',
  templateUrl: './mini-term.page.html',
  styleUrls: ['./mini-term.page.scss']
})

export class MiniTermPage implements OnInit {

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if(event.key == 'ArrowDown' || event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'ArrowUp'){
      // Your row selection code
      event.preventDefault();

    }
  }

  @ViewChild(IonContent, {static : false} ) ionContent: IonContent;
  @ViewChild('terminal', {static: false}) terminal: ElementRef;
  fontSize: number;
  host = '';
  lastLine = '';
  isEnabled: boolean;
  globalInstance: any;
  $fontSubscription: Subscription;

  constructor(
    public menu: MenuController,
    public loadingController: LoadingController,
    public navCtrl: NavController,
    public popoverController: PopoverController,
    public userTerminal: UserTerminal,
    private myTools: ToolsService,
    private api: MinimaApiService,
    private renderer: Renderer2,
    ) { }

  ngOnInit() {}
    
  ionViewWillEnter() { 

    this.initTerminal();
  
  }
  
  ionViewWillLeave() {
        
    this.$fontSubscription.unsubscribe();
  
    window.removeEventListener("keydown", function(e) {
    if ( [37, 38, 39, 40].indexOf(e.keyCode) > -1 ) {
      e.preventDefault();
    }
    }, true)

  }

  openMenu() {
    this.menu.open();
  }

  initTerminal() {
    const USER_FONT_SIZE = parseInt(localStorage.getItem('userdefaultfontsize'), 10);
    const DEFAULT_FONT_SIZE = 16;
    (localStorage.getItem('userdefaultfontsize') ?

      this.fontSize = USER_FONT_SIZE

      :

      this.fontSize = DEFAULT_FONT_SIZE

    );
    // UPDATE OBSERVABLE&LOCALSTORAGE
    this.updateFontSizeSubject(this.fontSize);

    this.$fontSubscription = this.userTerminal.fontSizeEmitter.subscribe((res: Font) => {
      
      this.fontSize = res.size;

    })

  }

  updateFontSizeSubject(size: number) {
    this.userTerminal.fontSizeEmitter.next({size: size});
    localStorage.setItem('userdefaultfontsize', JSON.stringify(size));
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

numToPixels(num: number) {
  return num + 'px';
}

scrollToBottomOnInit() {
  try {

    this.ionContent.scrollToBottom(300);

  } catch (err) {

    throw new Error('ionContent not found.')

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
        this.myTools.presentAlert('Gimme50', 'Successful', 'Status');
      } else {
        this.myTools.presentAlert('Gimme50', res.message, 'Status');
      }
    });
  }
}


