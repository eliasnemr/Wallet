import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

export interface Font {
    size: number
}

@Injectable({
    providedIn: 'root'
  })
export class UserTerminal { 

    fontSizeEmitter: Subject<Font>;

    constructor() {
        this.initFontSizeEmitter();
    }

    initFontSizeEmitter() {
        this.fontSizeEmitter = new BehaviorSubject<Font>({size: 16});
    }

}