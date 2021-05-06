import { Subscription } from 'rxjs';
import { ToolsService } from './../../../service/tools.service';
import { MinimaApiService } from './../../../service/minima-api.service';
import { Token } from 'minima';
import * as SparkMD5 from 'spark-md5';
import { ActivatedRoute } from '@angular/router';
import { Component,  OnInit } from '@angular/core';

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

  constructor(
    public route: ActivatedRoute, 
    public _minimaApiService: MinimaApiService,
    private myTools: ToolsService
  ) {

    this.expand = false;
    (this.route.snapshot.paramMap.get('id') ? this.urlTokenid = this.route.snapshot.paramMap.get('id') : this.urlTokenid = '');
  }

  ngOnInit() { }
                      
  ionViewWillEnter() {
    if (this.urlTokenid && this.urlTokenid.length > 0) {
      this.$subscription = this._minimaApiService.$balance
        .subscribe((tokens: Token[]) => {
        (
          tokens ?

          this.$token = tokens.filter((token: Token) => token.tokenid === this.urlTokenid )

          :

          console.log('Token balance not found..')


        )


        if (this.$token.length > 0 && this.$token[0].tokenid) {

          // Some formatting...
          (this.$token[0].tokenid === '0x00' ?
            this.$token[0].description = 'Minima\'s Official Token.'
            :
            null
          );

          // (this.$token[0].tokenid !== '0x00' && this.$token[0].icon.length === 0 || this.$token[0].tokenid === '0x00' ?
          //   // this.$token[0].icon = 'assets/minimaIcon.svg' 
          //   console.log(this.$token[0].icon)
          //   :
          //   null
          // );

        }
      
      });

    } else {
      
    }

    if (this.$subscription.closed) {

      // subscribed and works..

    } else {

      // didnt subscribe to anything..

    }
    
  }

  ionViewWillLeave() {

    if (this.$subscription) {

      this.$subscription.unsubscribe();

    }

  }

  validateProof(tokenid: string) {
    this._minimaApiService.validateTokenID(tokenid).then((res: any)=>{
       if(res.response.valid === true){
         this.myTools.presentToast('This proof is valid.', 'success', 'bottom');
       } else {
        this.myTools.presentToast('Proof mismatch - not a valid proof', 'danger', 'bottom');
       }
    });
  }

  createIcon(tokenid: string) {

    return this.avatar = 'https://www.gravatar.com/avatar/' + SparkMD5.hash(tokenid) + '?d=identicon';
 
  }

  copyToClipPWA(text: string) {
    this.myTools.copy(text);
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

  expandImage() {
    (this.expand ?
      this.expand = false
      :
      this.expand = true
    );
  }

}
