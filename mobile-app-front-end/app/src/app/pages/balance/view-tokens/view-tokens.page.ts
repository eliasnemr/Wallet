import { BalanceService } from './../../../service/balance.service';
import { ToastController } from '@ionic/angular';
import { MinimaApiService } from './../../../service/minima-api.service';
import { Token } from 'minima';
import * as SparkMD5 from 'spark-md5';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

declare var Minima: any;
@Component({
  selector: 'app-view-tokens',
  templateUrl: './view-tokens.page.html',
  styleUrls: ['./view-tokens.page.scss'],
})
export class ViewTokensPage implements OnInit {

  public urlID: string = '';
  public token: Token;
  public tokenArr: Token[];
  public type: string = '';
  public avatar: string;

  constructor(public route: ActivatedRoute, public api: MinimaApiService, public toastController: ToastController, public balanceService: BalanceService) {
  
    this.balanceService.updatedBalance.subscribe((res) => {
      this.tokenArr = res;
      this.urlID = this.route.snapshot.paramMap.get("id");

      this.tokenArr.forEach((tkn: any) => {
        if(tkn.tokenid === this.urlID) {
          this.token = tkn;
          if(this.token.tokenid === '0x00') {
            this.token.description = 'Minima\'s Official Token.';
          } else {
            this.token.description = tkn.description;
          }
          if(tkn.token.tokenid !== '0x00' && tkn.token.icon) {
            this.token.icon = 'assets/icon/icon.png';
          } else if(tkn.token.tokenid === '0x00') {
            this.token.icon = 'assets/icon/icon.png';
          } else {
            this.token.icon = tkn.icon;
          }
          if(this.token.script === 'RETURN TRUE') {
            this.type = 'Value Transfer';
          } else {
            this.type = 'Non Fungible Token';
          }
        }
      });
    });
  }

  ngOnInit() { }

  validateProof(tokenid: string) {
    this.api.validateTokenID(tokenid).then((res: any)=>{
       if(res.response.valid === true){
         this.presentToast('This proof is valid.', 'success');
       } else {
        this.presentToast('Proof mismatch - not a valid proof', 'danger');
       }
    });
  }

  createIcon(tokenid: string) {

    return this.avatar = 'https://www.gravatar.com/avatar/' + SparkMD5.hash(tokenid) + '?d=identicon';
 
  }
  // Alerts
  async presentToast(msg: string, type: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 4000,
      buttons: [{
        text: 'Close',
        role: 'cancel'
      }],
      color: type,
      keyboardClose: true,
      translucent: true,
      position:  'top'
    });
    toast.present();
  }

  copyToClipPWA(text: string) {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', text);
      this.presentToast("Copied to Clipboard", "success");
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }

}
