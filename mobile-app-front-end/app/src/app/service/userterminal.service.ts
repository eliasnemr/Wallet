import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserTerminal { 
    fontSizeEmitter = new Subject<number>();
}