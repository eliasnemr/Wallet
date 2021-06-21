import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToolsService } from './../../service/tools.service';
import { ContactService } from 'src/app/service/contacts.service';
import { ModalController, NavParams, IonButton } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as SparkMD5 from 'spark-md5';
import { checkImage } from 'src/app/shared/url.validator';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss'],
})
export class ContactDetailComponent implements OnInit {
  @ViewChild('cancelBtn', {static: false}) cancelBtn: IonButton;
  @ViewChild('updateBtn', {static: false}) updateBtn: IonButton;
  contactName: string;
  contactAddress: string;
  contactDescription: string;
  contactAvatar: string;
  newDescription: string;
  status: string;
  statusAvatar: string;
  edit: boolean;
  editAvatar: boolean;

  editAvatarForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public modalController: ModalController,
    public navParams: NavParams,
    private contactService: ContactService,
    private myTools: ToolsService) {
    this.edit = false;
    this.editAvatar = false;
    this.newDescription = '';
    this.status = 'Update';
    this.statusAvatar = 'Update';
  }
  ngOnInit() {
    this.contactName = this.navParams.get('name');
    this.contactAddress = this.navParams.get('address');
    this.contactDescription = this.navParams.get('description');
    this.contactAvatar = this.navParams.get('avatar');
    this.initForm();
  }

  initForm() {
    this.editAvatarForm = this.formBuilder.group({
      url: [
        '', [
          Validators.maxLength(255),
          Validators.pattern(
              '(http(s?):)([\\/|\\.|\\w|\\s|\\-])*\.(?:jpg|jpeg|png|gif|svg)$'),
          checkImage(),
        ]],
    });
  }

  get url() {
    return this.editAvatarForm.get('url');
  }

  async updateDetails(address: string) {
    this.updateBtn.disabled = true;
    this.cancelBtn.disabled = true;
    this.status = 'Updating...';
    const description = this.contactDescription.replace(/'/g, '');

    const res: any =
    await this.contactService.updateDescription(description, address);
    // console.log(res);
    if (res) {
      this.updateBtn.disabled = false;
      this.cancelBtn.disabled = false;
      this.status = 'Update';
      this.presentToast('Update successful!', 'success');
      this.edit = false;
    } else {
      this.updateBtn.disabled = false;
      this.cancelBtn.disabled = false;
      this.status = 'Update';
      this.presentToast(
          'Failed to update description.  Please try again.',
          'danger');
    }
  }

  async updateAvatar(address: string, modal: ModalController) {
    this.updateBtn.disabled = true;
    this.cancelBtn.disabled = true;
    this.statusAvatar = 'Updating...';
    const url = this.editAvatarForm.get('url').value;

    const res: any =
    await this.contactService.updateAvatar(url, address, modal);
    // console.log(res);
    if (res) {
      this.updateBtn.disabled = false;
      this.cancelBtn.disabled = false;
      this.statusAvatar = 'Update';
      this.presentToast('Update successful!', 'success');
      this.editAvatar = false;
    } else {
      this.updateBtn.disabled = false;
      this.cancelBtn.disabled = false;
      this.statusAvatar = 'Update';
      this.presentToast(
          'Failed to update avatar.  Please try again.',
          'danger');
    }
  }

  async presentToast(msg: string, clr?: string) {
    await this.myTools
        .presentToast(msg,
            clr,
            'bottom');
  }

  createIcon(tokenid: string) {
    return this.contactAvatar = 'https://www.gravatar.com/avatar/' + SparkMD5.hash(tokenid) + '?d=identicon';
  }
}
