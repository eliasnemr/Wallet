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

      responseData.uptime = responseData.uptime.replace(/0 Years|0 Months|0 Weeks|0 Days|0 Hours|0 Minutes|0 Seconds|0 Milliseconds/gi, " ");

      responseData.uptime = responseData.uptime.replace(/1 Minutes/gi, "1 Minute");
      responseData.uptime = responseData.uptime.replace(/1 Seconds/gi, "1 Second");
      responseData.uptime = responseData.uptime.replace(/1 Years/gi, "1 Year");
      responseData.uptime = responseData.uptime.replace(/1 Milliseconds/gi, "1 Millisecond");
      responseData.uptime = responseData.uptime.replace(/1 Hours/gi, "1 Hour");

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
