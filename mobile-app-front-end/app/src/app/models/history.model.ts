export interface History {

    status: boolean;
    minifunc: string;
    message: string;
    response: {
        history: [{
            txpow: {
                txpowid: string,
                isblock: boolean,
                istransaction: boolean,
                superblock: number,
                size: number,
                // HEADER
                header: {
                    block: string,
                    blkdiff: string,
                    cascadelevels: number,
                    // SUPERPARENTS
                    superparents: [{
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
            // BODY
            body: {
            txndiff: string
            txn: {
            inputs: [{
                coinid: string,
                address: string,
                amount: number,
                tokenid: string,
                floating: false,
                remainder: false;
            }],
            outputs: [{
                coinid: string,
                address: string,
                amount: string,
                tokenid: string,
                floating: boolean,
                remainder: boolean
            }],
            state: [{port: string, data: string, keeper: boolean}],
            tokengen?: any,
            linkhash: string
            }
            },
            // WITNESS
            witness: {
            signatures: [{
                signature: string,
                proof: {
                    data: string,
                    hashbits: number,
                    proofchain: [],
                    chainsha: string,
                    finalhash: string
                }
            }],
            mmrproofs: [{
                blocktime: string,
                entry: string,
                data: {
                    hashonly: boolean,
                    value: string,
                    finalhash: string,
                    spent: boolean,
                    coin: {
                        coinid: string,
                        address: string,
                        mxaddress: string,
                        amount: string,
                        tokenid: string,
                        floating: boolean,
                        remainder: boolean
                    }
                },
                inblock: string,
                prevstate: []
            }],
            tokens: [],
            scripts: [{
                script: string,
                proof: {
                    data: string,
                    hashbits: number,
                    proofchain: [],
                    chainsha: string,
                    finalhash: string
                }
            }]
            },
            burnttxn: {
            inputs: [],
            outputs: [],
            state: [],
            linkhash: string
            },
            burntwitness: {
                signatures: [],
                mmrproofs: [],
                tokens: [],
                scripts: []
            },
            txnlist: [],
            magic: {
                prng: string,
                maxtxpow: number,
                maxtxn: number,
                maxkissvm: string
            }
            }
            values: [{
                token: string,
                name: any,
                amount: string
            }]
        }]
    };
}

