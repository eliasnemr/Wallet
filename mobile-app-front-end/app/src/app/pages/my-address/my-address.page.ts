import { Platform, AlertController, ToastController, IonButton } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { MinimaApiService } from '../../service/minima-api.service';
import { Address, Minima } from 'minima';

@Component({
  selector: 'app-my-address',
  templateUrl: './my-address.page.html',
  styleUrls: ['./my-address.page.scss'],
})
export class MyAddressPage implements OnInit {

  public qrCode = '';
  lastCode = '';
  isEmpty: boolean;

  @ViewChild('generateAddressBtn', {static: false}) generateAddressBtn: IonButton;

  constructor(
    private clipboard: Clipboard,
    private api: MinimaApiService,
    private platform: Platform,
    private alertController: AlertController,
    public toastController: ToastController) {}

  ngOnInit() {}

  ionViewWillEnter() {
    Minima.file.load('lastAddress.txt', (res: any) => {
      if(res.success) {
        const data = JSON.parse(res.data);
        if(data.address.length === 0) {
          this.newAddress();
        }  else {
          this.qrCode = data.address;
          this.isEmpty = true;
        }
      }
    })
  }

  public generateAddress(code: string) {
    this.newAddress();
    this.generateAddressBtn.disabled = true;
    this.presentToast('Generated a new address', 'primary', "bottom");
    setTimeout(() => {
    this.generateAddressBtn.disabled = false;
    }, 2000);
  }

  public newAddress() {
    setTimeout(() => {
      this.api.newAddress().then((res: {status: boolean, message: string; response: {address: Address}}) => {
        if (res.status) {
          this.qrCode = res.response.address.miniaddress;
          this.isEmpty = true;
          let data = {address: this.qrCode};
          let send = JSON.stringify(data);
          Minima.file.save(send, 'lastAddress.txt', (res: any) => {
            if(res.success){}
          });
        }
      });
    }, 0);
  }

  async presentAlert(msg: string, hdr: string) {
    const alert = await this.alertController.create({
      header: hdr,
      message: msg,
      buttons: ['Cancel', 'Ok']
    });
    await alert.present();
  }

  async presentToast(msg: string, type: string, posn: "top" | "bottom" | "middle") {
    const toast = await this.toastController.create({
      message: msg,
      duration: 4000,
      color: type,
      keyboardClose: true,
      translucent: true,
      position: posn,
      cssClass: 'toast',
      buttons: [{
        text: 'Dismiss', 
        role: 'cancel',
        handler: () => {
        }
      }]
    });
    toast.present();
  }

  copyToClipboard() {
    if (this.platform.is('desktop') || this.platform.is('pwa')) {
      this.copyToClipPWA();
    } else {
      this.clipboard.copy(this.qrCode);
      this.presentToast('Copied to Clipboard', 'primary', 'bottom');
    }
  }
ß
  copyToClipPWA() {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', this.qrCode);
      this.presentToast('Copied To Clipboard', 'primary', 'bottom');
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }

  checkPlatform() {
    if (this.platform.is('desktop')) {
      return true;
    } else {
      return false;
    }
  }
}
