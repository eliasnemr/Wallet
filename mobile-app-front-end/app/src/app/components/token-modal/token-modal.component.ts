import { MinimaApiService } from './../../service/minima-api.service';
import { Subscription } from 'rxjs';
import { Token } from 'minima';
import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';
import * as SparkMD5 from 'spark-md5';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-token-modal',
  templateUrl: './token-modal.component.html',
  styleUrls: ['./token-modal.component.scss'],
})
export class TokenModalComponent {
  allTokens: Token[];
  $t: Subscription;
  $query: Subscription;

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
    _qy = _qy.toUpperCase();
    if ( _qy.length > 0) {
      this.$query =
      this.minimaApiService.$balance.asObservable().pipe(
          map((tokens: Token[]) =>
            tokens.filter((token: Token) =>
              token.token.toUpperCase().includes(_qy) ||
            token.tokenid.toUpperCase().includes(_qy))),
      ).subscribe((tokens: Token[]) => {
        // console.log(tokens);
        this.allTokens = tokens;
      });
    } else {
      this.$query =
      this.minimaApiService.$balance.asObservable().pipe(
          take(1),
      ).subscribe((tokens: Token[]) => {
        // console.log(tokens);
        this.allTokens = tokens;
      });
    }
  }
  dismiss() {
    this.modalController.dismiss();
  }
  subscribeTokens() {
    this.$t =
    this.minimaApiService.$balance.subscribe((tokens: Token[]) => {
      this.allTokens = tokens;
    });
  }
  unsubscribeTokens() {
    this.$t.unsubscribe();
    if (this.$query) {
      this.$query.unsubscribe();
    }
  }
  createIcon(tokenid: string) {
    return 'https://www.gravatar.com/avatar/' + SparkMD5.hash(tokenid) + '?d=identicon';
  }
}
