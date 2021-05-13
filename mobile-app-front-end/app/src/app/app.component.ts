import {MinimaApiService} from './service/minima-api.service';
import {ToolsService} from './service/tools.service';
import {environment} from './../environments/environment.prod';
import {Component} from '@angular/core';
import {Minima} from 'minima';
import {timer, Subscription} from 'rxjs';

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
    private minimaApiService: MinimaApiService) {
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
    this.initMinima();
  }
  /** initMinima Function */
  initMinima() {
    Minima.init((msg: any) => {
      if (msg.event === 'connected') {
        // console.log('appComponent: Minima connected');
        console.log(msg);

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
        this.tools.presentMiningToast(
            'Started to mine your transaction.',
            'bottom');
      } else if (msg.event === 'miningstop') {
        this.tools.presentMiningToast(
            'Finished mining your transaction.',
            'bottom');
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
  /** Setting localstorage for darkMode, darkMode toggle, terminalFontSize */
  setLocalStorage() {
    if (localStorage.getItem('toggleVal') === 'true') {
      document.body.classList.toggle('dark', true);
    } else {
      document.body.classList.toggle('dark', false);
    }

    if (localStorage.getItem('toggleVal') === 'true') {
      this.toggleValue = true;
    } else {
      this.toggleValue = false;
    }

    if (!localStorage.getItem('termFontSize')) {
      localStorage.setItem('termFontSize', '' + 14);
    }
  }
  /** Check darkMode Toggle */
  checkToggle() {
    if (this.toggleValue === false) {
      localStorage.setItem('toggleVal', 'false');
      document.body.classList.toggle('dark', false);
    } else {
      localStorage.setItem('toggleVal', 'true');
      document.body.classList.toggle('dark', true);
    }
  }
}
