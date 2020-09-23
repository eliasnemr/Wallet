import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTokensPage } from './view-tokens.page';

describe('ViewTokensPage', () => {
  let component: ViewTokensPage;
  let fixture: ComponentFixture<ViewTokensPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTokensPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTokensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
