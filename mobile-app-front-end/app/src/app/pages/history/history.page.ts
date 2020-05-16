import { MinimaApiService } from '../../service/minima-api.service';
import { PopoverController, IonSlides, ModalController } from '@ionic/angular';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { HistoryService } from '../../service/history.service';
import { map } from 'rxjs/operators';
import { History } from '../../models/history.model';
import { HistorymodalPage } from '../../components/historymodal/historymodal.page';
import { HistorytokenmodalPage } from '../../components/historytokenmodal/historytokenmodal.page';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  isEmpty: boolean = true;
  selectedSlide: any;
  categories: number = 0;
  sliderOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 200
  }
  // + vars
  public transactions: History[] = [];
  public tokens: History[] = [];
  public t_summarySpoof: History[] = [];

  polledHistorySubscription: Subscription;

  // - vars
  private lastJSON: string = '';

  constructor(private api: MinimaApiService, private historyService: HistoryService, public modalController: ModalController) {}

  ngOnInit() {}

  ionViewDidEnter(){ 
    this.pullInHistoryLength(); // get length for skeleton
    
    setTimeout(() => {
      this.pullInHistorySummary(); // subscribe and polls history
    }, 500);
  }

  ionViewDidLeave(){
   this.polledHistorySubscription.unsubscribe();
  }

  /** Modals */
  async presentModal(_txpowid: string, _amount: any,
     _message: any, _txnid: string, _block: number,
     _parent: string, _tokenid: string, _date: string, _isBlock: boolean,
     _name: string) {
    const modal = await this.modalController.create({
      component: HistorymodalPage,
      componentProps: {
        'TXPOW_ID': _txpowid,
        'Amount': _amount,
        'Message': _message,
        'TXN_ID': _txnid,
        'Block': _block,
        'Parent': _parent,
        'TokenID': _tokenid,
        'Date': _date,
        'isBlock': _isBlock,
        'TokenName': _name
      }
    });
    return await modal.present();
  }
  async presentTokenModal(_txpowid: string, _amount: any,
    _message: any, _txnid: string, _block: number,
    _parent: string, _tokenid: string, _date: string, _isBlock: boolean,
    _name: string) {
   const modal = await this.modalController.create({
     component: HistorytokenmodalPage,
     componentProps: {
       'TXPOW_ID': _txpowid,
       'Amount': _amount,
       'Message': _message,
       'TXN_ID': _txnid,
       'Block': _block,
       'Parent': _parent,
       'TokenID': _tokenid,
       'Date': _date,
       'isBlock': _isBlock,
       'TokenName': _name
     }
   });
   return await modal.present();
 }

  /** ALERTS */
  // Present history details popover when tapped/clicked
  // async presentHistoryInfo(ev: any, _name: string, _addr: any, _blkNumber: any, _amnt: any,
  //                      _isBlock: boolean, _txpowid: string, _parent: string,
  //                       _blockdiff: number, _date: string, _state: any ) {
  //   const popover = await this.popHistoryController.create({
  //     component: PopHistoryComponent,
  //     cssClass: 'history-popover',
  //     event: ev,
  //     translucent: true,
  //     componentProps: {

  //          name: _name,
  //          address: _addr,
  //          blockNumber: _blkNumber,
  //          transAmount: _amnt,
  //          isBlock: _isBlock,
  //          txpowid: _txpowid,
  //          parent: _parent,
  //          blockdiff: _blockdiff,
  //          date: _date,
  //          state: _state
          
  //         },
  //   });
  //   return await popover.present();
  // }
  // Present history details popover when tapped/clicked
  // async presentHistoryTokenInfo(ev: any, _addr: any, _blkNumber: any, _amnt: any,
  //   _isBlock: boolean, _txpowid: string, _parent: string,
  //   _blockdiff: number, _date: string, _state: any ) {
  // const popover = await this.popHistoryController.create({
  //       component: PopHistoryTokenComponent,
  //       cssClass: 'history-popover',
  //       event: ev,
  //       translucent: true,
  //       componentProps: {

  //       address: _addr,
  //       blockNumber: _blkNumber,
  //       transAmount: _amnt,
  //       isBlock: _isBlock,
  //       txpowid: _txpowid,
  //       parent: _parent,
  //       blockdiff: _blockdiff,
  //       date: _date,
  //       state: _state

  // },
  // });
  // return await popover.present();
  // }

  /** MISC Functions */
  // Check if we're receiving or sending
  checkTransType(amount: string) {
    if(amount.substring(0,1) === "-"){
      return "Sent";
    } else {
      return "Received";
    }
  } 
  getTXNType(amount: string) {
    if(amount.substring(0,1) === "-"){
      return "return-down-back-outline";
    } else {
      return "arrow-redo-circle-outline";
    }
  }

  //LATER USE, history order
  getUserOrderPref() {
    if(true){
    return 't_summaryArr.slice().reverse()';
    } else {
    return 't_summaryArr';
  }
  }

  // Categories Segment
  async segmentChanged(ev: Event, slides: IonSlides){
    this.selectedSlide = slides;
    await this.selectedSlide.slideTo(this.categories);
  }
  // Slide, after segment button clicked..
  async slideChanged(slides: IonSlides){
    this.selectedSlide = slides;
    slides.getActiveIndex().then(selectedValue => {
      this.categories = selectedValue;
    });
  
  }

  /** API CALLS */
  // get length of history
  pullInHistoryLength() {
    this.historyService.getHistory().subscribe( (res: {status: boolean, minifunc: string, message: string, response: {history: History[]} })=> {
      this.t_summarySpoof = res.response.history;
      /** Check if we have any txn */
      if(this.t_summarySpoof.length > 0) {
        this.isEmpty = false;
      }
    });
  }
  
  // Get all users activities+transactions history
  pullInHistorySummary() {
  this.polledHistorySubscription = this.historyService.getHistory().pipe(map(responseData => {
    let historyArr: History[] = [];
    for(const key in responseData.response){
      let history = responseData.response;
        if(history[key]){

          //Transaction description summary
          historyArr = history[key];

          history.history.forEach(element => {
            element.values.forEach(val => {
              if(val.name === 'Create Token')
              this.tokens.push(element);
            })
          })
          
        }
        return historyArr;
    }
  })).subscribe(responseData => {
    
    if(this.lastJSON !== JSON.stringify(responseData)){
      this.transactions = responseData;
      this.lastJSON = JSON.stringify(responseData);
    }

  });
    
  }

}
