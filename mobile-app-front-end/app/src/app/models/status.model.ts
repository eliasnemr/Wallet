export interface Status {
    version: number;
    time: string;
    uptime: string;
    conf: string;
    host: string;
    port: number;
    minimaport: number;
    rpcport: number;
    websocketport: number;
    minidappserver: number;
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
    mempooltxn: number,
    mempoolcoins: number,
    chainspeed: number,
    chainlength: number,
    chainweight: string,
    connections: number
}