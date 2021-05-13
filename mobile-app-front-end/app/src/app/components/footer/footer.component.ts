import { ToolsService } from './../../service/tools.service';
import { MinimaApiService } from './../../service/minima-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
/** */
export class FooterComponent implements OnInit {
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
    this.status = 'Collecting your cash';
    this.minimaApiService.giveMe50().then((res: any) => {
      if (res.status === true) {
        this.tools.presentAlert('Gimme50', 'Successful', 'Status');
      } else {
        this.tools.presentAlert('Gimme50', res.message, 'Status');
      }
    });
  }
}
