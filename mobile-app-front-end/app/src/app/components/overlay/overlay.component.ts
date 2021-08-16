import { MinimaApiService } from './../../service/minima-api.service';
import { Subscription } from 'rxjs';
import { environment } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class OverlayComponent implements OnInit {
  readonly TIMERZERO = 0;
  readonly TIMER = 1000000;
  statusSubscriber: Subscription;
  balanceSubscriber: Subscription;
  environment: any;
  stillHere: boolean;

  constructor(private api: MinimaApiService) {
    this.stillHere = false;
    setTimeout(() => {
      this.stillHere = true;
    }, 4000);
    this.environment = environment;
  }

  ngOnInit() {}

  pageReload() {
    location.reload();
  }
}
