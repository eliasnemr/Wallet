


export class Tokens {
    private tokenid: string;
    private token: string;
    private confirmed: number;
    private unconfirmed: any;
    private total: number;


    constructor(id: string, tkn: string, conf: number, unconf: any, ttl: number) {
        this.tokenid = id;
        this.token = tkn;
        this.confirmed = conf;
        this.unconfirmed = unconf;
        this.total = ttl;
    }

}