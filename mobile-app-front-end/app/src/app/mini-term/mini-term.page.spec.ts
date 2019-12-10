import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniTermPage } from './mini-term.page';

describe('MiniTermPage', () => {
  let component: MiniTermPage;
  let fixture: ComponentFixture<MiniTermPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniTermPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniTermPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
