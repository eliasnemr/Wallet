export class T_Summary {
    // - vars
    private transId: number;
    private transMonth: string;
    private transDay: number;
    private transTokenId: any;
    private transTokenName: string;
    private transAmount: number;
    private transConversion: number;
    private receivingAddress: any;
    private blockNumber: number;
    private isBlock: boolean;
    private txpowid: string;
    private parent: string;
    private blockdiff: number;
    private date: string;

    constructor(id: number, month: string, day: number, tknId: any,
         tknName: string, tknAmount: number, tknConvert: number,
         addr: any, blkNum: any, isBlock: boolean, txpowid: string,
         parent: string, blockdiff: number, date: string
          ){
             this.transId = id;
             this.transMonth = month;
             this.transDay = day;
             this.transTokenId = tknId;
             this.transTokenName = tknName;
             this.transAmount = tknAmount;
             this.transConversion = tknConvert;
             this.receivingAddress = addr;
             this.blockNumber = blkNum;
             this.isBlock = isBlock;
             this.txpowid = txpowid;
             this.parent = parent;
             this.blockdiff = blockdiff;
             this.date = date;
    }

}