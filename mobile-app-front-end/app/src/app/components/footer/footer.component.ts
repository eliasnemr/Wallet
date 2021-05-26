import { IonButton } from '@ionic/angular';
import { ToolsService } from './../../service/tools.service';
import { MinimaApiService } from './../../service/minima-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
/** */
export class FooterComponent implements OnInit {
  @ViewChild('gimme50Btn', {static: false}) gimme50Btn: IonButton;
  status: string;
  /** */
  constructor(
    private minimaApiService: MinimaApiService,
    private tools: ToolsService) {
    this.status = 'Gimme 50';
  }

  /** */
  ngOnInit() {}
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
