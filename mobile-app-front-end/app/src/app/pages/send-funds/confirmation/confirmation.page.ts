import { ContactService, Contact } from 'src/app/service/contacts.service';
import { ToolsService } from './../../../service/tools.service';
import { Router } from '@angular/router';
import { SendFormObj } from './../send-funds.page';
import { Subscription } from 'rxjs';
import { MinimaApiService } from './../../../service/minima-api.service';
import { MenuController, IonButton } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Token } from 'minima';
import * as SparkMD5 from 'spark-md5';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {
  public $subscription: Subscription;
  public $contacts: Subscription;
  public $balance: Subscription;
  public data: SendFormObj;
  public tokenName: string;
  public tokenIcon: string;
  public availableBalance: string;
  public avatar: string;
  public status: string;
  public recipientName: string;
  @ViewChild('confirmBtn', {static: false}) confirmBtn: IonButton;
  constructor(
    public menu: MenuController,
    private minimaApiService: MinimaApiService,
    private contactService: ContactService,
    private router: Router,
    private myTools: ToolsService) {
    this.tokenIcon = '';
    this.tokenName = '';
    this.recipientName = '';
    this.status = 'Confirm';
  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.$subscription =
    this.minimaApiService.$urlData.subscribe((data: SendFormObj) => {
      this.data = data;
      this.$contacts =
      this.contactService.data.subscribe((contacts: Contact[]) => {
        // console.log(contacts);
        contacts.forEach((contact: Contact) => {
          if (contact.ADDRESS === this.data.address) {
            this.recipientName = contact.NAME;
          }
        });
      });
      // console.log(this.data);
      this.$balance =
      this.minimaApiService.$balance.subscribe((balance: Token[]) => {
        balance.forEach((token: Token) => {
          if (token.tokenid === this.data.tokenid) {
            // console.log(token);
            this.tokenName = token.token;
            if (token.tokenid !== '0x00' && token.icon.length > 0) {
              this.tokenIcon = token.icon;
            }
          }
        });
      });
    });
  }

  ionViewWillLeave() {
    if (this.$subscription && this.$contacts && this.$balance) {
      this.$subscription.unsubscribe();
      this.$contacts.unsubscribe();
      this.$balance.unsubscribe();
    }
  }

  createIcon(tokenid: string) {
    return this.avatar = 'https://www.gravatar.com/avatar/' + SparkMD5.hash(tokenid) + '?d=identicon';
  }

  sendFunds(data) {
    this.status = '';
    const dt: SendFormObj = data;
    // console.log(data);
    try {
      this.post(dt);
    } catch (err) {
      console.log(err);
    }
  }
  /**  */
  async post(data: any) {
    this.confirmBtn.disabled = true;
    if (data.message !== null && ( data.message || data.message.length > 0) ) {
      const res: any =
      await this.minimaApiService.sendMessageTransaction(data);
      // console.log(res);
      if (res.status) {
        this.myTools.presentAlert(
            'Transaction Status',
            'Transaction has been posted to the network!',
            'Successful');
        this.router.navigate(['/send-funds']);
        this.status = 'Posted!';
      } else {
        setTimeout(() => {
          this.confirmBtn.disabled = false;
          this.status = 'Confirm';
        }, 500);
        this.myTools.presentAlert('Transaction Status', res.message, 'Failed');
      }
    } else {
      const res: any = await this.minimaApiService.sendFunds(data);
      if (res.status) {
        this.myTools.presentAlert(
            'Transaction Status',
            'Transaction has been posted to the network!',
            'Successful');
        this.router.navigate(['/send-funds']);
        this.status = 'Posted!';
      } else {
        setTimeout(() => {
          this.confirmBtn.disabled = false;
          this.status = 'Confirm';
        }, 500);
        this.myTools.presentAlert('Transaction Status', res.message, 'Failed');
      }
    }
  }
}
