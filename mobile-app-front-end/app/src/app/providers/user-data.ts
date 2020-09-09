import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class UserData {

    saved: any = [];

    constructor(
        public storage: Storage
    ) { }

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