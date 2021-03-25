import { ToolsService } from './../../service/tools.service';
import { IonButton, MenuController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MinimaApiService } from '../../service/minima-api.service';
import { Address, Minima } from 'minima';

@Component({
  selector: 'app-my-address',
  templateUrl: './my-address.page.html',
  styleUrls: ['./my-address.page.scss'],
})
export class MyAddressPage implements OnInit {

  qrCode = '';
  lastCode = '';
  isEmpty: boolean;

  @ViewChild('generateAddressBtn', {static: false}) generateAddressBtn: IonButton;

  constructor(
    public menu: MenuController,
    private myTools: ToolsService,
    private api: MinimaApiService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    Minima.file.load('lastAddress.txt', (res: any) => {
      if (res.success) {
        const data = JSON.parse(res.data);
        if (data.address.length === 0) {
          this.newAddress();
        }  else {
          this.qrCode = data.address;
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
    this.newAddress();
    this.generateAddressBtn.disabled = true;
    this.myTools.presentToast('Generated a new address', 'primary', "bottom");
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

  giveMe50() {
    this.api.giveMe50().then((res: any) => {
      if(res.status === true) {
        this.myTools.presentAlert('Gimme50', 'Successful', 'Status');
      } else {
        this.myTools.presentAlert('Gimme50', res.message, 'Status');
      }
    });
  }

  copy(data: any) {
    this.myTools.copy(data);
  }

}
