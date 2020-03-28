import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { StatusService } from './../../service/status.service';
import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { Status } from '../../models/status.model';

@Component({
  selector: 'app-mini-status',
  templateUrl: './mini-status.page.html',
  styleUrls: ['./mini-status.page.scss'],
  providers: [ StatusService ] 
})

export class MiniStatusPage implements OnInit {

  status: { status: boolean, minifunc: string, response: Status};
  statusSubscription: Subscription;

  statusOfStatus: string = 'empty';

  // - vars
  private host = '';
  private loader: any = null;

  constructor(private service: StatusService, private ref: ChangeDetectorRef) {}
 
  ngOnInit() { }

  ionViewWillEnter() {
    setTimeout(() => {
      this.updateStatus(); // subscribes & polls status
      this.statusOfStatus = 'updated';
    }, 500);
  }

  ionViewWillLeave(){
   this.statusSubscription.unsubscribe(); // unsubs
  }

  getImg() {
    if(document.body.classList.value === 'dark'){
      return '../../assets/fulllogodark.svg';
    } else {
      return '../../assets/fulllogo.svg';
    }
  }

  updateStatus() {

    this.statusSubscription = this.service.getStatus()
    .pipe(map(responseData => {
      
      const status = responseData;
      
      return status;
    })
    )
    .subscribe((res : any) => {
      this.status = res;
      
      
    
    });
  }
  

  
}
