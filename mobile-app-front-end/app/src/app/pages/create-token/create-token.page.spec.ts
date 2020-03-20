import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTokenPage } from './create-token.page';

describe('CreateTokenPage', () => {
  let component: CreateTokenPage;
  let fixture: ComponentFixture<CreateTokenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTokenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTokenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
