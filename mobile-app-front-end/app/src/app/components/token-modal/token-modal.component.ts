import { MinimaApiService } from './../../service/minima-api.service';
import { Subscription } from 'rxjs';
import { Token } from 'minima';
import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';
import * as SparkMD5 from 'spark-md5';

@Component({
  selector: 'app-token-modal',
  templateUrl: './token-modal.component.html',
  styleUrls: ['./token-modal.component.scss'],
})
export class TokenModalComponent {
  allTokens: Token[];
  $t: Subscription;

  constructor(
    public modalController: ModalController,
    private minimaApiService: MinimaApiService) { }

  ionViewWillEnter() {
    this.subscribeTokens();
  }
  ionViewWillLeave() {
    this.unsubscribeTokens();
  }

  selectToken(_t: Token) {
    this.modalController.dismiss(_t);
  }

  queryTokens(_qy: string) {
    console.log(_qy);
  }
  dismiss() {
    this.modalController.dismiss();
  }
  subscribeTokens() {
    this.$t =
    this.minimaApiService.$balance.subscribe((tokens: Token[]) => {
      this.allTokens = tokens;
      console.log(this.allTokens);
    });
  }
  unsubscribeTokens() {
    this.$t.unsubscribe();
  }
  createIcon(tokenid: string) {
    return 'https://www.gravatar.com/avatar/' + SparkMD5.hash(tokenid) + '?d=identicon';
  }
}
