import { TimeCompleteTransaction } from './../history.page';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ToolsService } from './../../../service/tools.service';
import { MinimaApiService } from './../../../service/minima-api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

declare var require: any; // quick fix just cause I'm using require for 1 pkg
var moment = require('moment');

@Component({
  selector: 'app-view-txn',
  templateUrl: './view-txn.page.html',
  styleUrls: ['./view-txn.page.scss'],
})
export class ViewTXNPage implements OnInit {

  $subscription: Subscription;
  myTxn: TimeCompleteTransaction[];
  transactionID: string = '';

  hide: boolean;
  prompt: string;

  id: string;
  relaytime: string;
  type: string;
  message: string;

  constructor(
    public route: ActivatedRoute,
    private _minimaApiService: MinimaApiService,
    private myTools: ToolsService
  ) {

    this.hide = false;
    this.message = '';
    this.prompt = 'Fetching your transaction details...';
    
  }
  
  ionViewWillEnter() {

    this.fetchHistory().then((res: any) => {
      if (res) {
        this.transactionID = this.route.snapshot.paramMap.get('id');
    
        if (this.transactionID && this.transactionID.length > 0) {
            this.$subscription = this._minimaApiService.$history.pipe(take(1)).subscribe((history: any) => {
              (
                history.history ? 
                
                this.myTxn = history.history.filter((txn: TimeCompleteTransaction) => txn.txpow.txpowid === this.transactionID)
                        
                : 
        
                console.log('Transaction not found.')
              
              )
              const MESSAGE = this.myTxn[0].txpow.body.txn.state[1].data;
              if (this.myTxn.length > 0) {
                
                this.relaytime = new Date(parseInt(this.myTxn[0].txpow.header.timemilli)).toISOString();
                this.relaytime = moment(this.relaytime).format('DD/MM/YYYY - hh:mm:ss a', true);
      
                (
                  this.myTxn[0].txpow.body.txn.state &&
                   this.myTxn[0].txpow.body.txn.state[0] &&
                    this.myTxn[0].txpow.body.txn.state[0].data === '[01000100]' ?
                  
                    this.message = MESSAGE.substring(1, MESSAGE.length-1)
      
                    :
      
                    console.log('not found')
      
                );
                (
                  this.myTxn[0].txpow.body.txn.tokengen ?
      
                  this.type = 'Token Creation.'
      
                  :
      
                  this.type = 'Value Transfer.'
      
      
                )
              } 
            });

            console.log(this.message)
            
            // check & see if subscription worked
            if (this.$subscription.closed) {
    
              this.prompt = '';
    
            } else {
    
              this.prompt = 'No transaction details found.';
    
            }
    
          } 
      }
    })

  }

  ionViewWillLeave() {

    if (this.$subscription) {

      this.$subscription.unsubscribe();

    }

  }
  
  fetchHistory() {

    return this._minimaApiService.initHistory()


  }

  ngOnInit() {}

  giveMe50() {
    this._minimaApiService.giveMe50().then((res: any) => {
      if(res.status === true) {
        this.myTools.presentAlert('Gimme50', 'Successful', 'Status');
      } else {
        this.myTools.presentAlert('Gimme50', res.message, 'Status');
      }
    });
  }

  copy(text: string) {
    this.myTools.copy(text);
  }


}
