import { Component, OnInit } from '@angular/core';
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

  private qrCode = '';
  isEmpty: boolean;

  constructor(private clipboard: Clipboard, private qrScanner: QRScanner, private api: MinimaApiService) { }

  

  ngOnInit() {
  }

  ionViewWillEnter() {
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
