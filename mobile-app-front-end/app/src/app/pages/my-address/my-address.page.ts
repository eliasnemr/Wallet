import { ToolsService } from './../../service/tools.service';
import { IonButton, MenuController, Platform } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MinimaApiService } from '../../service/minima-api.service';
import { Minima } from 'minima';

@Component({
  selector: 'app-my-address',
  templateUrl: './my-address.page.html',
  styleUrls: ['./my-address.page.scss'],
})
export class MyAddressPage implements OnInit {
  public qrCode = '';
  public isEmpty: boolean;
  public copyStatus: string;
  public genStatus: string;

  @ViewChild('generateAddressBtn', {static: false})
  generateAddressBtn: IonButton;
  @ViewChild('copyAddressBtn', {static: false})
  copyAddressBtn: IonButton;

  constructor(
    public menu: MenuController,
    private myTools: ToolsService,
    private api: MinimaApiService,
    public platform: Platform) {
    this.copyStatus = 'Copy Address';
    this.genStatus = 'Generate Address';
    this.isEmpty = false;
  }

  ngOnInit() {}

  ionViewWillEnter() {
    Minima.file.load('lastAddress.txt', (res: any) => {
      if (res.success) {
        const data = JSON.parse(res.data);
        if (data.address.length === 0) {
          this.newAddress();
        } else {
          this.qrCode = data.address;
          // console.log(this.qrCode);
          if (this.qrCode.length > 0) {
            // console.log('Checking address');
            // console.log(this.qrCode);
            this.checkAddress(this.qrCode);
          }
          this.isEmpty = true;
        }
      } else {
        this.newAddress();
      }
    });
  }

  openMenu() {
    this.menu.open();
  }

  public generateAddress() {
    this.genStatus = '';
    this.newAddress();
    this.generateAddressBtn.disabled = true;
    setTimeout(() => {
      this.generateAddressBtn.disabled = false;
      this.genStatus = 'Generate Address';
    }, 2000);
  }
  public async checkAddress(mAddress: string) {
    const res: any = await this.api.checkScriptAddress(mAddress);

    if (res) {

    } else {
      this.newAddress();
    }
  }
  public newAddress() {
    setTimeout(() => {
      this.api.newAddress()
          .then((res: any) => {
            if (res.status) {
              this.qrCode = res.response.address.miniaddress;
              this.isEmpty = true;
              const data = {address: this.qrCode};
              const send = JSON.stringify(data);
              Minima.file.save(send, 'lastAddress.txt', (res: any) => {
                if (res.success) { }
              });
            }
          });
    }, 0);
  }

  copy(data: any) {
    this.copyStatus = 'Copied!';
    this.copyAddressBtn.disabled = true;
    this.myTools.copy(data);
    setTimeout(() => {
      this.copyStatus = 'Copy Address';
      this.copyAddressBtn.disabled = false;
    }, 2000);
  }
}
