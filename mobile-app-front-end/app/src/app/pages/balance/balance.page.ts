import {ToolsService } from './../../service/tools.service';
import {MinimaApiService } from '../../service/minima-api.service';
import {Component, OnInit, ViewChild } from '@angular/core';
import {PopoverController, IonButton, MenuController } from '@ionic/angular';
import {Router} from '@angular/router';
import * as SparkMD5 from 'spark-md5';
import {Subject, Subscription} from 'rxjs';

import {Token} from 'minima';

// declare var Minima: any;
@Component
({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
})

export class BalancePage implements OnInit {
  $balance: Subject<Token[]>; 
  // SUBSCRIPTION
  $balanceSubscription: Subscription;
  // REFERENCE TO GIMME50BTN
  @ViewChild('gimme50Btn', {static: false}) gimme50Btn: IonButton;

  avatar: any;
  
  tokenArr: Token[] = [];
  tokenSpoof: Token[] = [];

  constructor(
    private menu: MenuController,
    private _minimaApiService: MinimaApiService,
    private myTools: ToolsService,
    private route: Router,
    public popoverController: PopoverController) {}

  ionViewWillEnter() {
    this.$balanceSubscription = this._minimaApiService.$balance.subscribe((res: Token[]) => {
      this.$balance = this._minimaApiService.$balance;
    });
  }

  ionViewWillLeave() {

    this.$balanceSubscription.unsubscribe();
  
  }

  ngOnInit() {}

  openMenu() {
    this.menu.open();
  }

  giveMe50() {
    this._minimaApiService.giveMe50().then((res: any) => {
      if(res.status === true) {
        this.myTools.presentAlert('Gimme50', 'Successful', 'Status');
      } else {
        this.myTools.presentAlert('Gimme50', res.message, 'Status');
      }
    });
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

}
