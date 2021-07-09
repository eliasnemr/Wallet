import { ToolsService } from './../../service/tools.service';
import { UploadFileModalComponent } from './../upload-file-modal/upload-file-modal.component';
import { ModalController, ToastController } from '@ionic/angular';
import { ContactService, Contact } from 'src/app/service/contacts.service';
import { Component, OnInit } from '@angular/core';
import { duration } from 'moment';


@Component({
  selector: 'app-pop-contacts',
  templateUrl: './pop-contacts.component.html',
  styleUrls: ['./pop-contacts.component.scss'],
})
export class PopContactsComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private _contactService: ContactService,
     private modalCtrl: ModalController,
     private tools: ToolsService) { }

  ngOnInit() {
    this._contactService.loadContacts().then((contacts: Contact[]) => {
      this.contacts = contacts;
    });
  }

  exportContacts() {
    const data = JSON.stringify(this.contacts);
    this.tools.copy(data);
  }

  async presentUploadFileModal() {
    const modal = await this.modalCtrl.create({
      component: UploadFileModalComponent,
      cssClass: 'upload-file-modal',
    });

    await modal.present();
  }
}
