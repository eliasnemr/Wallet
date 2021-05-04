import { MinimaApiService } from './service/minima-api.service';
import { ToolsService } from './service/tools.service';
import { environment } from './../environments/environment.prod';
import { Component } from '@angular/core';
import { Minima } from 'minima';

interface Menu {
  title: string;
  routerLink: string;
  icon: string;
  line: string;
  hidden: boolean;
  class: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {

  toggleValue = false;
  currentMode = false;
  menu: Menu[];
  environment = environment;

  constructor(public _tools: ToolsService, private _minimaApiService: MinimaApiService) {
    this.getPages();
    this.initializeApp();
    this.setLocalStorage();
  }

  initializeApp() {
    this.initMinima();
  }

  initMinima() {
    Minima.init((msg: any) => {
      if (msg.event === 'connected') {

        this._minimaApiService.init(Minima.balance);

      } else if (msg.event === 'newbalance') {

        this._tools.presentToast('Balance updated!', 'primary', 'top');
        this._minimaApiService.$balance.next(msg.info.balance);

      } else if (msg.event === 'newblock') {
        
      } else if (msg.event === 'miningstart') {

        this._tools.presentToast('Node Status', 'Mining transaction in progress...', 'top');
      
      } else if (msg.event === 'miningstop') {

        this._tools.presentToast('Node Status', 'Mining ended.', 'top');
      
      } 
    });
  }

  getPages() {
    this.menu =
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

  setLocalStorage() {
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
}
