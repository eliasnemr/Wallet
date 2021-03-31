import { ToolsService } from './../../service/tools.service';
import { MinimaApiService } from './../../service/minima-api.service';
import { RouterModule } from '@angular/router';
import { ModalController, IonList, Config, PopoverController, MenuController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HistoryService } from '../../service/history.service';
import { History, CompleteTransaction, Value } from 'minima';
import * as moment from 'moment';
import { map } from 'rxjs/operators';

interface TimeValue extends Value {
  time: string;
  day: string;
  month: string;
  year: string;
}
interface CompleteTransactionTime extends CompleteTransaction {
  values: TimeValue[];
}

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss']
})
export class HistoryPage implements OnInit {

  @ViewChild('historyList', { static: true }) historyList: IonList;
  ios: boolean;
  selectedSlide: any;
  categories = 0;
  segment = 'all';
  month: string;
  day: string;
  time: string;
  prompt = 'Fetching your history...';
  transactions: CompleteTransaction[] = [];
  saved: History[] = [];
  lastJSON = '';

  constructor(
    public menu: MenuController,
    public router: RouterModule,
    public modalController: ModalController,
    public popoverController: PopoverController,
    public config: Config,
    private myTools: ToolsService,
    private api: MinimaApiService,
    private historyService: HistoryService
    ) { }

  ngOnInit() {
    this.ios = this.config.get('mode') === 'ios';
  }

  ionViewWillEnter() {
    this.pullInHistorySummary();
  }

  openMenu() {
    this.menu.open();
  }

  async pullInHistorySummary() {
    const res = await this.historyService.loadHistoryOnce();
    
    this.transactions = res.history;
    console.log(this.transactions);
    if (res.history) {
      this.transactions = res.history;
      this.transactions.forEach((txn: CompleteTransactionTime, i) => {
        if(txn.values.length > 0) {
          if (txn.values[0].name.substring(0,1) === '{') {
            console.log(txn.values[0].name);
            const token_descr = JSON.parse(txn.values[0].name);
            txn.values[0].name = token_descr.name;
          }
  
          txn.values[0].time = moment( parseInt(txn.txpow.header.timemilli)).format('hh:mm a');
          txn.values[0].day = moment( parseInt(txn.txpow.header.timemilli)).format("DD");
          txn.values[0].month = moment( parseInt(txn.txpow.header.timemilli)).format("MMM");
          txn.values[0].year = moment( parseInt(txn.txpow.header.timemilli)).format("YYYY");
        }       

      })
    }

    



    // this.historyService.data.pipe(map((res: History) => {
    //   let temp = [];
    //   temp = res.history;

    //   temp.forEach((txpow: CompleteTransactionTime, i) => {
        
    //     if (txpow.values.length == 0) {
    //       res.history.splice(i, 1);
    //     }

    //     if (txpow.txpow.body.txn.tokengen) {
    //       //console.log('Token Creation, look at tokengen');
    //       //console.log(txpow.txpow.body.txn.tokengen);


    //     } else if (!txpow.txpow.body.txn.tokengen &&
    //        txpow.values.length > 0 &&
    //        txpow.values[0].name && 
    //        txpow.values[0].name.substring(0, 1) !== "{\"") {
    //         console.log('This is a normal Minima value transaction');
    //         // console.log(JSON.stringify(txpow));

    //     } else if (!txpow.txpow.body.txn.tokengen &&
    //        txpow.values.length > 0 &&
    //        txpow.values[0].name && 
    //        txpow.values[0].name.substring(0, 1) === "{\"") {
    //       console.log('This is a token value transaction');
    //       console.log(txpow);
    //       const token_descr = JSON.parse(txpow.values[0].name);
    //       console.log(token_descr);
    //       const name = token_descr.name;
    //       console.log('Name of token txn' + name);
    //     }

    //     if( txpow.values.length > 0) {
    //       const name = txpow.values[0].name;
    //       if (name && !name.name && name.substring(0, 1) === '{') {
    //         txpow.values[0].name = JSON.parse(name);
    //         txpow.values[0].time = moment( parseInt(txpow.txpow.header.timemilli)).format('hh:mm a');
    //         txpow.values[0].day = moment( parseInt(txpow.txpow.header.timemilli)).format("DD");
    //         txpow.values[0].month = moment( parseInt(txpow.txpow.header.timemilli)).format("MMM");
    //         txpow.values[0].year = moment( parseInt(txpow.txpow.header.timemilli)).format("YYYY");
    //       }
    //     }
    //   });
    //   return res.history;
    // })).subscribe((res: any) => {
      
    //   this.transactions = res;
    // });
    // if (this.transactions.length === 0) {
    //   this.prompt = 'No recent transactions found...';
    // }
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

 }
