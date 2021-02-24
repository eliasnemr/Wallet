import { ToastController, IonList, ModalController } from '@ionic/angular';
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

  constructor(
      private _contactService: ContactService,
      public toastController: ToastController,
      public modalController: ModalController) { }

  ngOnInit() {
    this._contactService.data.subscribe((res: Contact[]) => {
      // set the list
      this.contacts = res;
    });
  }

  queryContacts(qy: string) {
    qy = qy.toUpperCase();
    if (qy.length > 0) {
      this.contacts = this.contacts.filter( ele => {
        return ele.NAME.toUpperCase().includes(qy) || ele.ADDRESS.toUpperCase().includes(qy);
      });
    } else {
      this._contactService.data.subscribe((res: any) => {
        this.contacts = res;
      });
    }
  }

  async presentToast(msg: string, clr: string, posn: "top" | "bottom" | "middle") {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1000,
      color: clr,
      position: posn,
      buttons: ['cancel']
    });
    await toast.present();
  }
  copyAddress(addr: string) {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', addr);
      this.presentToast('Copied To Clipboard', 'primary', 'bottom');
      this.ContactList.closeSlidingItems();
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }

  selectAddress(addr: string) {
    this._contactService.$selected_address.next({address: addr});
    this.modalController.dismiss();
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
