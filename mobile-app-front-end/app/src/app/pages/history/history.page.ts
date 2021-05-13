import {take} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {ToolsService} from './../../service/tools.service';
import {MinimaApiService} from './../../service/minima-api.service';
import {RouterModule} from '@angular/router';
import {
  ModalController,
  IonList,
  Config,
  PopoverController,
  MenuController} from '@ionic/angular';
import {Component, OnInit, ViewChild} from '@angular/core';
import {CompleteTransaction} from 'minima';
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
  styleUrls: ['./history.page.scss'],
})
/** */
export class HistoryPage implements OnInit {
  $historySubscription: Subscription;
  $history: CompleteTransaction[] = [];

  @ViewChild('historyList', {static: true}) historyList: IonList;
  month: string;
  day: string;
  time: string;
  prompt: string;
  /** */
  constructor(
    public menu: MenuController,
    public router: RouterModule,
    public modalController: ModalController,
    public popoverController: PopoverController,
    public config: Config,
    private myTools: ToolsService,
    private minimaApiService: MinimaApiService,
  ) { }

  /** */
  ngOnInit() { }
  /** */
  ionViewWillEnter() {
    this.minimaApiService.initHistory();

    this.$subscribe();
  }
  /** */
  ionViewWillLeave() {
    if (this.$historySubscription) {
      this.$historySubscription.unsubscribe();
    }
  }
  /** Subscribe to history */
  $subscribe() {
    this.prompt = 'Fetching your history...';
    this.$historySubscription =
    this.minimaApiService.$history.pipe(take(1)).subscribe((history: any) => {
      // console.log('Subscribing to $history');
      history.history.sort(this.byDescDate);
      (history.history.length === 0 ? this.prompt = 
        'No recent transactions found.' : this.prompt = '');
      (history.history ? this.$history = history.history : this.$history = []);
      // console.log(history.history);
      this.$history.forEach((txn: TimeCompleteTransaction) => {
        if (txn.values[0] && txn.values.length > 0) {
          if (txn.values[0].name.substring(0, 1) === '{') {
            const TOKENDESCRIPTION = JSON.parse(txn.values[0].name);
            txn.values[0].name = TOKENDESCRIPTION.name;
          }
        }

        txn.time = moment(parseInt(txn.txpow.header.timemilli, 10))
            .format('hh:mm a');
        txn.day = moment(parseInt(txn.txpow.header.timemilli, 10))
            .format('DD');
        txn.month = moment(parseInt(txn.txpow.header.timemilli, 10))
            .format('MMM');
        txn.year = moment(parseInt(txn.txpow.header.timemilli, 10))
            .format('YYYY');
      });
    });
  }
  /** Open menu for custom button */
  openMenu() {
    this.menu.open();
  }
  /** */
  byDescDate(a: CompleteTransaction, b: CompleteTransaction) {
    const aDATE = a.txpow.header.timemilli;
    const bDATE = b.txpow.header.timemilli;
    return bDATE.localeCompare(aDATE);
  }
}
