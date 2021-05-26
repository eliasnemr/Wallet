import { SendFormObj } from './../send-funds.page';
import { Subscription } from 'rxjs';
import { MinimaApiService } from './../../../service/minima-api.service';
import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Token } from 'minima';
import * as SparkMD5 from 'spark-md5';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {
  public $subscription: Subscription;
  public data: SendFormObj;
  public tokenName: string;
  public tokenIcon: string;
  public availableBalance: string;
  public avatar: string;
  constructor(
    public menu: MenuController,
    private minimaApiService: MinimaApiService) {
    this.tokenIcon = '';
    this.tokenName = '';
  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.$subscription =
    this.minimaApiService.$urlData.subscribe((data: SendFormObj) => {
      this.data = data;
      this.$subscription =
      this.minimaApiService.$balance.subscribe((balance: Token[]) => {
        balance.forEach((token: Token) => {
          if (token.tokenid === this.data.tokenid) {
            console.log(token);
            this.tokenName = token.token;
            if (token.tokenid !== '0x00' && token.icon.length > 0) {
              this.tokenIcon = token.icon;
            }
          }
        });
      });
    });
  }

  ionViewWillLeave() {
    this.$subscription.unsubscribe();
  }

  createIcon(tokenid: string) {
    return this.avatar = 'https://www.gravatar.com/avatar/' + SparkMD5.hash(tokenid) + '?d=identicon';
  }
}
