import { Component, OnInit } from '@angular/core';
import { MinimaApiService } from '../service/minima-api.service';
@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
})
export class BalancePage implements OnInit {

  public balance = 0;

  constructor(private api: MinimaApiService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.api.getBalance().then((res : any) => {
      console.log(res);
      for (let i = 0; i < Object.keys(res.response.confirmed).length; i++){
        this.balance = Math.round( res.response.confirmed[i].amount * 100) / 100;
      } 
      //this.balance = Math.round(res.response.confirmed.amount * 100) / 100;
      console.log('Balance set');
    });
  }

  doRefresh(event) {
    console.log('Refreshing page..');
    this.api.getBalance().then((res: any) => {
      console.log(res);
      for (let i = 0; i < Object.keys(res.response.confirmed).length; i++){
        this.balance = Math.round( res.response.confirmed[i].amount * 100) / 100;
      } 
      //this.balance = Math.round(res.response.confirmed.amount * 100) / 100;
    });
    event.target.complete();
  }

}
