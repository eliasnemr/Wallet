import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Clipboard } from '@ionic-native/clipboard/ngx';

@Component({
  selector: 'app-pop-history-token',
  templateUrl: './pop-history-token.component.html',
  styleUrls: ['./pop-history-token.component.scss'],
})
export class PopHistoryTokenComponent implements OnInit {
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

copyToClipboard(data: any) {
this.clipboard.copy(data);
alert('Copied Clipboard Successfully.');
}

}
