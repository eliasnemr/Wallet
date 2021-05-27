import { Subscription } from 'rxjs';
import { ToolsService } from './../../service/tools.service';
import { IonList, ModalController } from '@ionic/angular';
import { ContactService } from 'src/app/service/contacts.service';
import { Contact } from './../../service/contacts.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contacts-view-modal',
  templateUrl: './contacts-view-modal.component.html',
  styleUrls: ['./contacts-view-modal.component.scss'],
})
export class ContactsViewModalComponent implements OnInit {
  @ViewChild('contactList', {static: false}) ContactList: IonList;
  contacts: Contact[];
  $contactSubscription: Subscription;


  constructor(
    private _contactService: ContactService,
    public modalController: ModalController,
    private myTools: ToolsService) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this._contactService.data.subscribe((res: Contact[]) => {
      // set the list
      this.contacts = res;
    });
  }

  ionViewWillLeave() {
    if (this.$contactSubscription) {
      this.$contactSubscription.unsubscribe();
    }
  }

  queryContacts(qy: string) {
    qy = qy.toUpperCase();
    if (qy.length > 0) {
      this.contacts = this.contacts.filter( ele => {
        return ele.NAME.toUpperCase().includes(qy) ||
        ele.ADDRESS.toUpperCase().includes(qy);
      });
    } else {
      this._contactService.data.subscribe((res: any) => {
        this.contacts = res;
      });
    }
  }

  copyAddress(addr: string) {
    this.myTools.copy(addr);
  }

  selectAddress(addr: string) {
    this._contactService.selectedAddress.next({address: addr});
    this.modalController.dismiss();
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
