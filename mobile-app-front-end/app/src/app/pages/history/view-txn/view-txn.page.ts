import { ToolsService } from './../../../service/tools.service';
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
    private api: MinimaApiService,
    private _historyService: HistoryService,
    private myTools: ToolsService
  ) {}

  ionViewWillEnter() {
    this.transactionID = this.route.snapshot.paramMap.get('id');

    this._historyService
    .loadHistoryOnce()
      .then((res: any) => {
        this.loading = false;

        this.myTxn = res.history.filter((txpow: CompleteTransaction) => txpow.txpow.txpowid === this.transactionID );
        this.myTxn = this.myTxn[0];
        //console.log(this.myTxn);

        this.relaytime = new Date(parseInt(this.myTxn.txpow.header.timemilli)).toISOString();
        this.relaytime = moment(this.relaytime).format('DD/MM/YYYY - hh:mm:ss a', true);

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

  ngOnInit() {}

  giveMe50() {
    this.api.giveMe50().then((res: any) => {
      if(res.status === true) {
        this.myTools.presentAlert('Gimme50', 'Successful', 'Status');
      } else {
        this.myTools.presentAlert('Gimme50', res.message, 'Status');
      }
    });
  }

  copy(text: string) {
    this.myTools.copy(text);
  }


}
