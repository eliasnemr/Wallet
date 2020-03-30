export interface Status {
    version: number;
    uptime: string;
    conf: string;
    host: string;
    port: number;
    rcport: number;
    automine: boolean,
    root: string;
    tip: string,
    lastblock: number,
    difficulty: string,
    chainlength: number,
    chainspeed: number,
    chainweight: string,
    IBD: string,
    connections: number
}