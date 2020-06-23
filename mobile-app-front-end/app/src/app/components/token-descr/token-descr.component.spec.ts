import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenDescrComponent } from './token-descr.component';

describe('TokenDescrComponent', () => {
  let component: TokenDescrComponent;
  let fixture: ComponentFixture<TokenDescrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenDescrComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenDescrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
