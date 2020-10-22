import { Tokens } from './models/tokens.model';
import { BalanceService } from './service/balance.service';
import { StatusService } from './service/status.service';
import { Component } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { equal } from 'assert';

declare var Minima: any; // Front-end RPC 
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  currentBalance: Tokens[];

  toggleValue: boolean = false;
  currentMode: boolean = false;
  currentVersion = 0;
  activePage: any;
  basic: {title: string, routerLink: string, icon: string, line: string, hidden: boolean}[];
  advanced: {title: string, routerLink: string, icon: string, line: string, hidden: boolean}[];

  constructor(
    private status: StatusService,
    private platform: Platform,
    private storage: Storage,
    private api: BalanceService,
    public toastCtrl: ToastController
  ) {
  
      this.getPages();  /** this returns pages if on mobile or desktop, (different layouts) */ 
      this.initializeApp();

      this.setLocalStorage(); /** set localStorages  */

  }

  /** @@@@@@@@@@@@@ Lifecycle @@@@@@@@@@@@@@@ */
  ionViewWillEnter(){
   this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      Minima.init((msg: any) => {
        if (msg.event === 'connected') {

          console.log('@M:connected');

        } else if (msg.event === 'newbalance') {
          // add new value to observable
          console.log("Balance change.");
          this.api.updatedBalance.next(Minima.balance);

        } else if (msg.event === 'newblock') {

          Minima.cmd('status full', (res: any) => {

            this.status.updatedStatus.next(res.response);

          });

        } else if (msg.event === 'miningstart') {

          this.presentToast("Mining Transaction in progress...", "success");

        } else if (msg.event === 'miningstop') {

          this.presentToast("Mining Transaction stopped...", "danger");

        }
      });
    });
  }

/** @@@@@@@@@@ Misc Functions @@@@@@@@@@@ */
  getPages() {
    if(this.platform.is('desktop') || this.platform.is('pwa')) {
      this.basic =
      [
        { title: 'Balance', routerLink: '/balance', icon: 'card', line: 'none', hidden: false},
        { title: 'Send', routerLink: '/send-funds', icon: 'send', line: 'none', hidden: false},
        { title: 'Receive', routerLink: '/my-address', icon: 'arrow-down', line: 'none', hidden: false},
        { title: 'History', routerLink: '/history', icon: 'book', line: 'half', hidden: false},
      ]
      this.advanced =
      [
        { title:'Token', routerLink: '/create-token', icon: 'brush', line: 'none', hidden: false},
        { title:'Status', routerLink: '/status', icon: 'analytics', line: 'none', hidden: false},
        { title:'Terminal', routerLink: '/mini-term', icon: 'code', line: 'none', hidden: false},
        { title:'Web', routerLink: '/web-scanner', icon: 'desktop', line: 'full', hidden: true},
        { title:'Community', routerLink: '/community', icon: 'share', line: 'half', hidden: false},
        { title:'Settings', routerLink: '/settings', icon: 'build', line: 'none', hidden: true},

      ]
    } else {
      this.basic =
      [
        { title: 'Balance', routerLink: '/balance', icon: 'card', line: 'none', hidden: false},
        { title: 'Send', routerLink: '/send-funds', icon: 'send', line: 'none', hidden: false},
        { title: 'Receive', routerLink: '/my-address', icon: 'arrow-down', line: 'none', hidden: false},
        { title: 'History', routerLink: '/history', icon: 'book', line: 'half', hidden: false},
      ]
      this.advanced =
      [
        { title:'Token', routerLink: '/create-token', icon: 'brush', line: 'none', hidden: false},
        { title:'Status', routerLink: '/status', icon: 'analytics', line: 'none', hidden: false},
        { title:'Terminal', routerLink: '/mini-term', icon: 'code', line: 'none', hidden: false},
        { title:'Web', routerLink: '/web-scanner', icon: 'desktop', line: 'full', hidden: true},
        { title:'Community', routerLink: '/community', icon: 'share', line: 'half', hidden: false},
        { title:'Settings', routerLink: '/settings', icon: 'build', line: 'none', hidden: true},

      ]
    }
  }

  // localStorage
  setLocalStorage() {
    // check cookies for theme
    if(localStorage.getItem('toggleVal') === 'true'){
      document.body.classList.toggle('dark', true);

    } else {
      document.body.classList.toggle('dark', false);
    }

    if(localStorage.getItem('toggleVal') === 'true'){
      this.toggleValue = true;
    } else {
      this.toggleValue = false;
    }

    // localStorage - termFontSize
    if (!localStorage.getItem('termFontSize')) {
      localStorage.setItem('termFontSize', '' + 14);
    }
  }

  checkToggle(e: Event) {
    if(this.toggleValue === false) {
      localStorage.setItem('toggleVal', 'false')
      document.body.classList.toggle('dark', false);
    } else {
      localStorage.setItem('toggleVal', 'true')
      document.body.classList.toggle('dark', true);
    }

  }

  // get a key/value object
  async getObject(key: string): Promise<any> {
    try {
    const result = await this.storage.get(key);
    if (result != null) {
    return JSON.parse(result);
    }
    return null;
    } catch (reason) {
    console.log(reason);
    return null;
    }
    }


  notifyMe() {
    //let notificationIcon = '../assets/icon/icon.png';
    let notificationBody = 'You just received some tokens';
    // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    
    var notification = new Notification("Minima",
    {
      //icon: notificationIcon,
      body: notificationBody
    });
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        
        var notification = new Notification("Minima", 
        {
          //icon: notificationIcon,
          body: notificationBody
        } );
        
      }
    });
  }

  // At last, if the user has denied notifications, and you 
  // want to be respectful there is no need to bother them any more.
  }
  

  async presentToast(txt: string, color: string) {
    // Create a Toast
    const toast = await this.toastCtrl.create({
      header: txt,
      duration: 3000,
      color: color,
      buttons: [{
        text: 'Close',
        role: 'cancel'
      }]
    });
    await toast.present();
  }

}
