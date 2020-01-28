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

  private qrCode = '';
  public canvasSize = 300;
  isEmpty: boolean;

  constructor(private clipboard: Clipboard, private qrScanner: QRScanner, private api: MinimaApiService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.canvasSize = window.screen.width - 50;

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
