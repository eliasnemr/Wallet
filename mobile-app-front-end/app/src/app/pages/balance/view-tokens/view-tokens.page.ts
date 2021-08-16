import { AnimationController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ToolsService } from './../../../service/tools.service';
import { MinimaApiService } from './../../../service/minima-api.service';
import { Token } from 'minima';
import * as SparkMD5 from 'spark-md5';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view-tokens',
  templateUrl: './view-tokens.page.html',
  styleUrls: ['./view-tokens.page.scss'],
})
export class ViewTokensPage implements OnInit {
  expand: boolean;
  urlTokenid: string;
  avatar: string;
  $balanceDetails: Token[];
  $subscription: Subscription;
  $token: Token[];
  prompt: string;

  constructor(
    public route: ActivatedRoute,
    public _minimaApiService: MinimaApiService,
    public animationCtrl: AnimationController,
    private myTools: ToolsService,
  ) {
    this.expand = false;
    (this.route.snapshot.paramMap.get('id') ?
    this.urlTokenid = this.route.snapshot.paramMap.get('id') :
    this.urlTokenid = '');

    this.prompt = '';
  }

  ngOnInit() { }

  ionViewWillEnter() {
    if (this.urlTokenid && this.urlTokenid.length > 0) {
      this.$subscription = this._minimaApiService.$balance
          .subscribe((tokens: Token[]) => {
            (
              tokens ?
              this.$token =
              tokens.filter((token: Token) =>
                token.tokenid === this.urlTokenid ) :
              console.log('Your tokens have not been found.')
            );


            if (this.$token.length > 0 && this.$token[0].tokenid) {
              // Some formatting...
              (
                this.$token[0].tokenid === '0x00' ?
                this.$token[0].description = 'Minima\'s Official Token.' :
                null
              );
            }
          });
    } else {
      this.prompt = 'Token ID not found, please try again later';
    }

    if (this.$subscription.closed) {
      // subscribed and works..
      this.prompt = 'Token subscription failed.';
    } else {
      // didnt subscribe to anything or didnt find anything..
      this.prompt = '';
      if (this.$token.length === 0) {
        this.prompt = 'Token not found.';
      }
    }
  }

  ionViewWillLeave() {
    if (this.$subscription) {
      this.$subscription.unsubscribe();
    }
  }

  validateProof(tokenid: string) {
    this._minimaApiService.validateTokenID(tokenid).then((res: any)=>{
      if (res.response.valid === true) {
        this.myTools.presentToast('This proof is valid.', 'success', 'bottom');
      } else {
        this.myTools
            .presentToast('Proof mismatch - not a valid proof',
                'danger', 'bottom');
      }
    });
  }

  createIcon(tokenid: string) {
    return this.avatar = 'https://www.gravatar.com/avatar/' + SparkMD5.hash(tokenid) + '?d=identicon';
  }

  copy(text: string, type: string) {
    document.getElementById(type).innerHTML = 'Copied';
    document.getElementById(type).style.color = 'var(--ion-color-success';


    this.myTools.copy(text);

    setTimeout(() => {
      if (document.getElementById(type)) {
        document.getElementById(type).innerHTML = 'Copy';
        document.getElementById(type).style.color = 'var(--ion-color-primary';
      }
    }, 2000);
  }

  expandImage() {
    (
      this.expand ?
      this.expand = false :
      this.expand = true
    );
  }
}
