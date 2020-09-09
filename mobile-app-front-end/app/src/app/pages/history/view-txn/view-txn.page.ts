import { NavController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-txn',
  templateUrl: './view-txn.page.html',
  styleUrls: ['./view-txn.page.scss'],
})
export class ViewTXNPage implements OnInit {

  txn_id: string;

  constructor() {
    // this.txn_id = this.navParams.get("txn");
   }

  ngOnInit() {
  }

}
