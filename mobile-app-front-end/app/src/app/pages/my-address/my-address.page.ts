import { Platform, AlertController, IonContent, ToastController } from '@ionic/angular';
import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { MinimaApiService } from '../../service/minima-api.service';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

declare let window: any;
@Component({
  selector: 'app-my-address',
  templateUrl: './my-address.page.html',
  styleUrls: ['./my-address.page.scss'],
})
export class MyAddressPage implements OnInit {

  @ViewChild('canvasDimension', {static: false}) canvasDimension: ElementRef;

  public qrCode = '';
  public canvasSize = 300;
  public canvasLength: number;
  public canvasWidth: number;
  isEmpty: boolean;

  constructor(private clipboard: Clipboard, 
    private qrScanner: QRScanner, 
    private api: MinimaApiService,
    private platform : Platform,
    private alertController: AlertController,
    public toastController: ToastController) {

      // Needed this to fix android's build wonky
      this.platform.ready().then((readySource) => {
        if(this.platform.is('android')){
          this.canvasSize = this.platform.width() - 50;
        }
      });
    }

  ngOnInit() {}

  ionViewWillEnter() {
    // return new address on enter
    this.newAddress();
  }

  /** API CALLS */
  public newAddress() {
    setTimeout(() => {
      this.api.newAddress().then((res: {status: boolean, minifunc: string, message: string, response: {address: {script: string, hexaddress: string, miniaddress: string}}}) => {
        if (res.response.address.miniaddress) {
          this.qrCode = res.response.address.miniaddress;
          this.isEmpty = true;
        }
      });
    }, 500);
  }
  /** Alerts */
  async presentAlert(msg:string,header:string) {
    const alert = await this.alertController.create({
      header: header,
      message: msg,
      buttons: ['Cancel', 'Ok']
    });
    await alert.present();
  }
  async presentToast(msg: string, type: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 4000,
      color: type,
      keyboardClose: true,
      translucent: true,
      position:  'bottom'
    });
    toast.present();
  }

  /** MISC Functions */
  copyToClipboard() {

    if(this.platform.is('desktop') || this.platform.is('pwa')) {
      this.copyToClipPWA();
      this.presentToast("Copied to clipboard", "success");
    } else {
      this.clipboard.copy(this.qrCode);
      this.presentToast("Copied to clipboard", "success");

    }

  }

  copyToClipPWA() {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', this.qrCode);
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }

  checkPlatform() {
    if(this.platform.is('desktop')){
      return true;
    } else {
      return false;
    }
  }


}
