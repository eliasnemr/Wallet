import { T_Summary } from '../../models/t_summary';
import { MinimaApiService } from '../../service/minima-api.service';
import { PopoverController } from '@ionic/angular';
import { PopHistoryComponent } from '../../components/pop-history/pop-history.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  // + vars
  public transactions: [];
  public t_summaryArr = [];
  public t_txpow: [];
  public t_inputs: [];
  public t_outputs: [];


  constructor(public popHistoryController: PopoverController, private api: MinimaApiService ) { }

  ngOnInit() {}

  ionViewDidEnter(){
   this.pullInHistorySummary();
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
  
  // Get all users transaction history
   pullInHistorySummary() {

    this.api.getHistory().then((res: any) => {
      if(res.status === true) {
        console.log('Pulling in history ->'+res);
        let countActivity = 0;

        // loop through every transaction there is..
        res.response.history.forEach((activity: any) => {
          countActivity++;

          // get the information of summary
          let Month = activity.txpow.date.substring(4,7);
          let Day = activity.txpow.date.substring(8, 10);
          let Tokenid = activity.txpow.txn.inputs.tokenid;
          let Amount = activity.value;
          let InputsArr = activity.txpow.txn.inputs;
          let OutputsArr = activity.txpow.txn.outputs;
          let Address = '';

          // get information of Details
          let blockNumber = activity.txpow.block;
          let isBlock = activity.txpow.isblock;
          let txpowid = activity.txpow.txpowid;
          let parent = activity.txpow.parent;
          let blockdiff = activity.txpow.blockdiff;
          let date = activity.txpow.date.substring(4);

          //let tokenName = activity.tokenName;
          // Loop in inputs and get required key indexes to create our summary obj
          InputsArr.forEach(element => {
            Tokenid = element.tokenid.substring(0, 10);
          });
          OutputsArr.forEach(element => {
            Address = element.address;
          });
          
          //create t_summary(transaction_summary) Object to push into Array
          let transSummary = new T_Summary(countActivity, Month, Day, Tokenid, 
                    "Minima", Amount, 10, Address, blockNumber, isBlock, txpowid, parent, blockdiff, date);
          this.t_summaryArr.push(transSummary);

        });
      }
    });
    this.t_summaryArr = new Array;


  }

}
