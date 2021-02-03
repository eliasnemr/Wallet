import { Router, ActivatedRoute } from '@angular/router';
import { ContactService } from './service/contacts.service';
import { HistoryService } from './service/history.service';
import { BalanceService } from './service/balance.service';
import { StatusService } from './service/status.service';
import { UserConfigService } from './service/userconfig.service';
import { Component, NgZone } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import { Minima, History } from 'minima';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {

  toggleValue = false;
  currentMode = false;
  currentVersion = 0;
  activePage: any;
  basic: {title: string, routerLink: string, icon: string, line: string, hidden: boolean, class: string}[];
  advanced: {title: string, routerLink: string, icon: string, line: string, hidden: boolean}[];
  lastHistory: string;

  constructor(
    private status: StatusService,
    private route: ActivatedRoute,
    private api: BalanceService,
    private platform: Platform,
    public toastCtrl: ToastController,
    private historyService: HistoryService,
    private ngZone: NgZone) {
    this.getPages();
    this.initializeApp();
    this.setLocalStorage();
  }

  ionViewWillEnter() {
   this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      Minima.init((msg: any) => {
        if (msg.event === 'connected') {
          this.api.data.next(Minima.balance);
        } else if (msg.event === 'newbalance') {
          this.api.data.next(msg.info.balance);
        } else if (msg.event === 'newblock') {
          // update status observable
          Minima.cmd('status full', (res: any) => {
            this.ngZone.run(() => {
            this.status.updatedStatus.next(res.response);
            });
          });
          // update history observable+historyPage
          Minima.cmd('history', (res: {status: boolean; minifunc: string; message: string; response: History}) => {
            const temp = JSON.stringify(res);
            if (res.response.history.length > 0 && temp !== this.lastHistory) {
              this.lastHistory = JSON.stringify(res.response);
              this.historyService.data.next(res.response);
            }
          });
        } else if (msg.event === 'miningstart') {
          this.presentToast('Mining transaction in progress...', 'primary');
        } else if (msg.event === 'miningstop') {
          this.presentToast('Mining transaction completed.', 'secondary');
        } 
      });
    });
  }

  getPages() {
    this.basic =
    [
      { title: 'Balance', routerLink: '/balance', icon: 'assets/balanceIcon.svg', line: 'none', hidden: false, class: ''},
      { title: 'Send', routerLink: '/send-funds', icon: 'assets/sendIcon.svg', line: 'none', hidden: false, class:''},
      { title: 'Receive', routerLink: '/my-address', icon: 'assets/receiveIcon.svg', line: 'none', hidden: false, class: ''},
      { title: 'Contacts', routerLink: '/contacts', icon: 'assets/contactsIcon.svg', line: 'none', hidden: false, class: ''},
      { title: 'History', routerLink: '/history', icon: 'assets/historyIcon.svg', line: 'none', hidden: false, class: 'border-b'},
      { title: 'Token', routerLink: '/create-token', icon: 'assets/createIcon.svg', line: 'none', hidden: false, class:''},
      { title: 'Status', routerLink: '/status', icon: 'assets/statusIcon.svg', line: 'none', hidden: false, class: ''},
      { title: 'Terminal', routerLink: '/mini-term', icon: 'assets/terminalIcon.svg', line: 'none', hidden: false, class:'' },
      { title: 'Community', routerLink: '/community', icon: 'assets/communityIcon.svg', line: 'none', hidden: false, class:''},
    ]
  }

  // localStorage
  setLocalStorage() {
    // check cookies for theme
    if (localStorage.getItem('toggleVal') === 'true') {
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
