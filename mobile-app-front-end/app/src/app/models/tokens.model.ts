// create a tokens model/interface for tokens
export interface Tokens {
    tokenid?: string;
    token: string;
    total: number; 
    confirmed: number;
    unconfirmed: any;
    mempool: string;
    sendable: string;
}