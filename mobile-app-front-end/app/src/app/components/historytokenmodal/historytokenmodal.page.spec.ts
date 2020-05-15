import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorytokenmodalPage } from './historytokenmodal.page';

describe('HistorytokenmodalPage', () => {
  let component: HistorytokenmodalPage;
  let fixture: ComponentFixture<HistorytokenmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorytokenmodalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorytokenmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
