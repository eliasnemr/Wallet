import { Subscription } from 'rxjs';
import { ToolsService } from './../../service/tools.service';
import { ContactService, Contact } from 'src/app/service/contacts.service';
import { ModalController, IonButton } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as SparkMD5 from 'spark-md5';
import { checkImage } from '../../shared/url.validator';


@Component({
  selector: 'app-contacts-modal',
  templateUrl: './contacts-modal.page.html',
  styleUrls: ['./contacts-modal.page.scss'],
})
export class ContactsModalPage implements OnInit {
  contactForm: FormGroup;
  myContact: Contact;
  av = '';
  $contactSubscription: Subscription;
  @ViewChild('createBtn', {static: false}) createBtn: IonButton;

  // State Items
  status: string;

  constructor(
      public modalCtrl: ModalController,
      public contactService: ContactService,
      private myTools: ToolsService,
      private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.status = 'Create Contact';
    this.contactForm = this.formBuilder.group({
      NAME: ['', [
        Validators.maxLength(255),
        Validators.pattern('[a-zA-Z0-9 .\-\_\']*$'),
      ]],
      ADDRESS: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(60),
        Validators.pattern('[Mx|0x][a-zA-Z0-9]+')
      ]],
      DESCRIPTION: ['', [Validators.maxLength(255)]],
      AVATAR: ['', [
        Validators.maxLength(255),
        Validators.pattern('(http(s?):)([\\/|\\.|\\w|\\s|\\-])*\.(?:jpg|jpeg|png|gif|svg)$'),
        checkImage(),
      ]],
    });
  }

  ionViewWillLeave() {
    if (this.$contactSubscription) {
      this.$contactSubscription.unsubscribe();
    }
  }


  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }

  createIcon(address: string): string {
    return this.av = 'https://www.gravatar.com/avatar/' + SparkMD5.hash(address) + '?d=identicon';
  }
  changeIcon(ev: any) {
    if (ev.target.value === 0) {
      this.av = '';
    } else {
      this.createIcon(ev.target.value);
    }
  }

  async addContact() {
    this.createBtn.disabled = true;
    this.status = 'Creating...';
    const newContact = this.contactForm.value;

    const res: any = await this.contactService.addContact(newContact);
    // console.log(res);
    if (res === true) {
      this.createBtn.disabled = false;
      this.showToast();
      this.modalCtrl.dismiss();
    } else if (res === 'Duplicate') {
      this.status = 'Creation Failed!';
      this.showToastFail(`Duplicate entry in your contact list.`);

      setTimeout(() => {
        this.createBtn.disabled = false;
        this.status = 'Create Contact';
      }, 2000);
    } else if (res !== 'Duplicate' && !res) {
      this.status = 'Creation Failed!';
      this.showToastFail('Something went wrong' +
      ' while adding your contact, please try again.');

      setTimeout(() => {
        this.createBtn.disabled = false;
        this.status = 'Create Contact';
      }, 2000);
    }
  }

  showToast() {
    if (this.contactForm.controls['NAME'].value === '') {
      this.contactForm.controls['NAME'].setValue('Anonymous');
    }
    this.myTools.presentToast(
        `${ this.name.value } was saved to your contacts!`,
        'success', 'bottom');
  }

  showToastFail(msg: string) {
    if (this.contactForm.controls['NAME'].value === '') {
      this.contactForm.controls['NAME'].setValue('Anonymous');
    }
    this.myTools.presentToast(
        msg,
        'danger', 'bottom');
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
