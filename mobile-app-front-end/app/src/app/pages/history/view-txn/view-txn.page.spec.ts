import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTXNPage } from './view-txn.page';

describe('ViewTXNPage', () => {
  let component: ViewTXNPage;
  let fixture: ComponentFixture<ViewTXNPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTXNPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTXNPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
