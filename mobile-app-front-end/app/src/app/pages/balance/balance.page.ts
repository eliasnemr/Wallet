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

  displayMode = 1;
  avatar: any;
  hideMe: boolean = false;
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
    private ngZone: NgZone) { }

  ionViewWillEnter() {
    setTimeout(() => {
      this.pullInTokens();
    }, 1000);

    this.userConfigService.userConfig.subscribe((res: any) => {
      // ngZone re-renders onChange
      this.ngZone.run(() => {
        this.displayMode = res.tokenDisplayMode;
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
        this.presentAlert(res.message, 'Success.');
      } else {
        this.presentAlert(res.message, 'Transaction failed.');
      }
    });
  }

  // hide welcomeCard
  hide() {
    this.hideMe = true;
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

  async presentAlert(msg: string, hdr: string) {
    const alert = await this.alertController.create({
      header: hdr,
      message: msg,
      buttons: ['Cancel', 'Ok']
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
