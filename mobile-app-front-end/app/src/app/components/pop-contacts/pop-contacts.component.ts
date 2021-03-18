import { ContactService, Contact } from 'src/app/service/contacts.service';
import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-pop-contacts',
  templateUrl: './pop-contacts.component.html',
  styleUrls: ['./pop-contacts.component.scss'],
})
export class PopContactsComponent implements OnInit {

  contacts: Contact[] = [];

  constructor(private _contactService: ContactService) { }

  ngOnInit() {
    this._contactService.loadContacts().then((contacts: Contact[]) => {
      this.contacts = contacts;
    });
  }

  exportContacts() {
    const data = JSON.stringify(this.contacts);
    const blob = 
    new Blob([
             data], 
             {type: "text/plain;charset=utf-8"});
      saveAs(blob, "mycontacts.txt");
  }

}
