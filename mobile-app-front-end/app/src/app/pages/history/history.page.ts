import { MinimaApiService } from '../../service/minima-api.service';
import { PopoverController, IonSlides } from '@ionic/angular';
import { PopHistoryComponent } from '../../components/pop-history/pop-history.component';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { HistoryService } from '../../service/history.service';
import { map } from 'rxjs/operators';
import { History } from '../../models/history.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  selectedSlide: any;
  categories: number = 0;
  sliderOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 400
  }
  // + vars
  public transactions: History[] = [];
  public t_summarySpoof: History[] = [];

  polledHistorySubscription: Subscription;

  // - vars
  private lastJSON: string = '';

  constructor(public popHistoryController: PopoverController,
             private api: MinimaApiService,
             private historyService: HistoryService) {}

  ngOnInit() {}

  ionViewDidEnter(){ 
    this.pullInHistoryLength();
    setTimeout(() => {
      this.pullInHistorySummary(); // subscribe and polls history
    }, 500);
  }

  ionViewDidLeave(){
   this.polledHistorySubscription.unsubscribe();
  }

  /** ALERTS */
  // Present history details popover when tapped/clicked
  async presentHistoryInfo(ev: any, _name: string, _addr: any, _blkNumber: any, _amnt: any,
                       _isBlock: boolean, _txpowid: string, _parent: string,
                        _blockdiff: number, _date: string ) {
    const popover = await this.popHistoryController.create({
      component: PopHistoryComponent,
      cssClass: 'history-popover',
      event: ev,
      translucent: true,
      componentProps: {

           name: _name,
           address: _addr,
           blockNumber: _blkNumber,
           transAmount: _amnt,
           isBlock: _isBlock,
           txpowid: _txpowid,
           parent: _parent,
           blockdiff: _blockdiff,
           date: _date,
          
          },
    });
    return await popover.present();
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
    this.historyService.getHistory().subscribe(res => {
      for(const i in res.response.history){
      this.t_summarySpoof.push(res.response.history[i]);
      }
    });
  }
  
  // Get all users transaction history
  pullInHistorySummary() {
  this.polledHistorySubscription = this.historyService.getHistory().pipe(map(responseData => {
    let historyArr: History[] = [];
    for(const key in responseData.response){
      let history = responseData.response;
        if(history[key]){

          //Transaction description summary
          historyArr = history[key];
          
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
