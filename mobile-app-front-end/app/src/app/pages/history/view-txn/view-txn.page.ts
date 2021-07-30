import {TimeCompleteTransaction} from './../history.page';
import {take} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {ToolsService} from './../../../service/tools.service';
import {MinimaApiService} from './../../../service/minima-api.service';
import {ActivatedRoute} from '@angular/router';
import {Component, NgZone, OnInit} from '@angular/core';

declare const require: any; // quick fix just cause I'm using require for 1 pkg
const moment = require('moment');

@Component({
  selector: 'app-view-txn',
  templateUrl: './view-txn.page.html',
  styleUrls: ['./view-txn.page.scss'],
})
/** */
export class ViewTXNPage implements OnInit {
  $subscription: Subscription;
  myTxn: TimeCompleteTransaction[];
  transactionID: string;
  hide: boolean;
  prompt: string;
  id: string;
  relaytime: string;
  type: string;
  message: string;
  /** */
  constructor(
    public route: ActivatedRoute,
    private minimaApiService: MinimaApiService,
    private myTools: ToolsService,
    private ngZone: NgZone,
  ) {
    this.transactionID = '';
    this.hide = false;
    this.message = '';
    this.prompt = 'Fetching your transaction details...';
  }
  /** */
  ionViewWillEnter() {
    this.fetchHistory().then((res: any) => {
      if (res) {
        this.transactionID = this.route.snapshot.paramMap.get('id');

        if (this.transactionID && this.transactionID.length > 0) {
          this.$subscription =
            this.minimaApiService.$history.pipe(take(1))
                .subscribe((history: any) => {
                  (
                    history.history ?
                    this.myTxn =
                    history.history.filter((txn: TimeCompleteTransaction) =>
                      txn.txpow.txpowid === this.transactionID) :
                      console.log('Transaction with id:' +
                      this.transactionID + 'not found..')
                  );
                  if (this.myTxn.length > 0) {
                    let MSG = '';
                    ( this.myTxn[0].txpow.body.txn.state[1] &&
                      this.myTxn[0].txpow.body.txn.state[1].data ?
                      MSG = this.myTxn[0].txpow.body.txn.state[1].data :
                      null
                    );
                    if (this.myTxn.length > 0) {
                      this.relaytime =
                      new Date(
                          parseInt(this.myTxn[0].txpow.header.timemilli, 10))
                          .toISOString();
                      this.relaytime =
                      moment(this.relaytime)
                          .format('DD/MM/YYYY - hh:mm:ss a', true);
                      (
                        this.myTxn[0].txpow.body.txn.state &&
                        this.myTxn[0].txpow.body.txn.state[0] &&
                          this.myTxn[0].txpow.body.txn
                              .state[0].data === '[01000100]' ?
                            this.message = MSG.substring(1, MSG.length - 1 ) :
                            null
                      );
                      (
                        this.myTxn[0].txpow.body.txn.tokengen ?
                        this.type = 'Token Creation.' :
                        this.type = 'Value Transfer.'
                      );
                    } else {
                      this.prompt = 'Your transaction does not exist.';
                    }
                  } else {
                    console.log('No transaction found.');
                  }
                });
          // console.log(this.message);
          // check & see if subscription worked
          if (this.$subscription.closed && this.myTxn.length > 0) {
            this.prompt = '';
          } else {
            this.prompt = 'No transaction details found.';
          }
        }
      } else {
        this.prompt = 'History failed to load.  Please try again.';
      }
    });
  }
  /** */
  ionViewWillLeave() {
    if (this.$subscription) {
      this.$subscription.unsubscribe();
    }
  }
  /** */
  fetchHistory() {
    return this.minimaApiService.initHistory();
  }
  /** */
  ngOnInit() {}
  /** */
  copy(text: string, type: string) {
    document.getElementById(type).innerHTML = 'Copied';
    document.getElementById(type).style.color = 'var(--ion-color-success';


    this.myTools.copy(text);

    setTimeout(() => {
      if (document.getElementById(type)) {
        document.getElementById(type).innerHTML = 'Copy';
        document.getElementById(type).style.color = 'var(--ion-color-primary';
      }
    }, 2000);
  }
  async checkOutputRelevance(addr: string) {
    console.log(addr);
    const res: any = await this.minimaApiService.checkAddressRelevance(addr);

    if (res) {
      console.log('This is their address');
    } else {
      console.log('Not theirs');
    }
  }
}
