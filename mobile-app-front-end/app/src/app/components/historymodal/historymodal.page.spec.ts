import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorymodalPage } from './historymodal.page';

describe('HistorymodalPage', () => {
  let component: HistorymodalPage;
  let fixture: ComponentFixture<HistorymodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorymodalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorymodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
