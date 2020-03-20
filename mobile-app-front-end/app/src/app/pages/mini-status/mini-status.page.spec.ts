import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniStatusPage } from './mini-status.page';

describe('MiniStatusPage', () => {
  let component: MiniStatusPage;
  let fixture: ComponentFixture<MiniStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniStatusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
