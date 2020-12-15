import { PopSettingsComponent } from './../../components/pop-settings/pop-settings.component';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { MinimaApiService } from '../../service/minima-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonInfiniteScroll, ToastController, PopoverController } from '@ionic/angular';
import { Mini } from '../../models/mini.model';
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

  displayMode: number = 1;
  avatar: any;
  hideMe: boolean = false;
  tokenArr: Token[] = [];
  tokenSpoof: Token[] = [];

  balanceSubscription: Subscription;

  // - vars
  private lastJSON = '';
  private MINIMA = '0x00';

  constructor(
    private service: BalanceService,
    private api: MinimaApiService,
    public alertController: AlertController,
    private route: Router,
    public toastController: ToastController,
    public popoverController: PopoverController) { }

  ionViewWillEnter() {
    setTimeout(() => {
      this.pullInTokens();
    }, 1000);
  }

  async presentSettings(ev: any) {
    const popover = await this.popoverController.create({
      component: PopSettingsComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  giveMe50() {
    this.api.giveMe50().then((res: any) => {
      if(res.status === true) {
        this.presentAlert(res.message, 'Success.');
      } else {
        this.presentAlert(res.message, 'Something went wrong.');
      }
    });
  }

  ngOnInit() { }

  ionViewWillLeave() {
    this.balanceSubscription.unsubscribe(); // unsubs
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

    this.balanceSubscription = this.service.updatedBalance
      .pipe(
        map((balance: Token[]) => {
          
      const tokenArr: Token[] = [];
      
      for (const key in balance) {
        
        if (balance.hasOwnProperty(key)) {

          if (this.instanceOfToken(balance[key])) {

              const element = balance[key];
              tokenArr.push({
                tokenid: element.tokenid,
                token: element.token,
                description: element.description,
                icon: element.icon,
                proof: element.proof,
                total: element.total,
                script: element.script,
                coinid: element.coinid,
                totalamount: element.totalamount,
                scale: element.scale,
                confirmed: element.confirmed,
                unconfirmed: element.unconfirmed,
                mempool: element.mempool,
                sendable: element.sendable
            });

            } else {

              const element = balance[key];
              // add Minima always to the top
              tokenArr.pop(); // pop it
              this.service.update(
              tokenArr,
              {
                tokenid: element.tokenid,
                token: element.token,
                total: element.total,
                confirmed: element.confirmed,
                unconfirmed: element.unconfirmed,
                mempool: element.mempool,
                sendable: element.sendable
              });
              

            }

            }
            
        }

      return tokenArr;

      })
    )
    .subscribe(responseData => {

      // check if changed
      if(this.lastJSON !== JSON.stringify(responseData)) {
        this.tokenArr = [...responseData];
        this.lastJSON = JSON.stringify(responseData);
      }

    });
  }
}
