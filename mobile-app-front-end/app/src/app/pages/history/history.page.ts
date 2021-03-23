import { MinimaApiService } from './../../service/minima-api.service';
import { RouterModule } from '@angular/router';
import { ModalController, IonList, AlertController, ToastController, Config, PopoverController, MenuController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HistoryService } from '../../service/history.service';
import { UserHistorySavedData } from './../../providers/user-data';
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
  transactions: CompleteTransactionTime[] = [];
  saved: History[] = [];
  lastJSON = '';

  constructor(
    public menu: MenuController,
    private api: MinimaApiService,
    private alertController: AlertController,
    private historyService: HistoryService,
    private userHistorySavedData: UserHistorySavedData,
    public modalController: ModalController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public popoverController: PopoverController,
    public config: Config,
    public router: RouterModule) { }

  ngOnInit() {
    this.ios = this.config.get('mode') === 'ios';
  }

  ionViewWillEnter() {
    this.pullInHistorySummary();
  }

  openMenu() {
    this.menu.open();
  }

  async saveItem(slidingItem: HTMLIonItemSlidingElement, txn: any) {
    if (this.userHistorySavedData.hasSaved(txn.txpow.txpowid)) {
      // Prompt to remove as saved
      this.removeItem(slidingItem, txn.txpow.txpowid, 'This has already been saved');
      // saved = 'false' now
      txn.saved = 'false';
    } else {
      // Add to Saved
      this.userHistorySavedData.addToSaved(txn.txpow.txpowid);
      // Add true attribute to this txn
      txn.saved = 'true';

      // close the open item
      slidingItem.close();

      // Create a Toast
      const toast = await this.toastCtrl.create({
        header: `Transaction with ID:${txn.txpow.txpowid.substring(0, 15) + '...'} was successfully saved.`,
        duration: 3000,
        buttons: [{
          text: 'Close',
          role: 'cancel'
        }]
      });
      await toast.present();
    }
  }
  async removeItem(slidingItem: HTMLIonItemSlidingElement, txn: any, title: string) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: 'Would you like to remove this transaction from your saved transactions?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            // Cancel button clicked, do not remove the transaction
            // Close the sliding item and hide the option buttons
            slidingItem.close();
          }
        },
        {
          text: 'Remove',
          handler: () => {
            // they want to remove this transaction from their saved transactions
            this.userHistorySavedData.removeFromSaved(txn.txpow.txpowid);

            // close the sliding item and hide the option buttons
            slidingItem.close();

          }
        }
      ]
    });
    // now present the alert on top of all other content
    await alert.present();
  }

  updateHistory() {
    if (this.historyList) {
      this.historyList.closeSlidingItems();
    }
    if (this.segment === 'saved') {
      this.filterHistory();
    } else if (this.segment === 'all') {
      this.pullInHistorySummary();
    }
  }

  filterHistory() {
    this.transactions = this.transactions.filter((txn: any) => {
      return txn.saved === 'true';
    });
  }

  pullInHistorySummary() {
    console.log('Pulling in history');
    this.historyService.data.pipe(map((res: History) => {
      res.history.forEach((txpow: CompleteTransactionTime) => {
        console.log(res);
        const name = txpow.values[0].name;
        txpow.values[0].time = moment( parseInt(txpow.txpow.header.timemilli)).format('hh:mm a');
        txpow.values[0].day = moment( parseInt(txpow.txpow.header.timemilli)).format("DD");
        txpow.values[0].month = moment( parseInt(txpow.txpow.header.timemilli)).format("MMM");
        txpow.values[0].year = moment( parseInt(txpow.txpow.header.timemilli)).format("YYYY");
        if (name && !name.name && name.substring(0, 1) === '{') {
          txpow.values[0].name = JSON.parse(name);
        }
      });
      return res.history;
    })).subscribe((res: any) => {
      this.transactions = res;
    });
    if (this.transactions.length === 0) {
      this.prompt = 'No recent transactions found...';
    }
  }

  async presentAlert(hdr: string, message: string, subtitle: string) {
    const alert = await this.alertController.create({
      cssClass: 'alertContainer',
      header: hdr,
      subHeader: subtitle,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  giveMe50() {
    this.api.giveMe50().then((res: any) => {
      if(res.status === true) {
        this.presentAlert('Gimme50', 'Successful', 'Status');
      } else {
        this.presentAlert('Gimme50', res.message, 'Status');
      }
    });
  }

 }
