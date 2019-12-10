import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendFundsPage } from './send-funds.page';

describe('SendFundsPage', () => {
  let component: SendFundsPage;
  let fixture: ComponentFixture<SendFundsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendFundsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendFundsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
