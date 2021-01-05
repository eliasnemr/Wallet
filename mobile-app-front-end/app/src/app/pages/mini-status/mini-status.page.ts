import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { StatusService } from './../../service/status.service';
import { Component, OnInit } from '@angular/core';
import { NetworkStatus } from 'minima';

@Component({
  selector: 'app-mini-status',
  templateUrl: './mini-status.page.html',
  styleUrls: ['./mini-status.page.scss']
})
export class MiniStatusPage implements OnInit {

  status: NetworkStatus;
  statusSubscription: Subscription;

  public lastJSON: string;

  constructor(private service: StatusService) {}

  ngOnInit() { }

  ionViewWillEnter() {
    this.updateStatus();
  }

  ionViewWillLeave() {
    if (this.statusSubscription) {
      this.statusSubscription.unsubscribe(); // unsubs
    }
  }

  updateStatus() {
    this.statusSubscription = this.service.updatedStatus
    .pipe(map((responseData: NetworkStatus) => {
      return responseData;
    })
    )
    .subscribe( ( res: any) => {
      if ( this.lastJSON !== JSON.stringify(res) ) {
        this.status = res;
        this.lastJSON = JSON.stringify(res);
      }
    });
  }
}
