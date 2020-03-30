import { MinimaApiService } from '../../service/minima-api.service';
import { PopoverController } from '@ionic/angular';
import { PopHistoryComponent } from '../../components/pop-history/pop-history.component';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HistoryService } from '../../service/history.service';
import { map } from 'rxjs/operators';
import { MiniHistory } from '../../models/minihistory.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  // + vars
  public t_summaryArr: MiniHistory[] = [];
  public t_summarySpoof: MiniHistory[] = [];

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
    }, 1000);
   
  }

  ionViewDidLeave(){
   this.polledHistorySubscription.unsubscribe();
  }

  // Present history details popover when tapped/clicked
  async presentHistoryInfo(ev: any, _addr: any, _blkNumber: any, _amnt: any,
                       _isBlock: boolean, _txpowid: string, _parent: string,
                        _blockdiff: number, _date: string ) {
    const popover = await this.popHistoryController.create({
      component: PopHistoryComponent,
      cssClass: 'history-popover',
      event: ev,
      translucent: true,
      componentProps: {

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

  // Check if we're receiving or sending
  checkTransType(amount: any) {
    if(amount.toString().substring(0,1) === "-"){
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
    let historyArr: MiniHistory[] = [];
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
      this.t_summaryArr = responseData;
      this.lastJSON = JSON.stringify(responseData);
    }

  });
    
  }

}
