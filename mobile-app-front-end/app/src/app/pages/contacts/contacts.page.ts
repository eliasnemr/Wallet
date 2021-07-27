import { ContactDetailComponent }
  from './../../components/contact-detail/contact-detail.component';
import { Subscription } from 'rxjs';
import { ToolsService } from './../../service/tools.service';
import {
  PopContactsComponent,
} from './../../components/pop-contacts/pop-contacts.component';
import { MinimaApiService } from './../../service/minima-api.service';
import {
  ContactsModalPage,
} from './../../components/contacts-modal/contacts-modal.page';
import {
  AlertController,
  ModalController,
  IonList,
  MenuController,
  PopoverController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as SparkMD5 from 'spark-md5';
import { Contact, ContactService } from 'src/app/service/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  editMode: boolean;
  avatar: string;
  contacts: Contact[] = [];
  filteredContacts: Contact[];
  $contactSubscription: Subscription;
  copyStatus: string;

  @ViewChild('contactList', {static: false}) ContactList: IonList;
  constructor(
    public menu: MenuController,
    public modalController: ModalController,
    public popoverController: PopoverController,
    public alertController: AlertController,
    private contactService: ContactService,
    private api: MinimaApiService,
    public myTools: ToolsService) {
    this.copyStatus = 'Copy';
    this.editMode = false;
  }

  ngOnInit() { }

  ionViewWillEnter() {
    this.$contactSubscription =
      this.contactService.data.subscribe((res: Contact[]) => {
        this.contacts = res;
      });
  }

  ionViewWillLeave() {
    if (this.$contactSubscription) {
      this.$contactSubscription.unsubscribe();
    }
  }

  async presentContactSettings(ev: any) {
    const popover = await this.popoverController.create({
      component: PopContactsComponent,
      translucent: true,
      event: ev,
    });

    await popover.present();
  }

  openMenu() {
    this.menu.open();
  }

  queryContacts(qy: string) {
    qy = qy.toUpperCase();
    this.contactService.loadContacts().then((cts: Contact[]) => {
      this.contacts = cts;

      this.contacts = this.contacts.filter( (ele: Contact) => {
        return ele.NAME.toUpperCase().includes(qy) ||
        ele.ADDRESS.toUpperCase().includes(qy);
      });
    });
  }

  async presentAlert(addr: string) {
    const alert = await this.alertController.create({
      header: 'Delete Contact',
      cssClass: 'alert',
      subHeader: 'Once this contact is deleted, you can\'t revert!',
      message: 'Are you sure?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Ok',
          handler: () => {
            this.contactService.removeContact(addr);
          },
        }],
    });
    await alert.present();
  }

  async presentAddContactForm() {
    const modal = await this.modalController.create({
      component: ContactsModalPage,
      cssClass: 'contactsModal',
    });
    return await modal.present();
  }

  async presentContactDetail(contact: Contact) {
    const modal = await this.modalController.create({
      component: ContactDetailComponent,
      componentProps: {
        name: contact.NAME,
        address: contact.ADDRESS,
        description: contact.DESCRIPTION,
        avatar: contact.AVATAR,
      },
      cssClass: 'contactDetailModal',
    });
    return await modal.present();
  }

  copy(data: any) {
    this.copyStatus = 'Copied!';
    this.myTools.copy(data);
    this.myTools.presentToast('Copied to clipboard.', 'primary', 'bottom');
    setTimeout(() => {
      this.copyStatus = 'Copy';
    }, 2000);
  }
  createIcon(tokenid: string) {
    return 'https://www.gravatar.com/avatar/' + SparkMD5.hash(tokenid) + '?d=identicon';
  }
}
