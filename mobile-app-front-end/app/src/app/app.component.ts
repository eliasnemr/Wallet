import { MinimaApiService } from './service/minima-api.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

declare var Minima: any;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  private currentRoute:string='';
  public currentVersion = 0;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private router: Router,
    private api: MinimaApiService
  ) {
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
      /*this.router.events.subscribe((val:any) => {
        if(val.route&&val.route.path){
          this.currentRoute=val.route.path;
        }
       //this.menu.close();
      });*/
    });
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

  /* Get platform type to see if should be MiniWeb or not */
  getPlatform() {
    //Minima.logout();
    /*  If on desktop do this.. */
    if(this.platform.is('desktop') || this.platform.is('pwa')) {
      console.log('Running Mini Desktop/Pwa');
      window.addEventListener('load', (ev: Event) => {
        console.log('Minima Page loaded..');
        window.addEventListener('MinimaEvent', (evt: any)=> {
          console.log('Event connection successful!');
          console.log(' ');
          if(evt.detail.event === 'connected') {
            console.log('We are now connected with host -> ' + Minima.host);
            this.api.setHost('http://'+ Minima.host + '/');
          }
        });

        window.addEventListener('newbalance', (evt: any)=> {
          console.log('Balance update ->' + Minima.global_balance);

          
        });

        window.addEventListener('newblock', (evt: any)=> {
          console.log('Block update ->');
          alert('New Block');
          
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
  ionRouteWillChange() {

  }

  betaTap() {
    alert("Minima Node Version 0.4");
  }

 Notifier() {}
}
