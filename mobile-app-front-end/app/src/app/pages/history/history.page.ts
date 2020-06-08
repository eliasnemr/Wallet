import { MinimaApiService } from '../../service/minima-api.service';
import { PopoverController, IonSlides, ModalController, Platform } from '@ionic/angular';
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
  ios: boolean = false;
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

  constructor(private api: MinimaApiService, private historyService: HistoryService,
     public modalController: ModalController, private platform: Platform) {}

  ngOnInit() {
    if(this.platform.is('ios') || this.platform.is('android')){
      this.ios = true;
    }
  }

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
     _message: any, _block: number, _tokenid: string, _date: string, _isBlock: boolean,
     _name: string) {
    const modal = await this.modalController.create({
      component: HistorymodalPage,
      componentProps: {
        'TXPOW_ID': _txpowid,
        'Amount': _amount,
        'Message': _message,
        'Block': _block,
        'TokenID': _tokenid,
        'Date': _date,
        'isBlock': _isBlock,
        'TokenName': _name
      }
    });
    return await modal.present();
  }
  async presentTokenModal(_txpowid: string, _amount: any,
    _message: any,  _block: number, _tokenid: string, _date: string, _isBlock: boolean,
    _name: string) {
   const modal = await this.modalController.create({
     component: HistorytokenmodalPage,
     componentProps: {
       'TXPOW_ID': _txpowid,
       'Amount': _amount,
       'Message': _message,
       'Block': _block,
       'TokenID': _tokenid,
       'Date': _date,
       'isBlock': _isBlock,
       'TokenName': _name
     }
   });
   return await modal.present();
 }


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
      return "arrow-round-back";
    } else {
      return "arrow-round-forward";
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
    console.log(responseData);
    let historyArr: History[] = [];
    for(const key in responseData.response){
      let history = responseData.response;
        if(history[key]){

          //Transaction description summary
          historyArr = history[key];

          history.history.forEach((element: History) => {
            
            if(element.values[0].name === 'Create Token'){
              this.tokens.push(element);
            }
            
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
