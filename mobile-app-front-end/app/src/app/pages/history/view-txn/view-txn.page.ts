import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Minima } from 'minima';

var moment = require('moment');

@Component({
  selector: 'app-view-txn',
  templateUrl: './view-txn.page.html',
  styleUrls: ['./view-txn.page.scss'],
})
export class ViewTXNPage implements OnInit {

  hide = false;
  public txn: string;
  public id: string;
  public relaytime: string;
  public size: string;
  public isinblock: boolean;
  public blocknumber: number;
  public isblock: boolean;
  public nonce: string;
  public inputs: [];
  public outputs: [];
  public type: string;
  public tokenname: string;
  public tokentotal: string;

  constructor(public route: ActivatedRoute, public toastController: ToastController) {
    this.txn = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    Minima.cmd('txpowinfo ' + this.txn, (res: any) => {
      if (res.status) {
        this.id = res.response.txpow.txpowid;
        this.relaytime = new Date(res.response.txpow.header.timesecs * 1000).toISOString();
        this.relaytime = moment(this.relaytime).format('DD/MM/YYYY - hh:mm:ss', true);
        this.size = res.response.txpow.size;
        this.isblock = res.response.txpow.isblock;
        this.isinblock = res.response.isinblock;
        this.blocknumber = res.response.inblock;
        this.nonce = res.response.txpow.header.nonce;
        this.inputs = res.response.txpow.body.txn.inputs;
        this.outputs = res.response.txpow.body.txn.outputs;
        if (res.response.txpow.body.txn.tokengen) {
          this.type = 'Token Creation.';
          this.tokenname = res.response.txpow.body.txn.tokengen.token;
          this.tokentotal = res.response.txpow.body.txn.tokengen.total;
        } else {
          this.type = 'Value Transfer.';
        }
      } else {
        console.log(res.message);
      }
    });
  }

  shout() {
    if (this.hide === true) {
      this.hide = false;
    } else {
      this.hide = true;
    }
  }

  copyToClipPWA(text: string) {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', text);
      this.presentToast('Copied to Clipboard', 'success');
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }

  async presentToast(msg: string, type: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 4000,
      buttons: [{
        text: 'Close',
        role: 'cancel'
      }],
      color: type,
      keyboardClose: true,
      translucent: true,
      position:  'bottom'
    });
    toast.present();
  }

}
