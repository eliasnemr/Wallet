// create a tokens model/interface for tokens
export interface Tokens {
    id?: string;
    token: string;
    confirmed: number;
    unconfirmed: any;
    total: number; 
}