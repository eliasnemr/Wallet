import { MinimaApiService } from './minima-api.service';
import { Minima, NetworkStatus } from 'minima';
import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  updatedStatus: Subject<NetworkStatus> = new ReplaySubject<NetworkStatus>(1) ;

  constructor(private _minimaApiService: MinimaApiService) {
    this._minimaApiService.initStatus();
  }
}
