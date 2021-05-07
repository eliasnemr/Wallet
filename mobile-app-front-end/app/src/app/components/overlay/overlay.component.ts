import { environment } from './../../../environments/environment.prod';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class OverlayComponent implements OnInit {

  environment: any;

  @Input() $disclaimer: boolean;

  constructor() {
    this.environment = environment;
  }

  ngOnInit() {}

  pageReload() {
    location.reload();
  }

}
