import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { MinimaApiService } from '../service/minima-api.service';


@Component({
  selector: 'app-mini-status',
  templateUrl: './mini-status.page.html',
  styleUrls: ['./mini-status.page.scss'],
})

export class MiniStatusPage implements OnInit {

  // @ViewChild('statusColor', {static : false}) statusRef : ElementRef;

  data: any;
  blocksGenerated : number;
  versionNumber : number;
  timeElapsed: number;
  upTime : string;
  stringUptime : string;
  status: string;
  conf: string;
  miniHost: string;
  miniPort: number;
  miniRpcport: number;
  pulse: string;
  block: number;
  private host = '';
  private loader: any = null;



  constructor(private api: MinimaApiService, private ref: ChangeDetectorRef) {
    setInterval(() => { this.ref.markForCheck(); console.log('change occurred');}, 5000);
   }

   @Input()
   set live(value: boolean) {
     if (value) {
       this.ref.reattach();
     } else {
       this.ref.detach();
     }
   }
 
  ngOnInit() { }

  ionViewWillEnter() {
    this.updateStatus();
  }

  ionViewDidEnter() {
    // this.plotSimpleBarChart();
  }

  doRefresh(event) {
    console.log('Refreshing page..');
    this.api.getStatus().then((res: any) => {
      console.log(res);
      this.updateStatus();
    });
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 200);
  }

  updateStatus() {
    this.api.getStatus().then((res : any) => {

      console.log(res.response.tip.Block);
      // Check node's status..
      if(res.status === true){
        this.status = "Online";
        
      } else {
        this.status = "Offline";
      }
      // fetch json vars..
      this.versionNumber = res.response.version;
      this.blocksGenerated = res.response.tip.Block;
      this.upTime = res.response.milliuptime;
      this.stringUptime = res.response.stringuptime;
      this.conf = res.response.conf;
      this.miniHost = res.response.host + ":";
      this.miniPort = res.response.port;
      this.miniRpcport = res.response.rpcport;
      this.pulse = res.response.pulse;
      this.block = res.response.tip.block;
      
    
    });
  }

  getColor() {
    if(this.status == "Online") {
      return 'green';
    } else {
      return 'red';
    }
  }
  

  
}
