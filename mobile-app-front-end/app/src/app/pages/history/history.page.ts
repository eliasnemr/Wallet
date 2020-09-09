import { Router, RouterModule } from '@angular/router';
import { IonSlides, ModalController, Platform, IonList, AlertController, ToastController, Config, NavParams } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { HistoryService } from '../../service/history.service';
import { map } from 'rxjs/operators';
import { History } from '../../models/history.model';

import { UserData } from './../../providers/user-data';
import { HistoryData } from './../../providers/historydata';


@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  @ViewChild('historyList', { static: true }) historyList: IonList;

  ios: boolean;
  selectedSlide: any;
  categories: number = 0;
  segment = 'all';
  
  // + vars
  public transactions: History[] = [];
  public saved: History[] = [];

  polledHistorySubscription: Subscription;

  // - vars
  private lastJSON: string = '';

  constructor(
    private historyService: HistoryService,
    public modalController: ModalController, 
    private platform: Platform,
    public histData: HistoryData,
    public user: UserData,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public config: Config, 
    public router: RouterModule
   ) { }

  ngOnInit() {
    this.pullInHistorySummary();

    this.ios = this.config.get('mode') === 'ios';
  }

  ionViewDidLeave(){
    if(this.polledHistorySubscription){
      this.polledHistorySubscription.unsubscribe();
    }
    
    this.user.storage.set('saved_transactions', this.user.saved).then((val:any)=>{
      console.log(val);
    });

    
  }

  async saveItem(slidingItem: HTMLIonItemSlidingElement, txn: any) {
    if (this.user.hasSaved(txn.txpow.txpowid)) {
      // Prompt to remove as saved
      this.removeItem(slidingItem, txn.txpow.txpowid, 'This has already been saved');
      // saved = 'false' now
      txn.saved = 'false';
    } else {
      // Add to Saved
      this.user.addToSaved(txn.txpow.txpowid);
      // Add true attribute to this txn
      txn.saved = "true";

      // close the open item
      slidingItem.close();

      // Create a Toast
      const toast = await this.toastCtrl.create({
        header: `Transaction with ID:${txn.txpow.txpowid.substring(0, 15)+"..."} was successfully saved.`,
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
      message: "Would you like to remove this transaction from your saved transactions?",
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
            this.user.removeFromSaved(txn.txpow.txpowid);

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
    
    if(this.historyList) {
      this.historyList.closeSlidingItems();
    }
  
    if(this.segment == 'saved') {
      this.filterHistory();
    } else if (this.segment == 'all') {
      this.pullInHistorySummary();
    }

  }



  filterHistory() {

    this.transactions = this.transactions.filter((txn: any) => {
      return txn.saved == 'true';
    });
    
  }

  // Get all users activities+transactions history
  pullInHistorySummary() {
  this.polledHistorySubscription = this.historyService.getHistory().pipe(map(responseData => {
    responseData.response.history.forEach((element: any)=> {
      let name = element.values[0].name;
      
      if(name.substring(0, 1) === '{') {
        element.values[0].name = JSON.parse(name);
      }
      
      this.transactions.push(element);

    });

  })).subscribe(responseData => {
    
    if(this.lastJSON !== JSON.stringify(responseData)){
      //this.transactions = responseData;
      this.lastJSON = JSON.stringify(responseData);
    }

  });
    
  }

}
