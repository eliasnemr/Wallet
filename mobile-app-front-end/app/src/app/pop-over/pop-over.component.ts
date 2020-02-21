import { Component, OnInit, Input } from '@angular/core';
import { NavParams, AlertController } from '@ionic/angular';
import { Clipboard } from '@ionic-native/clipboard/ngx';

@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.component.html',
  styleUrls: ['./pop-over.component.scss'],
})
export class PopOverComponent implements OnInit {
  @Input("tokenName") tokenName;
  @Input("tokenId") tokenId;

  public refTokenid = '';

  constructor(public navParams: NavParams, private clipboard: Clipboard, private alertController: AlertController) {}

  ngOnInit() {
    this.refTokenid = this.navParams.get('tokenid');
  }

  ionViewWillEnter() {}

  copyToClipboard() {
    this.clipboard.copy(this.refTokenid);
    this.presentAlert("Copied to clipboard", "Clipboard");
  }

  async presentAlert(msg:string,header:string) {
    const alert = await this.alertController.create({
      header: header,
      message: msg,
      buttons: ['Cancel', 'Ok']
    });

    await alert.present();
  }
  

}
