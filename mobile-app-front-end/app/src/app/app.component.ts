import { MinimaApiService } from './service/minima-api.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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
    this.initializeApp();
  }

  ionViewWillEnter(){
   this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      //setTimeout(() => {this.splashScreen.hide()}, 2000);

      this.getVersion();
      /*this.router.events.subscribe((val:any) => {
        if(val.route&&val.route.path){
          this.currentRoute=val.route.path;
        }
       //this.menu.close();
      });*/
    });
  }
  getVersion() {
    this.api.getStatus().then((res : any) => {

      // Check node's version..
      this.currentVersion = res.response.version;
      
    });
  }
  ionRouteWillChange() {

  }
}
