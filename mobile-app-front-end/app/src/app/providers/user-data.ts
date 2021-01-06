import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserHistorySavedData {

    saved: any = [];
    
    constructor() { }

    // has the user saved this?
    hasSaved(txn_txpow_txpowid: string): boolean {
        return (this.saved.indexOf(txn_txpow_txpowid) >  -1);
    }
    // add txn as saved
    addToSaved(txn_txpow_txpowid: string): void {
        this.saved.push(txn_txpow_txpowid);
    }
    // remove txn from saved
    removeFromSaved(txn_txpow_txpowid: string): void {
        const index = this.saved.indexOf(txn_txpow_txpowid);
        if(index > -1) {
            this.saved.splice(index, 1);
        }
    }


}