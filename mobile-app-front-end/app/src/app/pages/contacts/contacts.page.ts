import { ContactsModalPage } from './../../components/contacts-modal/contacts-modal.page';
import { ToastController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import * as SparkMD5 from 'spark-md5';
import { Contact, ContactService } from 'src/app/service/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  editMode = false;
  avatar: string;
  contacts: Contact[];
  constructor(private toastController: ToastController,
              private contactService: ContactService,
              public modalController: ModalController) { }

  ngOnInit() {
    this.contactService.data.subscribe((res: Contact[]) => {
      // set the list

      console.log(res);
      this.contacts = res;
    });
  }

  async presentAddContactForm() {
    const modal = await this.modalController.create({
      component: ContactsModalPage,
      cssClass: 'contactsModal'
    });
    return await modal.present();
  }
}
