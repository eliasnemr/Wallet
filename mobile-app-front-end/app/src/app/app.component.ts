import { MinimaApiService } from './service/minima-api.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

declare var Minima: any;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  private currentRoute:string='';
  currentVersion = 0;
  activePage: any;
  basic: {title: string, routerLink: string, icon: string, line: string, hidden: boolean}[];
  advanced: {title: string, routerLink: string, icon: string, line: string, hidden: boolean}[];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private router: Router,
    private api: MinimaApiService,
    private localNotifications: LocalNotifications,
  ) {
    this.getPages();
    //this.getPlatform();
    this.initializeApp();
  }

  ionViewWillEnter(){
   this.initializeApp();
   
  }

  initializeApp() {
    console.log('App initialized');
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      setTimeout(() => {this.splashScreen.hide()}, 2000);
      this.getVersion();
      
      
      // this.router.events.subscribe((val:any) => {
      //   if(val.route&&val.route.path){
      //     this.currentRoute=val.route.path;
      //   }
      //  this.menu.close();
      // });
    });
  }


  getPages() {
    this.basic =
    [
      { title:'Balance', routerLink: '/balance', icon: 'card', line: 'none', hidden: false},
      { title:'Send', routerLink: '/send-funds', icon: 'send', line: 'none', hidden: false},
      { title:'Receive', routerLink: '/my-address', icon: 'arrow-down', line: 'none', hidden: false},
      { title:'History', routerLink: '/history', icon: 'book', line: 'full', hidden: false},
      
    ]

    this.advanced =
    [
      { title:'Token', routerLink: '/create-token', icon: 'brush', line: 'none', hidden: false},
      { title:'Status', routerLink: '/status', icon: 'analytics', line: 'none', hidden: false},
      { title:'Terminal', routerLink: '/mini-term', icon: 'code', line: 'full', hidden: false},
      { title:'Web', routerLink: '/web-scanner', icon: 'desktop', line: 'full', hidden: this.isThisDesktop()},
      { title:'Settings', routerLink: '/settings', icon: 'build', line: 'none', hidden: false},
    ]

    
  }

  checkPage() {

  }

  getImg() {
    if(document.body.classList.value === 'dark'){
      return '../../assets/fulllogodark.svg';
    } else {
      return '../../assets/fulllogo.svg';
    }
  }

  isThisDesktop() {
    if(this.platform.is('desktop')) {
      return true;
    } else {
      return false;
    }
  }

  // userPreferences local storage
  createUserPrefFile() {

  }

  // return platform to assert Minima Web or Minima Native
  getPlatform() {
    //Minima.logout();
    /*  If on desktop do this.. */
    if(this.platform.is('desktop') || this.platform.is('pwa')) {

      console.log('Running Mini Desktop/Pwa');

      window.addEventListener('load', (ev: Event) => {
        console.log('Minima Page loaded..');
        window.addEventListener('MinimaEvent', (evt: any)=> {
          console.log('Event connection successful!');
          if(evt.detail.event === 'connected') {
            console.log('We are now connected with host -> ' + Minima.host);
            this.api.setHost('http://'+ Minima.host + '/');
          } else if(evt.detail.event === 'newbalance') {
            
            this.notifyMe();

          } else if(evt.detail.event === 'newblock') {
            console.log("New block");
          }
        });
        
        Minima.init();
      });
    } else {
      console.log('Running Minima on mobile. :)');
    }
  }

  getVersion() {
    this.api.getStatus().then((res : any) => {

      // Check node's version..
      this.currentVersion = res.response.version;
      
    });
  }

  betaTap() {
    alert("Minima Node Version 0.4");
  }

  notifyMe() {
    let notificationIcon = '../assets/icon/minima.svg';
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
      icon: notificationIcon,
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
          icon: notificationIcon,
          body: notificationBody
        } );
        
      }
    });
  }

  // At last, if the user has denied notifications, and you 
  // want to be respectful there is no need to bother them any more.
  }

}
