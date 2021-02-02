import { UserConfig } from './../../models/userConfig.model';
import { UserConfigService } from './../../service/userconfig.service';
import { PopSettingsComponent } from './../../components/pop-settings/pop-settings.component';
import { MinimaApiService } from '../../service/minima-api.service';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { AlertController, IonInfiniteScroll, ToastController, PopoverController, IonButton } from '@ionic/angular';
import { BalanceService } from '../../service/balance.service';
import { Router } from '@angular/router';
import * as SparkMD5 from 'spark-md5';

import { Token } from 'minima';

// declare var Minima: any;
@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss']
})

export class BalancePage implements OnInit {

  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;
  @ViewChild('gimme50Btn', {static: false}) gimme50Btn: IonButton;

  avatar: any;
  user: UserConfig = {
    tokenDisplayMode: 2,
    tips: {
      balance: false,
      balance2: false,
      contacts: false,
      address: false
    }
  };
  
  tokenArr: Token[] = [];
  tokenSpoof: Token[] = [];

  constructor(
    private balanceService: BalanceService,
    private api: MinimaApiService,
    public alertController: AlertController,
    private route: Router,
    public toastController: ToastController,
    public popoverController: PopoverController,
    public userConfigService: UserConfigService,
    private ngZone: NgZone) {}

  ionViewWillEnter() {
    setTimeout(() => {
      this.pullInTokens();
    }, 1000);

    this.userConfigService.userConfig.subscribe((res: UserConfig) => {
      // ngZone re-renders onChange
      this.ngZone.run(() => {
        this.user = res;
      });
    });

  }

  ngOnInit() {}

  async presentSettings(ev: any) {
    const popover = await this.popoverController.create({
      component: PopSettingsComponent,
      cssClass: 'my-custom-class',
      event: ev,
      animated: true,
      translucent: true
    });
    return await popover.present();
  }

  giveMe50() {
    this.api.giveMe50().then((res: any) => {
      if(res.status === true) {
        this.presentAlert('Gimme50', 'Successful', 'Status');
      } else {
        this.presentAlert('Gimme50', res.message, 'Status');
      }
    });
  }

  hideTip() {
    this.user.tips.balance2 = true;
    this.userConfigService.userConfig.next(this.user);
    this.userConfigService.saveUserConfig(this.user);
  }
  // hide welcomeCard
  hide() {
    this.user.tips.balance = true;
    this.userConfigService.userConfig.next(this.user);
    this.userConfigService.saveUserConfig(this.user);
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.tokenArr.length == 5) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  async presentAlert(hdr: string, msg: string, sub: string) {
    const alert = await this.alertController.create({
      cssClass: 'alert',
      header: hdr,
      subHeader: sub,
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
   }

  closeSliding(slidingItem: HTMLIonItemSlidingElement) {
    slidingItem.close();
  }

  createIdenticon(tokenid: string) {
    return this.avatar = 'https://www.gravatar.com/avatar/' + SparkMD5.hash(tokenid) + '?d=identicon';
  }

  public sendTokenOver(slidingItem: HTMLIonItemSlidingElement, id: string) {

    slidingItem.close();

    this.route.navigate(['/send-funds/' + id]);

  }
  // check if it's a token, or a Mini
  instanceOfToken(data: any) {
    return 'script' in data;
  }
 
  pullInTokens() {
    this.balanceService.data.subscribe((balance: Token[]) => {
      this.tokenArr = balance;
    });
  }

}
