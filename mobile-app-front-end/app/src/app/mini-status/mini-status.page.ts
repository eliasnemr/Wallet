import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import * as HighCharts from 'highcharts';
import { MinimaApiService } from '../service/minima-api.service';
import { Url } from 'url';

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

  constructor(private api: MinimaApiService) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.updateStatus();
  }

  ionViewDidEnter() {
    // this.plotSimpleBarChart();
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
  // plotSimpleBarChart() {
  //   let myChart = HighCharts.chart('highcharts', {
  //     chart: {
  //       type: 'line'
  //     },

  //     title: {
  //       text: 'MiniBlocks Generated/Time Elapsed'
  //     },

  //     xAxis: {
  //       categories: [0, 1000000, 300000]
  //     },

  //     yAxis: {
  //       title: {
  //         text: 'MiniBlocks (TxPoW)'
  //       },
  //       plotLines: [{
  //         value: 0,
  //         width: 1,
  //         color: '#808080'
  //       }]
  //     },

  //     tooltip: {
  //       valueSuffix: '\xB0C'
  //     },

  //     legend: {
  //       layout: 'vertical',
  //       align: 'right',
  //       verticalAlign: 'middle',
  //       borderWidth: 0
  //     },
  //     series: [
  //       {
  //         name: 'BLOCKS MINED.',
  //         data: [0, 3000, 5000]
  //       }
  //     ]
  //   });

  // }

  
}
