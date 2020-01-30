import { Platform } from '@ionic/angular';
import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { MinimaApiService } from '../service/minima-api.service';
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
  public canvasSize = 309;
  isEmpty: boolean;

  constructor(private clipboard: Clipboard, 
    private qrScanner: QRScanner, 
    private api: MinimaApiService,
    private platform : Platform) {

      this.platform.ready().then((readySource) => {
        if(this.platform.width() < 900){
          this.canvasSize = this.platform.width() - 50;
        } else if (this.platform.width() >= 900){
          this.canvasSize = 350;
        }
      });
    }

  ngOnInit() {}

  ionViewWillEnter() {

    

    console.log("Canvas size: " + this.canvasSize);

    this.api.newAddress().then((res: any) => {
      if (res.response.address) {
        // setTimeout(() => {
        //   this.isEmpty = true;
        // }, 1000);
        this.qrCode = res.response.address;
        this.isEmpty = true;
      }
    });
  }

  copyToClipboard() {
    this.clipboard.copy(this.qrCode);
    alert('Copied Clipboard Successfully.');
  }



}
