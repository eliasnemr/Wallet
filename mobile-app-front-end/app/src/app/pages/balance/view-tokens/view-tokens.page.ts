import { ToolsService } from './../../../service/tools.service';
import { BalanceService } from './../../../service/balance.service';
import { MinimaApiService } from './../../../service/minima-api.service';
import { Token, Minima } from 'minima';
import * as SparkMD5 from 'spark-md5';
import { ActivatedRoute } from '@angular/router';
import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-view-tokens',
  templateUrl: './view-tokens.page.html',
  styleUrls: ['./view-tokens.page.scss'],
})
export class ViewTokensPage implements OnInit {

  public urlID = '';
  public token: Token;
  public tokenArr: Token[];
  public type = '';
  public avatar: string;

  constructor(
    public route: ActivatedRoute, 
    public api: MinimaApiService,
    public balanceService: BalanceService,
    private myTools: ToolsService
  ) {
    
  }

  ngOnInit() {
    this.balanceService.data.subscribe((res) => {
      this.tokenArr = res;
      this.urlID = this.route.snapshot.paramMap.get('id');

      this.tokenArr.forEach((tkn: any) => {
        if (tkn.tokenid === this.urlID) {
          this.token = tkn;
          if (this.token.tokenid === '0x00') {
            this.token.description = 'Minima\'s Official Token.';
          } else {
            this.token.description = tkn.description;
          }
          if(tkn.token.tokenid !== '0x00' && tkn.token.icon) {
            this.token.icon = 'assets/minimaBox.svg';
          } else if(tkn.token.tokenid === '0x00') {
            this.token.icon = 'assets/minimaBox.svg';
          } else {
            this.token.icon = tkn.icon;
          }
          if(this.token.script === 'RETURN TRUE') {
            this.type = 'Value Transfer';
          } else {
            this.type = 'Non Fungible Token';
          }
        }
      });
    });
   }

  validateProof(tokenid: string) {
    this.api.validateTokenID(tokenid).then((res: any)=>{
       if(res.response.valid === true){
         this.myTools.presentToast('This proof is valid.', 'success', 'bottom');
       } else {
        this.myTools.presentToast('Proof mismatch - not a valid proof', 'danger', 'bottom');
       }
    });
  }

  createIcon(tokenid: string) {

    return this.avatar = 'https://www.gravatar.com/avatar/' + SparkMD5.hash(tokenid) + '?d=identicon';
 
  }

  copyToClipPWA(text: string) {
    this.myTools.copy(text);
  }


  giveMe50() {
    this.api.giveMe50().then((res: any) => {
      if(res.status === true) {
        this.myTools.presentAlert('Gimme50', 'Successful', 'Status');
      } else {
        this.myTools.presentAlert('Gimme50', res.message, 'Status');
      }
    });
  }

}
