import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.component.html',
  styleUrls: ['./pop-over.component.scss'],
})
export class PopOverComponent implements OnInit {
  @Input("tokenName") tokenName;
  @Input("tokenId") tokenId;

  
  public refTokenId: any;
  public tokenNameVar: any;
  public tokenIdVar: any;

  constructor() {

  }

  ngOnInit() {
    this.refTokenId = this.tokenId;
  }

  ionViewWillEnter() {

  }

  

}
