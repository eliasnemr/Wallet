// create a model/interface for transaction summary
export class T_Summary {
    id?: number;
    transMonth: string;
    transDay: number;
    transTokenId: any;
    transTokenName: string;
    transAmount: number;
    transConversion: number;
    receivingAddress: any;
    blockNumber: number;
    isBlock: boolean;
    txpowid: string;
    parent: string;
    blockdiff: number;
    date: string;

    constructor(id: number, month: string, day: number, tokenid: any,
        tknName: string, amount: number, conv: number, receiving: any,
        blkNum: number, isBlock: boolean, txpowid: string, parent: string,
        blkdiff: number, date: string){

            this.id = id;
            this.transMonth = month;
            this.transDay = day;
            this.transTokenId = tokenid;
            this.transTokenName = tknName;
            this.transAmount = amount;
            this.transConversion = conv;
            this.receivingAddress = receiving;
            this.blockNumber = blkNum;
            this.isBlock = isBlock;
            this.txpowid = txpowid;
            this.parent = parent;
            this.blockdiff = blkdiff;
            this.date = date;

    }
}