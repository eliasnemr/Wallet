
export interface MiniHistory {

    txpow: {
        block: string,
        isBlock: boolean,
        txpowid: string,
        superparents: 
        [
            {
                difficulty: number,
                count: number,
                parent: string
            }

        ],
        blkdiff: number,
        txndiff: number,
        txn: 
        {
            inputs: 
            [
                {
                    coinid: string,
                    address: string,
                    amount: string,
                    tokenid: string
                }
            ],
            outputs:
            [
                {
                    coinid: string,
                    address: string,
                    amount: string,
                    tokenid: string
                }
            ],
            state: []
        },
        witness: 
        {
            publickeys: [],
            signatures: [],
            scripts: 
            [
                boolean
            ],
            mmrproofs: 
            [
                {
                    blocktime: string,
                    entry: string,
                    data: 
                    {
                        hashonly: boolean,
                        finalhash: string,
                        spent: boolean,
                        coin:
                        {
                            coinid: string,
                            address: string,
                            amount: number,
                            tokenid: string
                        },
                        inblock: string,
                        prevstate: []
                    },
                    proofchain:
                    [
                        {
                            index: number,
                            leftside: boolean,
                            hash: string
                        }
                    ]
                    
                }
            ],
            tokens: []
        },
        txnlist: [],
        magic: string,
        chainid: string,
        custom: string,
        nonce: string,
        mmr: string,
        timemilli: string,
        date: string,
    },
    value: number;


    




}

