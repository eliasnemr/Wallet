export interface Status {
    version: number;
    milliuptime: number;
    stringuptime: string;
    conf: string;
    host: string;
    port: number;
    rcport: number;
    root: {
        block: string,
        isblock: boolean,
        txpowid: string,
        parent: string,
        blkdiff: number,
        txndiff: number,
        txn: {
            inputs: [],
            outputs: [],
            state: [],
        },
        witness: {
            publickeys: [],
            signatures: [],
            scripts: [],
            mmrproofs: [],
            tokens: []
        },
        txnlist: [],
        magic: string,
        chainid: string,
        custom: string,
        nonce: string,
        mmr: string,
        timemilli: string,
        date: string
    },
    tip: {
        block: string,
        isblock: boolean,
        txpowid: string,
        parent: string,
        blkdiff: number,
        txndiff: number,
        txn: {
            inputs: [],
            outputs: [],
            state: [],
        },
        witness: {
            publickeys: [],
            signatures: [],
            scripts: [],
            mmrproofs: [],
            tokens: []
        },
        txnlist: [],
        magic: string,
        chainid: string,
        custom: string,
        nonce: string,
        mmr: string,
        timemilli: string,
        date: string
    },
    chainspeed: number,
    lastblock: string,
    totalpow: string,
    IBD: number,
    network: []
}