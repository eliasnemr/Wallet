import { Contact, ContactService } from 'src/app/service/contacts.service';
import { ModalController, IonInput, AlertController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-upload-file-modal',
  templateUrl: './upload-file-modal.component.html',
  styleUrls: ['./upload-file-modal.component.scss'],
})
export class UploadFileModalComponent implements OnInit {
  contacts: Contact[] = [];
  status = '';

  @ViewChild('importContactsInput', {static: false})
   importContactsInput: IonInput;

  constructor(
    private modalCtrl: ModalController,
    private alertController: AlertController,
    private contactService: ContactService) { }

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  importContacts() {
    let ct: any = this.importContactsInput.value;
    try {
      ct = JSON.parse(ct);
      if (ct.length > 0) {
        this.contacts = ct;
        return;
      }
    } catch (err) {
      this.status = 'Invalid data';
      setTimeout(() => {
        this.status = '';
      }, 7000);
      console.log(err);
    }
  }

  saveContacts(contacts: Contact[]) {
    console.log(contacts);

    this.contactService.deleteContacts();

    contacts.forEach((contact) => {
      this.contactService.addContact(contact);
    });

    this.contactService.data.next(contacts);

    this.modalCtrl.dismiss();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'alert',
      header: 'Save Contacts',
      message: '<strong>Note:</strong> you are about to overwrite ' +
                'any previous contacts you have.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Save',
          handler: () => {
            this.saveContacts(this.contacts);
          },
        },
      ],
    });

    await alert.present();
  }
}
