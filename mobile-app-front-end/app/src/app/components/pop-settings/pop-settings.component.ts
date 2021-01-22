import { map } from 'rxjs/operators';
import { UserConfigService } from './../../service/userconfig.service';
import { UserConfig } from './../../models/userConfig.model';
import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-pop-settings',
  templateUrl: './pop-settings.component.html',
  styleUrls: ['./pop-settings.component.scss'],
})
export class PopSettingsComponent implements OnInit {

  public user: UserConfig;

  constructor(private userConfigService: UserConfigService) {
    // set default value from observable
    this.userConfigService.userConfig.subscribe((val: UserConfig) => {
      this.user = val;
    });
  }

  ngOnInit() {}

  compareWithFn(o1, o2) {
    return o1 === o2;
  }

  change(ev: any) {
    // tslint:disable-next-line: radix
    this.user.tokenDisplayMode = parseInt(ev.detail.value);
    this.userConfigService.userConfig.next(this.user);
    this.userConfigService.saveUserConfig(this.user);
  }
}
