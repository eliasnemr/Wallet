import { Injectable } from '@angular/core';
import { of } from 'rxjs';
/**
 * Provider class to fetch the history of the transactions
 */

@Injectable({
    providedIn: 'root'
})
export class HistoryData {
    data: any;

    load() {
        if(this.data){
            return of(this.data);
        } else {
            
        }
    }

    constructor() {

    }

}