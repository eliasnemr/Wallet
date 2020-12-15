import { UserconfigService } from './../../service/userconfig.service';
import { UserConfig } from './../../models/userConfig.model';
import { Minima } from 'minima';
import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-pop-settings',
  templateUrl: './pop-settings.component.html',
  styleUrls: ['./pop-settings.component.scss'],
})
export class PopSettingsComponent implements OnInit {

  public userConfig: UserConfig = {tokenDisplayMode:1};

  constructor(private userConfigService: UserconfigService) {
    // set default value from observable
    this.userConfig.tokenDisplayMode = this.userConfigService.userConfig.value.tokenDisplayMode;
  }

  ngOnInit() {}

  compareWithFn(o1, o2) {
    return o1 === o2;
  };

  change(ev: any) {
    let temp = this.userConfigService.userConfig.value;
    temp.tokenDisplayMode = ev.detail.value;
    this.userConfigService.userConfig.next(temp);
    this.userConfigService.saveUserConfig(this.userConfigService.userConfig.value);
  }
}
