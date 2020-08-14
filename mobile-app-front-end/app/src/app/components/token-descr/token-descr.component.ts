import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, Platform, NavParams } from '@ionic/angular';
import { MinimaApiService } from '../../service/minima-api.service';
import { Router } from '@angular/router';
import { Clipboard } from '@ionic-native/clipboard/ngx';

@Component({
  selector: 'app-token-descr',
  templateUrl: './token-descr.component.html',
  styleUrls: ['./token-descr.component.scss'],
})
export class TokenDescrComponent implements OnInit {

  public refTokenid: string;
  public name: string;
  public tokenid: string;
  public description: string;
  public total: number;
  public totalamount: number;
  public script: string;
  public proof: string;
  public confirmed: number;
  public unconfirmed: number;
  public mempool: number;
  public sendable: number;
    

  constructor(public modalCtrl: ModalController, 
    public api: MinimaApiService,
    public toastController: ToastController,
    public route: Router,
    private platform: Platform,
    private clipboard: Clipboard,
    private navParams: NavParams) {}

  ngOnInit() {
    this.refTokenid = this.navParams.get("tokenid");
  }

  dismiss(){
  // using the injected ModalController this page
  // can "dismiss" itself and optionally pass back data
  this.modalCtrl.dismiss({
    'dismissed': true
  });
  }
  public sendTokenOver(id: string) {
    this.route.navigate(['/send-funds/'+id]); 
    this.dismiss();
  }
  validateProof(tokenid: string) {
    this.api.validateTokenID(tokenid).then((res: any)=>{
       if(res.response.valid === true){
         this.presentToast("This proof is valid.", "success");
       } else {
        this.presentToast("Proof Mismatch - Proof is invalid.", "danger");
       }
    });
  }
  //Alerts
  async presentToast(msg: string, type: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 4000,
      color: type,
      keyboardClose: true,
      translucent: true,
      position:  'top'
    });
    toast.present();
  }

  copyToClipboard() {
    
    if(this.platform.is('desktop') || this.platform.is('pwa')) {
      this.copyToClipPWA();
      this.presentToast("Copied TokenID", "success");
    } else {
      this.clipboard.copy(this.refTokenid);
      this.presentToast("Can't copy to clipboard", "danger");

      
    }
    
  }

  copyToClipPWA() {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', this.refTokenid);
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');

  }


}
