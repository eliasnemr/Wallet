import { Component, OnInit, Input } from '@angular/core';
import { NavParams, AlertController, Platform, ToastController } from '@ionic/angular';
import { Clipboard } from '@ionic-native/clipboard/ngx';

@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.component.html',
  styleUrls: ['./pop-over.component.scss'],
})
export class PopOverComponent implements OnInit {
  @Input("tokenName") tokenName;
  @Input("tokenId") tokenId;
  @Input('textToCopy') textToCopy;

  public refTokenid = '';

  constructor(public navParams: NavParams,
    private clipboard: Clipboard,
    private alertController: AlertController,
    private platform: Platform,
    private toastCtrl: ToastController) {
    }

  ngOnInit() {
    this.refTokenid = this.navParams.get('tokenid');
  }

  ionViewWillEnter() {
    document.getElementsByTagName("ion-app").item(0).classList.add("disable-scroll"); //ATTACH .disable-scroll css
  }
  ionViewWillLeave(){
    if ( document.getElementsByTagName("ion-app").item(0).classList.contains("disable-scroll") )
    document.getElementsByTagName("ion-app").item(0).classList.remove("disable-scroll");//DETACH .disable-scroll css
  }

  copyToClipboard() {
    
    if(this.platform.is('desktop') || this.platform.is('pwa')) {
      this.copyToClipPWA();
      this.presentAlert("Copied to clipboard.", "Success");
    } else {
      this.clipboard.copy(this.refTokenid);
      this.presentAlert("Copied to clipboard", "Success");
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

  async presentAlert(msg:string,header:string) {
    const alert = await this.alertController.create({
      header: header,
      message: msg,
      cssClass: "no-scroll",
      buttons: ['Cancel', 'Ok']
    });

    await alert.present();
  }
  

}
