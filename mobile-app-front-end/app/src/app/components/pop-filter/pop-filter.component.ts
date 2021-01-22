import { UserConfigService } from './../../service/userconfig.service';
import { UserConfig } from './../../models/userConfig.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-filter',
  templateUrl: './pop-filter.component.html',
  styleUrls: ['./pop-filter.component.scss'],
})
export class PopFilterComponent implements OnInit {

  public userConfig: UserConfig;

  constructor(private userConfigService: UserConfigService) {
    // set default value from observable
    this.userConfig.historyOrderByMode = this.userConfigService.userConfig.value.historyOrderByMode;
  }

  ngOnInit() {}

  compareWithFn(o1, o2) {
    return o1 == o2;
  }

  change(ev: any) {
    let temp = this.userConfigService.userConfig.value;
    temp.historyOrderByMode = ev.detail.value;
    this.userConfigService.userConfig.next(temp);
    this.userConfigService.saveUserConfig(this.userConfigService.userConfig.value);
  }

}
