import { BalanceService } from './../../../service/balance.service';
import { ToastController, AlertController } from '@ionic/angular';
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

  public urlID = '';
  public token: Token;
  public tokenArr: Token[];
  public type = '';
  public avatar: string;

  constructor(
    public alertController: AlertController,
    public route: ActivatedRoute, 
    public api: MinimaApiService,
    public toastController: ToastController,
    public balanceService: BalanceService) {

  }

  ngOnInit() {
    this.balanceService.data.subscribe((res) => {
      this.tokenArr = res;
      this.urlID = this.route.snapshot.paramMap.get('id');

      this.tokenArr.forEach((tkn: any) => {
        if (tkn.tokenid === this.urlID) {
          this.token = tkn;
          if (this.token.tokenid === '0x00') {
            this.token.description = 'Minima\'s Official Token.';
          } else {
            this.token.description = tkn.description;
          }
          if(tkn.token.tokenid !== '0x00' && tkn.token.icon) {
            this.token.icon = 'assets/minimaBox.svg';
          } else if(tkn.token.tokenid === '0x00') {
            this.token.icon = 'assets/minimaBox.svg';
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


  giveMe50() {
    this.api.giveMe50().then((res: any) => {
      if(res.status === true) {
        this.presentAlert('Gimme50', 'Successful', 'Status');
      } else {
        this.presentAlert('Gimme50', res.message, 'Status');
      }
    });
  }

  async presentAlert(hdr: string, msg: string, sub: string) {
    const alert = await this.alertController.create({
      cssClass: 'alert',
      header: hdr,
      subHeader: sub,
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
   }

}
