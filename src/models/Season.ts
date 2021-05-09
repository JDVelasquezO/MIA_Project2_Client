import {Tier} from "./Tier";
import {WorkingDay} from "./WorkingDay";

export class Season {
    idSeason: number;
    typeTier: Tier;
    workDays: Array<WorkingDay>;

    constructor(idSeason: number, typeTier: Tier) {
        this.idSeason = idSeason;
        this.typeTier = typeTier;
        this.workDays = new Array<WorkingDay>();
    }

    public addWorkingDays(workDay: WorkingDay) {
        this.workDays.push(workDay);
    }
}