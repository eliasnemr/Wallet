import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniTabsPage } from './mini-tabs.page';

describe('MiniTabsPage', () => {
  let component: MiniTabsPage;
  let fixture: ComponentFixture<MiniTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
