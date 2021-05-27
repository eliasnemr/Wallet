import { Subject, ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { Minima } from 'minima';
import { Injectable } from '@angular/core';
import * as SparkMD5 from 'spark-md5';

export interface Contact {
  ADDRESS: string;
  NAME?: string;
  DESCRIPTION?: string;
  AVATAR?: string;
}
export interface SelectedAddress {
  address: string
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  public selectedAddress: Subject<SelectedAddress>;
  public data: Subject<Contact[]>;
  qContacts: string;
  constructor() { 
    this.data = new ReplaySubject<Contact[]>(1);
    this.selectedAddress = new ReplaySubject<SelectedAddress>(1);
    this.initSQL();
  }

  initSQL() {
    this.qContacts = 'CREATE TABLE IF NOT EXISTS contacts (' +
                'address varchar(255) PRIMARY KEY,' +
                'name varchar(255),' +
                'description varchar(255),' +
                'avatar varchar(255))';

    Minima.sql(this.qContacts + ';SELECT * FROM contacts ORDER BY NAME',
        (res: any) => {
        // console.log(res);
          if (Minima.util.checkAllResponses(res)) {
            this.data.next(res.response[1].rows);
          }
        });
  }


  createIcon(address: string): string {
    return 'https://www.gravatar.com/avatar/' + SparkMD5.hash(address) + '?d=identicon';
  }

  loadContacts() {
    return this.data.pipe(take(1))
        .toPromise();
  }

  addContact(newContact: Contact) {
    if (newContact.AVATAR.length === 0) {
      newContact.AVATAR = this.createIcon(newContact.ADDRESS);
    }

    if (newContact.NAME.length === 0) {
      newContact.NAME = 'Anonymous';
      this.qContacts = "INSERT INTO contacts VALUES(" +
      "'" + newContact.ADDRESS + "'," +
      "'" + newContact.NAME + "'," +
      "'" + newContact.DESCRIPTION + "'," +
      "'" + newContact.AVATAR + "')";
    } else {
      this.qContacts = "INSERT INTO contacts VALUES(" +
      "'" + newContact.ADDRESS + "'," +
      "'" + newContact.NAME.replace("'", "''") + "'," +
      "'" + newContact.DESCRIPTION + "'," +
      "'" + newContact.AVATAR + "')";
    }

    Minima.sql(this.qContacts + ';SELECT * FROM CONTACTS ORDER BY NAME',
        (res: any) => {
        // console.log(res);
          if (res.status && res.response[0].status) {
            this.data.next(res.response[1].rows ? res.response[1].rows : []);
          }
        });
  }

  deleteContacts() {
    Minima.sql('DELETE FROM CONTACTS', (res: any) => {
      if (res.status) {
        this.data.next(res.response.rows);
      }
    });
  }

  removeContact(address: string) {
    Minima.sql('DELETE FROM CONTACTS WHERE ADDRESS=\''+address+'\';SELECT * FROM CONTACTS',
        (res: any) => {
          if (Minima.util.checkAllResponses(res)) {
            // update data observable
            this.data.next(res.response[1].rows ? res.response[1].rows : []);
          }
        });
  }
}
