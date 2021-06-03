import { SendFormObj } from './../pages/send-funds/send-funds.page';
import { Subject, ReplaySubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Minima, NetworkStatus, Token, CompleteTransaction } from 'minima';

export const app = 'Wallet';
export const cryptocurrency = 'Minima';
export interface HistoryInterface {
  status: boolean;
  minifunc: string;
  message: string;
  response: any;
}
export interface Mining {
  started: boolean;
  finished: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class MinimaApiService {
  public $balance: Subject<Token[]>;
  public $history: Subject<CompleteTransaction[]>;
  public $status: Subject<NetworkStatus>;
  public $urlData: Subject<SendFormObj>;
  public $miningStatus: Subject<Mining>;

  constructor(
    public loadingController: LoadingController,
  ) {
    this.$balance = new ReplaySubject<Token[]>(1);
    this.$history = new ReplaySubject<CompleteTransaction[]>(1);
    this.$status = new ReplaySubject<NetworkStatus>(1);
    this.$urlData = new ReplaySubject<SendFormObj>(1);
    this.$miningStatus = new ReplaySubject<Mining>(1);
  }

  init(balance: Token[]) {
    this.$balance.next(balance);
  }

  initStatus() {
    this.getStatus().then((res: any) => {
      this.$status.next(res.response);
    });
  }

  initHistory() {
    return new Promise((resolve) => {
      this.getHistory().then((res: any) => {
        this.$history.next(res.response);
        resolve(true);
      });
    });
  }

  createToken(data: any) {
    if (data.script !== '') {
      if (data.nft) {
        return this.req('tokencreate name:\"' +
        data.name +
        '\" amount:\"' + data.amount +
        '.' + 0 +
        '\" description:\"' + data.description +
        '\" script:\"' + data.script +
        '\" icon:\"' + data.icon +
        '\" proof:\"' + data.proof +
        '\"');
      } else {
        return this.req('tokencreate name:\"' +
        data.name +
        '\" amount:\"' + data.amount +
        '\" description:\"' + data.description +
        '\" script:\"' + data.script +
        '\" icon:\"' + data.icon +
        '\" proof:\"' + data.proof +
        '\"');
      }
    } else {
      if (data.nft) {
        return this.req('tokencreate name:\"' +
        data.name +
        '\" amount:\"' +
        data.amount + '.' + 0 +
        '\" description:\"' + data.description +
        '\" icon:\"' + data.icon +
        '\" proof:\"' + data.proof +
        '\"');
      } else {
        return this.req('tokencreate name:\"' + data.name + 
        '\" amount:\"' + data.amount + 
        '\" description:\"' + data.description + 
        '\" icon:\"' + data.icon + '\" proof:\"' + data.proof + 
        '\"');
      }
    }
  }

  validateTokenID(tokenid: string) {
    return this.req('tokenvalidate ' + tokenid);
  }

  sendMessageTransaction(data: any) {
    const postTransaction =
    'send ' +
    data.amount +
    ' ' +
    data.address + ' ' +
    data.tokenid + ' ' + ' \"254:[01000100]#255:[' +
    data.message + ']\"';
    return this.req(postTransaction);
  }

  webLink(data: any) {
    return this.req('weblink+' + data.url);
  }

  setHost(newHost: string) {
    localStorage.setItem('minima_host', newHost);
  }

  newAddress() {
    return this.req('newaddress');
  }

  sendFunds(data: any) {
    return this.req('send ' +
    data.amount + ' ' + data.address + ' ' + data.tokenid);
  }

  giveMe50() {
    return this.req('gimme50');
  }

  getBalance() {
    return this.req('balance');
  }

  getHistory() {
    return this.req('history');
  }

  getStatusFull() {
    return this.req('status full');
  }

  clearMyHistory() {
    return this.req('history clear');
  }

  getStatus() {
    return this.req('status');
  }

  req(fnc: any) {
    const promise = new Promise((resolve) => {
      Minima.cmd(fnc, (resp: any) => {
        // console.log(resp);
        resolve(resp);
      });
    });
    return promise;
  }
  // File System
  saveFile(data: string, filename: string) {
    return new Promise((resolve, reject) => {
      Minima.file.save(data, filename, (res: any) => {
        resolve(res);
      });
    });
  }

  loadFile(filename: string) {
    return new Promise((resolve, reject) => {
      Minima.file.load(filename, (res: any) => {
        resolve(res);
      });
    });
  }

  removeFile(filename: string) {
    return new Promise((resolve, reject) => {
      Minima.file.delete(filename, (res: any) => {
        if (res.success) {
          resolve(res);
        } else {
          resolve(false);
        }
      });
    }).catch((err) => {
      throw new Error(cryptocurrency + ': RPC command failed!');
    });
  }
}
