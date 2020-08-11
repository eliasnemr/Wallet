import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { StatusService } from './../../service/status.service';
import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { Status } from '../../models/status.model';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-mini-status',
  templateUrl: './mini-status.page.html',
  styleUrls: ['./mini-status.page.scss'],
  providers: [ StatusService ] 
})

export class MiniStatusPage implements OnInit {

  status: { status: boolean, minifunc: string, message: string, response: Status};
  statusSubscription: Subscription;

  public statusOfStatus: string = 'empty';
  public lastJSON: string;

  // - vars
  private host = '';
  private loader: any = null;

  constructor(private service: StatusService, private ref: ChangeDetectorRef, private plat: Platform) {}
 
  ngOnInit() { }

  ionViewWillEnter() {
    setTimeout(() => {
      this.updateStatus(); // subscribes & polls status
      this.statusOfStatus = 'updated';
    }, 500);

    window.addEventListener('MinimaEvent', (evt: any)=> {
      // Event connection success
      if(evt.detail.event === 'newblock') {

        this.updateStatus();
        this.statusOfStatus = 'updated';
        // setTimeout(() => {
        //   this.updateStatus(); // subscribes & polls status
        // }, 3500);
        
  
      } 
    });
  }

  ionViewWillLeave(){
  
    if(this.statusSubscription){

      this.statusSubscription.unsubscribe(); // unsubs

    }

  }

  getImg() {
    if(document.body.classList.value === 'dark'){
      return '../../assets/fulllogodark.svg';
    } else {
      return '../../assets/fulllogo.svg';
    }
  }

  checkPlatform(): Boolean {
    if(this.plat.is('ios') || this.plat.is('android')){
      return false;
    } else {
      return true;
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
      
      if(this.lastJSON != JSON.stringify(res)){
        this.status = res;
        this.statusOfStatus = 'updated';
        this.lastJSON = JSON.stringify(res);
      } 
      
      
    });
  }
  

  
}
