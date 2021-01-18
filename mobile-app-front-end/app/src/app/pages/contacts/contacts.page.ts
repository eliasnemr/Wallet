import { ContactsModalPage } from './../../components/contacts-modal/contacts-modal.page';
import { ToastController, ModalController, AlertController, IonList } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
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
  filteredContacts: Contact[];
  @ViewChild('contactList', {static:false}) ContactList: IonList;
  constructor(private toastController: ToastController,
              public alertController: AlertController,
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
    } else {
      this.contactService.data.subscribe((res:any) => {
        this.contacts = res;
      });
    }
  }
  toggleDeleteMode() {
    if(this.editMode){
      this.editMode = false;
    } else {
      this.editMode = true;
    }
  }
  removeContact(addr: string) {
    this.presentAlert(addr);
  }

  async presentAlert(addr: string) {
    const alert = await this.alertController.create({
      header: 'Delete Contact',
      subHeader: 'Once this contact is deleted, you can\'t revert!',
      message: 'Are you sure?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Ok',
          handler: () => {
            this.contactService.removeContact(addr);
          }
        }]
    });
    await alert.present();
  }
  async presentToast(msg: string, color: string, posn: "top" | "bottom" | "middle") {
    const toast = await this.toastController.create({
      message: msg,
      color: color,
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

  async presentAddContactForm() {
    const modal = await this.modalController.create({
      component: ContactsModalPage,
      cssClass: 'contactsModal'
    });
    return await modal.present();
  }
}
