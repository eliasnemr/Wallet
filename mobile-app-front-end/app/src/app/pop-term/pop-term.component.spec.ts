import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopTermComponent } from './pop-term.component';

describe('PopTermComponent', () => {
  let component: PopTermComponent;
  let fixture: ComponentFixture<PopTermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopTermComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
