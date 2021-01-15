import { Subject, ReplaySubject } from 'rxjs';
import { Minima } from 'minima';
import { Injectable } from '@angular/core';

export interface Contact {
  address: string;
  name?: string;
  description?: string;
  avatar?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  data: Subject<Contact[]> = new ReplaySubject<Contact[]>(1);
  qContacts: string;
  constructor() {
    this.qContacts = 'CREATE TABLE IF NOT EXISTS contacts (' +
                'address varchar(255) PRIMARY KEY,' +
                'name varchar(255),' +
                'description varchar(255),' +
                'avatar varchar(255))';

    Minima.sql(this.qContacts + ';SELECT * FROM contacts', (res: any) => {
      if (Minima.util.checkAllResponses(res)) {
        this.data.next(res.response[1].rows);
        // this.data.subscribe((val: any) => {
        //   console.log(val);
        // });
      }
    });

  }

  loadContacts(): Contact[] {
    this.data.subscribe((val: any) => {
      return val;
    });
    return null;
  }

   addContact(newContact: Contact) {
    if (newContact.name.length === 0) {
      newContact.name = 'Anonymous';
      this.qContacts = "INSERT INTO contacts VALUES(" +
      "'" + newContact.address + "'," +
      "'" + newContact.name + "'," +
      "'" + newContact.description + "'," +
      "'" + newContact.avatar + "')";
    } else {
      this.qContacts = "INSERT INTO contacts VALUES(" +
      "'" + newContact.address + "'," +
      "'" + newContact.name + "'," +
      "'" + newContact.description + "'," +
      "'" + newContact.avatar + "')";
    }

    Minima.sql(this.qContacts+';SELECT * FROM CONTACTS', (res: any) => {
      if (res.status && res.response[0].status) {
        this.data.next(res.response[1].rows);
      }
    });
  }

  removeContact(address: string) {
    
  }
}