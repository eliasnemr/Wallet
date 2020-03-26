import { Injectable, ChangeDetectorRef } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class darkMode {

    constructor() {}

    public toggleDarkTheme(shouldAdd: boolean){
    document.body.classList.toggle('dark', shouldAdd);
    }
}