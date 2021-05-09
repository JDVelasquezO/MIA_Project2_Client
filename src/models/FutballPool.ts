import {Season} from "./Season";

export class FutballPool {
    idFutballPool: number;
    seasons: Array<Season>;

    constructor(idFutballPool: number) {
        this.idFutballPool = idFutballPool;
        this.seasons = new Array<Season>();
    }

    public addSeason (season: Season) {
        this.seasons.push(season);
    }
}