import { AlertController } from '@ionic/angular';
import {MinimaApiService} from './service/minima-api.service';
import {ToolsService} from './service/tools.service';
import {environment} from './../environments/environment.prod';
import {Component} from '@angular/core';
import {Minima} from 'minima';
import {timer, Subscription} from 'rxjs';

const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

interface Menu {
  title: string;
  routerLink: string;
  icon: string;
  line: string;
  hidden: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
/** Bootstrap appComponent */
export class AppComponent {
  nodeStatus: boolean;
  toggleValue = false;
  currentMode = false;
  menu: Menu[];
  environment = environment;
  $overlaySubscription: Subscription;
  /** */
  constructor(
    public tools: ToolsService,
    private minimaApiService: MinimaApiService,
    public alertController: AlertController) {
    this.nodeStatus = false;
    this.getPages();
    this.initializeApp();
    this.setLocalStorage();
  }
  /** exit lifecycle */
  ionViewWillLeave() {
    this.$overlaySubscription.unsubscribe();
  }
  /** initializeApplication */
  initializeApp() {
    // this.addToHSListener();
    this.initMinima();
  }
  /** addToHomeScreenListener() */
  addToHSListener() {
    // Initialize deferredPrompt for use later to show browser install prompt.
    let deferredPrompt;

    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI notify the user they can install the PWA
      this.promoteAddToHS();
      // Optionally, send analytics event that PWA install promo was shown.
      console.log(`'beforeinstallprompt' event was fired.`);
    });
  }
  async promoteAddToHS() {
    const alert = await this.alertController.create({
      cssClass: 'add-to-hs-alert',
      header: 'Add to homescreen?',
      message: 'You can add Wallet to your homescreen.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        }, {
          text: 'Add',
          handler: () => {
            console.log('Confirm Okay');
          },
        },
      ],
    });

    alert.present();
  }
  /** initMinima Function */
  initMinima() {
    Minima.init((msg: any) => {
      if (msg.event === 'connected') {
        const msZero = 0;
        const msTimer = 3000;
        const source = timer(msZero, msTimer);
        this.$overlaySubscription = source.subscribe((val) => {
          if (Minima.block === 0) {
            this.nodeStatus = false;
          } else if (!this.nodeStatus && Minima.block > 0) {
            setTimeout(() => {
              this.nodeStatus = true;
            }, 2000);
          }
        });
        this.minimaApiService.init(Minima.balance);
      } else if (msg.event === 'newbalance') {
        this.tools.presentToast('Balance updated!', 'primary', 'top');

        this.minimaApiService.$balance.next(msg.info.balance);
      } else if (msg.event === 'miningstart') {
        const miningStatus = {
          'started': true,
          'finished': false,
        };
        this.minimaApiService.$miningStatus.next(miningStatus);
        // this.tools.presentMiningToast(
        //     'Started to mine your transaction.',
        //     'primary',
        //     'bottom');
      } else if (msg.event === 'miningstop') {
        const miningStatus = {
          'started': false,
          'finished': true,
        };
        this.minimaApiService.$miningStatus.next(miningStatus);
        miningStatus.finished = false;
        setTimeout(() => {
          this.minimaApiService.$miningStatus.next(miningStatus);
        }, 4000);
        // this.tools.presentMiningToast(
        //     'Finished mining your transaction.',
        //     'secondary',
        //     'bottom');
      }
    });
  }
  /** Fetch pages */
  getPages() {
    this.menu =
    [
      {
        title: 'Balance',
        routerLink: '/balance',
        icon: 'assets/balanceIcon.svg',
        line: 'none',
        hidden: false,
      },
      {
        title: 'Send',
        routerLink: '/send-funds',
        icon: 'assets/sendIcon.svg',
        line: 'none',
        hidden: false,
      },
      {
        title: 'Receive',
        routerLink: '/my-address',
        icon: 'assets/receiveIcon.svg',
        line: 'none',
        hidden: false,
      },
      {
        title: 'Contacts',
        routerLink: '/contacts',
        icon: 'assets/contactsIcon.svg',
        line: 'none',
        hidden: false,
      },
      {
        title: 'History',
        routerLink: '/history',
        icon: 'assets/historyIcon.svg',
        line: 'none',
        hidden: false,
      },
      {
        title: 'Token',
        routerLink: '/create-token',
        icon: 'assets/createIcon.svg',
        line: 'none',
        hidden: false,
      },
      {
        title: 'Status',
        routerLink: '/status',
        icon: 'assets/statusIcon.svg',
        line: 'none',
        hidden: false},
      {
        title: 'Terminal',
        routerLink: '/mini-term',
        icon: 'assets/terminalIcon.svg',
        line: 'none',
        hidden: false,
      },
      {
        title: 'Community',
        routerLink: '/community',
        icon: 'assets/communityIcon.svg',
        line: 'none',
        hidden: false,
      }];
  }
  setLocalStorage() {
    if (!localStorage.getItem('termFontSize')) {
      localStorage.setItem('termFontSize', '' + 14);
    }
  }
}
