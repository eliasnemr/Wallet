import { Token } from './../../models/token.model';
import { Mini } from './../../models/mini.model';
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

  
}
