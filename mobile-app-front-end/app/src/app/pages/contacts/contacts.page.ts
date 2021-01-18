import { ContactsModalPage } from './../../components/contacts-modal/contacts-modal.page';
import { ToastController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Contact, ContactService } from 'src/app/service/contacts.service';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  editMode = false;
  avatar: string;
  contacts: Contact[];
  filteredContacts: Contact[];
  constructor(private toastController: ToastController,
              private contactService: ContactService,
              public modalController: ModalController) { }

  ngOnInit() {
    this.contactService.data.subscribe((res: Contact[]) => {
      // set the list
      this.contacts = res;
    });
  }

  queryContacts(qy: string) {
    qy = qy.toUpperCase();
    if(qy.length > 0){
      this.contacts = this.contacts.filter( ele => {
        return ele.NAME.toUpperCase().includes(qy) || ele.ADDRESS.toUpperCase().includes(qy);
      });
      console.log(this.filteredContacts);
    } else {
      this.contactService.data.subscribe((res:any) => {
        this.contacts = res;
      });
    }
    
  }

  async presentAddContactForm() {
    const modal = await this.modalController.create({
      component: ContactsModalPage,
      cssClass: 'contactsModal'
    });
    return await modal.present();
  }
}
