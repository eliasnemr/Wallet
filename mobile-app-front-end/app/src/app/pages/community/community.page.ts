import { ToolsService } from './../../service/tools.service';
import { AlertController, MenuController } from '@ionic/angular';
import { MinimaApiService } from './../../service/minima-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.page.html',
  styleUrls: ['./community.page.scss'],
})
export class CommunityPage implements OnInit {

  constructor(
    public menu: MenuController, 
    private api: MinimaApiService, 
    private myTools: ToolsService
    ) { }

  ngOnInit() {
  }

  openMenu() {
    this.menu.open();
  }

   giveMe50() {
    this.api.giveMe50().then((res: any) => {
      if(res.status === true) {
        this.myTools.presentAlert('Gimme50', 'Successful', 'Status');
      } else {
        this.myTools.presentAlert('Gimme50', res.message, 'Status');
      }
    });
  }

}
