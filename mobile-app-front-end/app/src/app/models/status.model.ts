export interface Status {
    version: number;
    time: string;
    uptime: string;
    conf: string;
    host: string;
    port: number;
    rpcport: number;
    automine: boolean, 
    root: string;
    tip: string,
    total: string,
    lastblock: number,
    lasttime: string,
    cascade: string,
    difficulty: string,
    coindb: number,
    txpowdb: number,
    txpowfiles: number,
    txpowfolder: string,
    mempooltxn: number,
    mempoolcoins: number,
    chainlength: number,
    chainspeed: number,
    chainweight: string,
    IBD: string,
    connections: number
}