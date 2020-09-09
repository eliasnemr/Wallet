export interface History {

    txpow: {
        txpowid: string,
        isblock: boolean,
        istransaction: boolean,
        superblock: number,
        size: number,
        header: {
            block: string,
            blkdiff: string,
            cascadelevels: number,
            superparents:[{
                difficulty: number,
                count: number,
                parent: string
            }],
            chainid: string,
            parentchainid: string,
            mmr: string,
            total: string,
            nonce: string
            timesecs: string,
            date: string
        },

    hasbody: boolean,
    body: {
        txndiff: string
    txn: {
    inputs:[{
        coinid: string,
        address: string,
        amount: number,
        tokenid: string,
        floating: false,
        remainder: false;
    }],
    outputs:[{
        coinid: string,
        address: string,
        amount: string,
        tokenid: string,
        floating: boolean,
        remainder: boolean
    }],
    state: [{port: string, data: string, keeper: boolean}],
    tokengen: any,
    linkhash: string
    }
    },
    witness: {
        
    signatures: [],
    mmrproofs: [],
    tokens:[],
    scripts:[{
        script: string,
        proof: {
            data: string,
            hashbits: number,
            proofchain: [],
            chainsha:string,
            finalhash:string
        }
    }]
    },
    burnttxn:{
    inputs:[],
    outputs:[],
    state:[],
    linkhash:string
    },
    burntwitness:{
    signatures:[],
    mmrproofs:[],
    tokens:[],
    scripts:[]
    },
    txnlist:[],
    magic: string,
    }
    values:[{
        token: string,
        name: any,
        amount: string
    }]




}

