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
      const el = document.querySelector('.ruler');
      if (el && el.classList) {
        el.classList.remove('animate__heartBeat');
        el.classList.add('animate__flipInX');
        setTimeout(() => {
          el.classList.remove('animate__flipInX');
          el.classList.remove('animate__infinite');
          el.classList.add('animate__fadeOut');
          el.classList.add('animate__repeat-2');
        }, 6500);
      }
    }, 4000);
    this.environment = environment;
  }

  ngOnInit() {}

  pageReload() {
    location.reload();
  }
}
