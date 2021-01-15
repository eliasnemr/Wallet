import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsModalPage } from './contacts-modal.page';

describe('ContactsModalPage', () => {
  let component: ContactsModalPage;
  let fixture: ComponentFixture<ContactsModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
