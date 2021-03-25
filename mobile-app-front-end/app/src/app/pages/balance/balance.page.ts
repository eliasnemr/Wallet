import { ToolsService } from './../../service/tools.service';
import { UserConfig } from './../../models/userConfig.model';
import { UserConfigService } from './../../service/userconfig.service';
import { MinimaApiService } from '../../service/minima-api.service';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { PopoverController, IonButton, MenuController } from '@ionic/angular';
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
    private menu: MenuController,
    private balanceService: BalanceService,
    private api: MinimaApiService,
    private myTools: ToolsService,
    private route: Router,
    public popoverController: PopoverController,
    public userConfigService: UserConfigService,
    private ngZone: NgZone) {}

  ionViewWillEnter() {
    this.pullInTokens();

    this.userConfigService.userConfig.subscribe((res: UserConfig) => {
      // ngZone re-renders onChange
      this.ngZone.run(() => {
        this.user = res;
      });
    });

  }

  ngOnInit() {}

  openMenu() {
    this.menu.open();
  }

  giveMe50() {
    this.api.giveMe50().then((res: any) => {
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
 
  pullInTokens() {
    this.balanceService.data.subscribe((balance: Token[]) => {
      this.tokenArr = balance;
    });
  }

}
