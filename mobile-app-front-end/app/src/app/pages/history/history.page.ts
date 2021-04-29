import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ToolsService } from './../../service/tools.service';
import { MinimaApiService } from './../../service/minima-api.service';
import { RouterModule } from '@angular/router';
import { ModalController, IonList, Config, PopoverController, MenuController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CompleteTransaction } from 'minima';
import * as moment from 'moment';

export interface TimeCompleteTransaction extends CompleteTransaction {
  time: string;
  day: string;
  month: string;
  year: string;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss']
})
export class HistoryPage implements OnInit {

  $historySubscription: Subscription;
  $history: CompleteTransaction[] = [];

  @ViewChild('historyList', { static: true }) historyList: IonList;
  month: string;
  day: string;
  time: string;
  prompt: string;

  constructor(
    public menu: MenuController,
    public router: RouterModule,
    public modalController: ModalController,
    public popoverController: PopoverController,
    public config: Config,
    private myTools: ToolsService,
    private _minimaApiService: MinimaApiService
    ) { }

  ngOnInit() { }

  ionViewWillEnter() {

    this._minimaApiService.initHistory();
    
    this.$subscribe();

  }
  
  ionViewWillLeave() {
    
    if(this.$historySubscription) {
      this.$historySubscription.unsubscribe();
    }
    
  } 
  
  $subscribe() {
    this.prompt = 'Fetching your history...';
    this.$historySubscription = this._minimaApiService.$history.pipe(take(1)).subscribe((history: any) => {
      // console.log('Subscribing to $history');
      history.history.sort(this.byDescDate);
      (history.history.length === 0 ? this.prompt = 'No recent transactions found.' : this.prompt = '');
      (history.history ? this.$history = history.history : this.$history = []);
      // console.log(history.history);
        this.$history.forEach((txn: TimeCompleteTransaction) => {
          if(txn.values[0] && txn.values.length > 0) { 
            if (txn.values[0].name.substring(0,1) === '{') {
              const token_descr = JSON.parse(txn.values[0].name);
              txn.values[0].name = token_descr.name;
            }
    
          }

          txn.time = moment( parseInt(txn.txpow.header.timemilli)).format('hh:mm a');
          txn.day = moment( parseInt(txn.txpow.header.timemilli)).format("DD");
          txn.month = moment( parseInt(txn.txpow.header.timemilli)).format("MMM");
          txn.year = moment( parseInt(txn.txpow.header.timemilli)).format("YYYY");
  
        });
    });

  }

  openMenu() {
    this.menu.open();
  }

  byDescDate(a: CompleteTransaction, b: CompleteTransaction) {
    let a_date = a.txpow.header.timemilli;
    let b_date = b.txpow.header.timemilli;
    return b_date.localeCompare(a_date);
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
