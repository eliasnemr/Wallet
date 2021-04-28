import { Subscription } from 'rxjs';
import { ToolsService } from './../../service/tools.service';
import { MinimaApiService } from './../../service/minima-api.service';
import { RouterModule } from '@angular/router';
import { ModalController, IonList, Config, PopoverController, MenuController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HistoryService } from '../../service/history.service';
import { History, CompleteTransaction, Value } from 'minima';
import * as moment from 'moment';

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

  $historySubscription: Subscription;
  $history: CompleteTransactionTime;



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
    private _minimaApiService: MinimaApiService,
    private historyService: HistoryService
    ) { }

  ngOnInit() {
    this.ios = this.config.get('mode') === 'ios';
  }

  ionViewWillEnter() {

    this._minimaApiService.initHistory();

    this.$historySubscription = this._minimaApiService.$history.subscribe((history: any) => {
      console.log(history.history);
    })


    this.pullInHistorySummary();
  }

  ionViewWillLeave() {

    if(this.$historySubscription) {
      this.$historySubscription.unsubscribe();
    }

  }

  openMenu() {
    this.menu.open();
  }

  byDescDate(a: CompleteTransaction, b: CompleteTransaction) {
    let a_date = a.txpow.header.timemilli;
    let b_date = b.txpow.header.timemilli;
    return b_date.localeCompare(a_date);
  }

  async pullInHistorySummary() {
    const res = await this.historyService.loadHistoryOnce();
    // console.log(res.history);
    if (res) {
      this.transactions = res.history ? res.history.slice().sort(this.byDescDate) : [];
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
      if (this.transactions.length === 0) {
        this.prompt = 'No recent transactions found.';
      }
    }
  }

  giveMe50() {
    this._minimaApiService.giveMe50().then((res: any) => {
      if(res.status === true) {
        this.myTools.presentAlert('Gimme50', 'Successful', 'Status');
      } else {
        this.myTools.presentAlert('Gimme50', res.message, 'Status');
      }
    });
  }

 }
