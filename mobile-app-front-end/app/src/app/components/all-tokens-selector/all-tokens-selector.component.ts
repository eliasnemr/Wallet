import { Subscription, Subject, ReplaySubject } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { Token } from 'minima';
import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as SparkMD5 from 'spark-md5';

@Component({
  selector: 'all-tokens-selector',
  templateUrl: './all-tokens-selector.component.html',
  styleUrls: ['./all-tokens-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AllTokensSelectorComponent,
      multi: true,
    },
  ],
})
export class AllTokensSelectorComponent implements OnInit,
 ControlValueAccessor {
  token: Token;

  disabled: boolean;
  onChange = (token: Token) => {};
  onTouch = () => {};

  constructor(public modalController: ModalController) {
    this.disabled = false;
  }

  ngOnInit() {}

  writeValue(value: Token) {
    this.onChange(value);
    this.token = value;
  }

  registerOnChange(fn: (token: Token) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  createIcon(_t: string) {
    return 'https://www.gravatar.com/avatar/' + SparkMD5.hash(_t) + '?d=identicon';
  }
}
