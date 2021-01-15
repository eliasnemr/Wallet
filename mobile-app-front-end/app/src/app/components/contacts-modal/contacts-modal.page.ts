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
      name: ['', [Validators.maxLength(255)]],
      address: ['', [Validators.required, Validators.maxLength(255)]],
      description: ['', [Validators.maxLength(255)]],
      avatar: ['', [Validators.maxLength(255)]]
    });
  }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  async addContact() {
    this.loading = true;

    const newContact = this.contactForm.value;

    this.contactService.addContact(newContact);

    this.contactService.data.subscribe((val: Contact[]) => {
      this.success = true;
      this.showToast();
      // clear form
      // dismiss form
      this.loading = false;
    });

    this.loading = false;
  }

  async showToast() {
    if(this.contactForm.controls['name'].value === '') { this.contactForm.controls['name'].setValue('Anonymous'); }
    const toast = await this.toastCtrl.create({
      header: `Added A New Contact!`,
      message: `${ this.name.value } was saved to your contacts!`,
      position: `middle`,
      buttons: [{
        text: `Dismiss`,
        role: `Cancel`
      }]
    });
    toast.present();
  }

  get name() {
    return this.contactForm.get('name');
  }
  get address() {
    return this.contactForm.get('address');
  }
  get description() {
    return this.contactForm.get('description');
  }
  get avatar() {
    return this.contactForm.get('avatar');
  }

}
