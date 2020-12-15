import { Token } from './../../models/token.model';
import { Mini } from './../../models/mini.model';
import * as SparkMD5 from 'spark-md5';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnInit {

  @Input() tokenArr: Mini[] | Token[] = [];
  public avatar: string;

  constructor() { }

  ngOnInit() {}

  createIcon(tokenid: string) {
    
    return this.avatar = 'https://www.gravatar.com/avatar/' + SparkMD5.hash(tokenid) + '?d=identicon';
  
  }

  
}
