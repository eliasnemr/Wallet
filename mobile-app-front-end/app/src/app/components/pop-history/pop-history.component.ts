import { HistoryPage } from '../../pages/history/history.page';
import { NavParams, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@ionic-native/clipboard/ngx';


@Component({
  selector: 'app-pop-history',
  templateUrl: './pop-history.component.html',
  styleUrls: ['./pop-history.component.scss'],
})
export class PopHistoryComponent implements OnInit {

  // + params
  public receivingAddress: any;
  public blockNumber: number;
  public transAmount: number;
  public isBlock: boolean;
  public txpowid: string;
  public parent: string;
  public blockdiff: number;  
  public date: string;

constructor(public navParams: NavParams, private clipboard: Clipboard) {

  this.receivingAddress = this.navParams.get('address');
  this.blockNumber = this.navParams.get('blockNumber');
  this.transAmount = this.navParams.get('transAmount');
  this.isBlock = this.navParams.get('isBlock');
  this.txpowid = this.navParams.get('txpowid');
  this.parent = this.navParams.get('parent');
  this.blockdiff = this.navParams.get('blockdiff');
  this.date = this.navParams.get('date');
  
}

ngOnInit() {}

// Check if we're receiving or sending
checkTransType(amount: any) {
  if(amount.toString().substring(0,1) === "-"){
    return "Sent";
  } else {
    return "Received";
  }
}

copyToClipboard(data: any) {
  this.clipboard.copy(data);
  alert('Copied Clipboard Successfully.');
}

}
