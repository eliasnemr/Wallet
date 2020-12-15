import { ToastController } from '@ionic/angular';
import * as SparkMD5 from 'spark-md5';
import { Mini } from './../../models/mini.model';
import { Token } from './../../models/token.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss'],
})
export class GridViewComponent implements OnInit {

  @Input() tokenArr: Mini[] | Token[] = [];
  public avatar: string;

  constructor(private toastController: ToastController) {
    console.log("Grid view component!");
  }

  ngOnInit() {}

  createIcon(tokenid: string) {
    
    return this.avatar = 'https://www.gravatar.com/avatar/' + SparkMD5.hash(tokenid) + '?d=identicon';
  
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
