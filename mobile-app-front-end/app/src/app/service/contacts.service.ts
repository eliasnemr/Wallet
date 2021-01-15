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

  data: Subject<Contact[]> = new ReplaySubject<Contact[]>();
  qContacts: string;
  constructor() {
    this.qContacts = 'CREATE TABLE IF NOT EXISTS contacts (' +
                'address varchar(255) PRIMARY KEY,' +
                'name varchar(255),' +
                'description varchar(255),' +
                'avatar varchar(255))';

    Minima.sql(this.qContacts + ';SELECT * FROM contacts', (res: any) => {
      if (Minima.util.checkAllResponses(res)) {
        console.log(res);
      }
    });

  }

  loadContacts() {
    this.qContacts = 'SELECT * FROM contact';
    Minima.sql(this.qContacts, (res: any) => {
      if (res.status) {
        console.log(res);
      }
    });
  }

  addContact(address: string, name: string, description: string, avatar: string) {
    if (name.length === 0) {
      name = 'Anonymous';
      this.qContacts = 'INSERT INTO contacts VALUES(' +
                     '"' + address + '",' +
                     '"' + name + '",' +
                     '"' + description + '",' +
                     '"' + avatar + '")';
    } else {
      this.qContacts = 'INSERT INTO contacts VALUES(' +
      '"' + address + '",' +
      '"' + name + '",' +
      '"' + description + '",' +
      '"' + avatar + '")';
    }

    Minima.sql(this.qContacts, (res: any) => {
      if (res.status) {
        console.log('Added new contact to SQL');
      }
    });
  }

  removeContact(address: string) {
    
  }
}