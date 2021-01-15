import { ContactService, Contact } from 'src/app/service/contacts.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as SparkMD5 from 'spark-md5';

@Component({
  selector: 'app-contacts-modal',
  templateUrl: './contacts-modal.page.html',
  styleUrls: ['./contacts-modal.page.scss'],
})
export class ContactsModalPage implements OnInit {

  contactForm: FormGroup;
  myContact: Contact;

  constructor(public modalCtrl: ModalController, public contactService: ContactService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: '',
      address: '',
      description: '',
      avatar: ''
    });
    this.contactForm.valueChanges.subscribe((val: any) => {
      console.log(val);
    });
    
  }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  addContact(address: string, name: string, description: string, avatar: string) {
    this.contactService.addContact(address, name, description, avatar);
  }

}
