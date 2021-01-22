import { BehaviorSubject } from 'rxjs';
import { Minima } from 'minima';
import { UserConfig } from './../models/userConfig.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserConfigService {

  defaultConfig: UserConfig = {
    systemMode: 'light',
    terminalFontSize: '12',
    tokenDisplayMode: 1,
    historyOrderByMode: 1,
    historySaved: '',
    tips: {balance: false, contacts: false, address: false}};
  userConfig: BehaviorSubject<UserConfig> = new BehaviorSubject<UserConfig>(this.defaultConfig);

  constructor() {
    this.createUserConfig(this.defaultConfig);
  }

  createUserConfig(defaultConfig: UserConfig) {
    Minima.file.load('UserConfig.txt', (res: any) => {
      if (!res.success && !res.exists) {
        Minima.file.save(JSON.stringify(defaultConfig), 'UserConfig.txt', (resp: any) => {
          if (resp.success) {
            console.log('User Configuration File has been created with default values.');
          }
        });
      } else { // if userConfig exists, update with latest values
        this.userConfig.next(JSON.parse(res.data));
      }
    });
  }

  saveUserConfig(currentValue: any) {
    Minima.file.load('UserConfig.txt', (res: any) => {
      if (res.success) {
        if (res.data !== JSON.stringify(currentValue)) {
          Minima.file.save(JSON.stringify(currentValue), 'UserConfig.txt', (res: any) => {
            if (res.success) {
            //  console.log('Updated UserConfig!');
            }
          });
        }
      }
    });
  }


}
