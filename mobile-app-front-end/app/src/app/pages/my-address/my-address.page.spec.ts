import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAddressPage } from './my-address.page';

describe('MyAddressPage', () => {
  let component: MyAddressPage;
  let fixture: ComponentFixture<MyAddressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAddressPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
