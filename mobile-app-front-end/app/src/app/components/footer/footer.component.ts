import { Subscription } from 'rxjs';
import { IonButton } from '@ionic/angular';
import { ToolsService, FooterStatus } from './../../service/tools.service';
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
  public showFooter: boolean;
  public $mining: Subscription;
  public $footerStatus: Subscription;
  status: string;
  /** */
  constructor(
    private minimaApiService: MinimaApiService,
    private tools: ToolsService) {
    this.status = 'TESTNET50';
    this.miningStarted = false;
    this.miningFinished = false;
    this.showDone = false;
    this.showMining = false;
  }

  /** */
  ngOnInit() {
    this.$footerStatus =
    this.tools.showFooterSubject.subscribe((fStatus: FooterStatus) => {
      this.showFooter = fStatus.status;
    });

    this.$mining =
    this.minimaApiService.$miningStatus.subscribe((status: Mining) => {
      if (status.started) {
        this.miningStarted = true;
        this.miningFinished = false;
        this.tools.getFooterSubjectOnce().subscribe((status: FooterStatus) => {
          // If it's not open, open it, and wasOpened = false
          if (!status.status) {
            this.tools.showFooterSubject.next({status: true, wasOpened: false});
          }
        });
      } else if (status.finished) {
        this.miningStarted = false;
        this.miningFinished = true;
        this.tools.getFooterSubjectOnce().subscribe((status: FooterStatus) => {
          // If it's open, (should be) and it wasn't open.. close it
          if (status.status &&
              status.wasOpened !== undefined &&
              !status.wasOpened) {
            setTimeout(() => {
              this.tools.showFooterSubject.next({status: false});
            }, 2000);
          }
        });
      } else {
        this.miningStarted = false;
        this.miningFinished = false;
      }
    });
  }

  ngOnDestroy() {
    this.$mining.unsubscribe();
  }

  /** Give user testnet money */
  gimme50() {
    this.status = '';
    this.gimme50Btn.disabled = true;
    this.minimaApiService.giveMe50().then((res: any) => {
      if (res.status) {
        // this.tools.presentAlert('Gimme50', 'Successful', 'Status');
        this.status = 'TESTNET50';
        this.gimme50Btn.disabled = false;
      } else {
        this.tools.presentAlert('Gimme50', res.message, 'Status');
        this.status = 'Unavailable';
        setTimeout(() => {
          this.gimme50Btn.disabled = false;
          this.status = 'TESTNET50';
        }, 4000);
      }
    });
  }
  updateFooterStatus() {
    if (!this.showFooter) {
      this.tools.showFooterSubject.next({status: true});
    } else {
      this.tools.showFooterSubject.next({status: false});
    }
  }
  showMiningText() {
    (this.showMining ? this.showMining = false : this.showMining = true);
    setTimeout(() => {
      (this.showMining ? this.showMining = false : null);
    }, 2000);
  }
  showDoneText() {
    (this.showDone ? this.showDone = false : this.showDone = true);
    setTimeout(() => {
      (this.showDone ? this.showDone = false : null);
    }, 2000);
  }
}
