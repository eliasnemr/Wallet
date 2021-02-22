import { HistoryService } from './../../../service/history.service';
import { MinimaApiService } from './../../../service/minima-api.service';
import { ActivatedRoute } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Minima, History, CompleteTransaction } from 'minima';

declare var require: any; // quick fix just cause I'm using require for 1 pkg
var moment = require('moment');

@Component({
  selector: 'app-view-txn',
  templateUrl: './view-txn.page.html',
  styleUrls: ['./view-txn.page.scss'],
})
export class ViewTXNPage implements OnInit {

  myTxn: CompleteTransaction;
  transactionID: string = '';

  hide = false;
  public loading = true;

  public id: string;
  public relaytime: string;
  public type: string;
  public message: string = '';

  constructor(
    public route: ActivatedRoute,
    public toastController: ToastController,
    private api: MinimaApiService,
    private _historyService: HistoryService,
    public alertController: AlertController) {
      this.transactionID = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this._historyService
    .loadHistoryOnce()
      .then((res: any) => {
        this.loading = false;

        this.myTxn = res.history.filter((txpow: CompleteTransaction) => txpow.txpow.txpowid === this.transactionID );
        this.myTxn = this.myTxn[0];

        this.relaytime = new Date(this.myTxn.txpow.header.timesecs * 1000).toISOString();
        this.relaytime = moment(this.relaytime).format('DD/MM/YYYY - hh:mm:ss', true);

        if (this.myTxn.txpow.body.txn.state && this.myTxn.txpow.body.txn.state[0] && this.myTxn.txpow.body.txn.state[0].data === '[01000100]') {

          this.message = this.myTxn.txpow.body.txn.state[1].data;
          this.message = this.message.substring(1, this.message.length-1);
        }
        
        if (this.myTxn.txpow.body.txn.tokengen) {
          this.type = 'Token Creation.';
        } else {
          this.type = 'Value Transfer.';
        }

      }).catch(error => {
        console.log(error);
      })

  }

  shout() {
    if (this.hide === true) {
      this.hide = false;
    } else {
      this.hide = true;
    }
  }

  async presentAlertDefault(hdr: string, msg: string, sub: string) {
    const alert = await this.alertController.create({
      cssClass: 'alert',
      header: hdr,
      subHeader: sub,
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
   }

  giveMe50() {
    this.api.giveMe50().then((res: any) => {
      if(res.status === true) {
        this.presentAlertDefault('Gimme50', 'Successful', 'Status');
      } else {
        this.presentAlertDefault('Gimme50', res.message, 'Status');
      }
    });
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
