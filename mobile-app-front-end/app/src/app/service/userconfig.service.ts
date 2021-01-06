import { BehaviorSubject } from 'rxjs';
import { Minima } from 'minima';
import { UserConfig } from './../models/userConfig.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserConfigService {

  defaultConfig: UserConfig = {systemMode:'light', terminalFontSize:'12', tokenDisplayMode:1, historyOrderByMode:1, historySaved: ''};
  userConfig: BehaviorSubject<UserConfig> = new BehaviorSubject<UserConfig>(this.defaultConfig);

  constructor() { 
    this.createUserConfig(this.defaultConfig);
  }

  createUserConfig(defaultConfig: UserConfig) {
    Minima.file.load('UserConfig.txt', (res: any) => {
      //console.log(res);
      if (!res.success && !res.exists) {
        const data = defaultConfig;
        Minima.file.save(JSON.stringify(data), 'UserConfig.txt', (res: any) => {
          if (res.success) { }
        });
      } else {
        //console.log(JSON.parse(res.data))
        this.userConfig.next(JSON.parse(res.data));
      }
    });
  }

  saveUserConfig(currentValue: any) {
    Minima.file.load('UserConfig.txt', (res: any) => {
      if (res.success) {
        let data = res.data;
        if(data !== JSON.stringify(currentValue)) { 
          //console.log(JSON.stringify(currentValue));
          Minima.file.save(JSON.stringify(currentValue), 'UserConfig.txt', (res: any) => {
            if (res.success) {
              //console.log('Updated UserConfig!');
            }
          });
        }
      }
    })
  }

  loadUserConfig(userConfig: UserConfig) {
    Minima.file.load('userConfig.txt', (res: any) => {
      if (res.success) {
        userConfig = JSON.parse(res.data); 
      }
    });

    return;
  }

}
