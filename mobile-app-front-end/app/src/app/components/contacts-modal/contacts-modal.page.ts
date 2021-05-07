import { Subscription } from 'rxjs';
import { ToolsService } from './../../service/tools.service';
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
  av = '';
  $contactSubscription: Subscription;

  // State Items
  loading = false;
  success = false;

  constructor(
      public modalCtrl: ModalController,
      public contactService: ContactService,
      private myTools: ToolsService,
      private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      NAME: ['', [
          Validators.maxLength(255),
          Validators.pattern('[a-zA-Z0-9 .\-\_\']*$'),
        ]
        ],
      ADDRESS: ['', [
             Validators.required,
             Validators.minLength(2),
             Validators.maxLength(60),
             Validators.pattern('[Mx|0x][a-zA-Z0-9]+')
            ]
        ],
      DESCRIPTION: ['', [Validators.maxLength(255)]],
      AVATAR: ['', [
            Validators.maxLength(255),
            Validators.pattern('(http(s?):)([\\/|\\.|\\w|\\s|\\-])*\.(?:jpg|png|gif|svg)$'),
           ]
      ]
    });
  }

  ionViewWillLeave() {

    if (this.$contactSubscription) {

      this.$contactSubscription.unsubscribe();

    }

  }


  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  createIcon(address: string): string {
    return this.av = 'https://www.gravatar.com/avatar/' + SparkMD5.hash(address) + '?d=identicon';
  }
  changeIcon(ev: any) {
    if(ev.target.value === 0) {
      this.av = '';
    } else {
      this.createIcon(ev.target.value);
    }
  }

  addContact() {
    this.loading = true;

    const newContact = this.contactForm.value;

    this.contactService.addContact(newContact);

    this.$contactSubscription = this.contactService.data.subscribe((val: Contact[]) => {
      if (val.length > 0) {
        this.success = true;
        this.showToast();
        this.modalCtrl.dismiss();
        this.loading = false;
      }
    });
    this.loading = false;
  }

  showToast() {
    if (this.contactForm.controls['NAME'].value === '') { 
      this.contactForm.controls['NAME'].setValue('Anonymous');
    }
    this.myTools.presentToast(`${ this.name.value } was saved to your contacts!`, 'primary', 'bottom');
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
