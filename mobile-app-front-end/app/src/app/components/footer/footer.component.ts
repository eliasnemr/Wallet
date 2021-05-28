import { Subscription } from 'rxjs';
import { IonButton } from '@ionic/angular';
import { ToolsService } from './../../service/tools.service';
import { MinimaApiService, Mining } from './../../service/minima-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
/** */
export class FooterComponent implements OnInit {
  @ViewChild('gimme50Btn', {static: false}) gimme50Btn: IonButton;
  public miningStarted: boolean;
  public miningFinished: boolean;
  public showDone: boolean;
  public showMining: boolean;
  public $mining: Subscription;
  status: string;
  /** */
  constructor(
    private minimaApiService: MinimaApiService,
    private tools: ToolsService) {
    this.status = 'Gimme 50';
    this.miningStarted = false;
    this.miningFinished = false;
    this.showDone = false;
    this.showMining = false;
  }

  /** */
  ngOnInit() {
    this.$mining =
    this.minimaApiService.$miningStatus.subscribe((status: Mining) => {
      if (status.started) {
        this.miningStarted = true;
        this.miningFinished = false;
      } else if (status.finished) {
        this.miningStarted = false;
        this.miningFinished = true;
      } else {
        this.miningStarted = false;
        this.miningFinished = false;
      }
    });
  }

  ngOnDestroy() {
    this.$mining.unsubscribe();
  }

  ionViewWillEnter() {
    // console.log('Footer page');
    this.$mining =
    this.minimaApiService.$miningStatus.subscribe((status: Mining) => {
      console.log('Mining Status changed!');
      if (status.started) {
        this.miningStarted = true;
        this.miningFinished = false;
      } else if (status.finished) {
        this.miningFinished = true;
        this.miningStarted = false;
      }
    });
  }
  ionViewWillLeave() {
    if (this.$mining) {
      this.$mining.unsubscribe();
    }
  }
  /** Give user testnet money */
  gimme50() {
    this.status = '';
    this.gimme50Btn.disabled = true;
    this.minimaApiService.giveMe50().then((res: any) => {
      if (res.status) {
        // this.tools.presentAlert('Gimme50', 'Successful', 'Status');
        this.status = 'Gimme 50';
        this.gimme50Btn.disabled = false;
      } else {
        this.tools.presentAlert('Gimme50', res.message, 'Status');
        this.status = 'Unavailable';
        setTimeout(() => {
          this.gimme50Btn.disabled = false;
          this.status = 'Gimme 50';
        }, 4000);
      }
    });
  }
}
