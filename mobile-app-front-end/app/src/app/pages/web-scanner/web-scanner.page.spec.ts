import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebScannerPage } from './web-scanner.page';

describe('WebScannerPage', () => {
  let component: WebScannerPage;
  let fixture: ComponentFixture<WebScannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebScannerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebScannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
