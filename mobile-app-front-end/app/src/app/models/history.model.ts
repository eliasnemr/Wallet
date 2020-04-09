export interface History {
    txpow:{
        block: string,
        isblock: boolean,
        txpowid: string,
        parent: string,
        superparents:[{
        difficulty: number,
        count: number,
        parent: string
        }],
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
        state: [],
        linkhash: string
        },
        witness:{
        signatures: [],
        mmrproofs: [],
        tokens:[],
        scripts:[{
            script:string,
            proof:{
            data: string,
            hashbits: number,
            proofchain:[],
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
        chainid: string,
        parentchainid: string,
        custom: string,
        nonce: string,
        mmr: string,
        total: string,
        timesecs: string,
        date: string
    },
    values:[{
        token: string,
        name: string,
        amount: string
    }]
}

