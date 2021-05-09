/*
    Class User for Yaml
* */
import {FutballPool} from "./FutballPool";

export class User {
    idUser: number;
    first: string;
    last: string;
    password: string;
    username: string;
    pools: Array<FutballPool>;

    constructor(idUser: number, first: string, last: string, pass: string, username: string,) {
        this.idUser = idUser; this.first = first; this.last = last; this.username = username;
        this.password = pass; this.pools = new Array<FutballPool>();
    }

    public addPools (pool: FutballPool) {
        this.pools.push(pool);
    }
}