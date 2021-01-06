import { HistoryService } from './service/history.service';
import { BalanceService } from './service/balance.service';
import { StatusService } from './service/status.service';
import { UserConfigService } from './service/userconfig.service';
import { Component } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
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
  basic: {title: string, routerLink: string, icon: string, line: string, hidden: boolean}[];
  advanced: {title: string, routerLink: string, icon: string, line: string, hidden: boolean}[];
  lastHistory: string;

  constructor(
    private status: StatusService,
    private api: BalanceService,
    private userConfigService: UserConfigService,
    private platform: Platform,
    public toastCtrl: ToastController,
    private historyService: HistoryService) {
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
          this.api.updatedBalance.next(Minima.balance);
        } else if (msg.event === 'newbalance') {
          this.api.updatedBalance.next(msg.info.balance);
        } else if (msg.event === 'newblock') {
          // update status observable
          Minima.cmd('status full', (res: any) => {
            this.status.updatedStatus.next(res.response);
          });
          // update history observable+historyPage
          Minima.cmd('history', (res: History) => {
            const temp = JSON.stringify(res);
            if (res.response.history.length > 0 && temp !== this.lastHistory) {
              this.lastHistory = JSON.stringify(res);
              this.historyService.updatedHistory.next(res);
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
      { title: 'Balance', routerLink: '/balance', icon: 'card', line: 'none', hidden: false},
      { title: 'Send', routerLink: '/send-funds', icon: 'send', line: 'none', hidden: false},
      { title: 'Receive', routerLink: '/my-address', icon: 'arrow-down', line: 'none', hidden: false},
      { title: 'History', routerLink: '/history', icon: 'book', line: 'half', hidden: false},
    ]
    this.advanced =
    [
      { title: 'Token', routerLink: '/create-token', icon: 'brush', line: 'none', hidden: false},
      { title: 'Status', routerLink: '/status', icon: 'analytics', line: 'none', hidden: false},
      { title: 'Terminal', routerLink: '/mini-term', icon: 'code', line: 'none', hidden: false},
      { title: 'Community', routerLink: '/community', icon: 'share', line: 'half', hidden: false},
      { title: 'Settings', routerLink: '/settings', icon: 'build', line: 'none', hidden: true}
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
