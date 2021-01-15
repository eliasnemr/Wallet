import { ContactService, Contact } from 'src/app/service/contacts.service';
import { ModalController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as SparkMD5 from 'spark-md5';

@Component({
  selector: 'app-contacts-modal',
  templateUrl: './contacts-modal.page.html',
  styleUrls: ['./contacts-modal.page.scss'],
})
export class ContactsModalPage implements OnInit {

  contactForm: FormGroup;
  myContact: Contact;

  // State Items
  loading = false;
  success = false;

  constructor(
      public modalCtrl: ModalController,
      public contactService: ContactService,
      private formBuilder: FormBuilder,
      public toastCtrl: ToastController) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      NAME: ['', [Validators.maxLength(255)]],
      ADDRESS: ['', [Validators.required, Validators.maxLength(255)]],
      DESCRIPTION: ['', [Validators.maxLength(255)]],
      AVATAR: ['', [Validators.maxLength(255)]]
    });
  }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  addContact() {
    this.loading = true;

    const newContact = this.contactForm.value;

    this.contactService.addContact(newContact);

    this.contactService.data.subscribe((val: Contact[]) => {
      if (val.length > 0) {
        this.success = true;
        this.showToast();
        this.modalCtrl.dismiss();
        this.loading = false;
      }
    });
    this.loading = false;
  }

  async showToast() {
    if(this.contactForm.controls['NAME'].value === '') { this.contactForm.controls['NAME'].setValue('Anonymous'); }
    const toast = await this.toastCtrl.create({
      header: `Added A New Contact!`,
      message: `${ this.name.value } was saved to your contacts!`,
      position: `middle`,
      duration: 1000,
      buttons: [{
        text: `Dismiss`,
        role: `Cancel`
      }]
    });
    toast.present();
  }

  get name() {
    return this.contactForm.get('NAME');
  }
  get address() {
    return this.contactForm.get('ADDRESS');
  }
  get description() {
    return this.contactForm.get('DESCRIPTION');
  }
  get avatar() {
    return this.contactForm.get('AVATAR');
  }

}
