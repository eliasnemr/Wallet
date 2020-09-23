import { ToastController } from '@ionic/angular';
import { MinimaApiService } from './../../../service/minima-api.service';
import { Tokens } from './../../../models/tokens.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

declare var Minima: any;
@Component({
  selector: 'app-view-tokens',
  templateUrl: './view-tokens.page.html',
  styleUrls: ['./view-tokens.page.scss'],
})
export class ViewTokensPage implements OnInit {

  public tokenid: string;
  public token: string;
  public coinid: string;
  public total: string;
  public totalamount: string;
  public confirmed: string;
  public unconfirmed: string;
  public sendable: string;
  public mempool: string;
  public description: string;
  public icon: string;
  public proof: string;
  public scale: string;
  public script: string;

  constructor(public route: ActivatedRoute, public api: MinimaApiService, public toastController: ToastController) 
  { this.tokenid = this.route.snapshot.paramMap.get("id"); }

  ngOnInit() {
    Minima.cmd('balance', (res: any) => {
      res.response.balance.forEach((tkn: any) => {

        if(tkn.tokenid == this.tokenid) {

          this.tokenid = tkn.tokenid;
          this.token = tkn.token;
          this.coinid = tkn.coinid;
          this.total = tkn.total; // Token total
          this.totalamount = tkn.totalamount; // Minima total
          this.confirmed = tkn.confirmed;
          this.unconfirmed = tkn.unconfirmed;
          this.sendable = tkn.sendable;
          this.mempool = tkn.mempool;
          if(this.tokenid == "0x00") {
            this.description = "Minima's Official Token."
          } else {
            this.description = tkn.description;
          }
          if(tkn.tokenid!="0x00" && tkn.icon.length == 0) {
            this.icon = "assets/icon/icon.png";
          } else if(tkn.tokenid == "0x00") {
            this.icon = "assets/icon/icon.png";
          } else {
            this.icon = tkn.icon;
          }
          this.proof = tkn.proof;
          this.scale = tkn.scale;
          this.script = tkn.script;
          if(this.script === "RETURN TRUE") {
            this.script = "Normal";
          } else {
            this.script = "Non-Fungible Token";
          }
          
        }

      });
    });
  }

  validateProof(tokenid: string) {
    this.api.validateTokenID(tokenid).then((res: any)=>{
       if(res.response.valid === true){
         this.presentToast("This proof is valid.", "success");
       } else {
        this.presentToast("Proof Mismatch - Proof is invalid.", "danger");
       }
    });
  }

  //Alerts
  async presentToast(msg: string, type: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 4000,
      buttons: [{
        text: 'Close',
        role: 'cancel'
      }],
      color: type,
      keyboardClose: true,
      translucent: true,
      position:  'top'
    });
    toast.present();
  }

  copyToClipPWA(text: string) {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', text);
      this.presentToast("Copied to Clipboard", "success");
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }

}
