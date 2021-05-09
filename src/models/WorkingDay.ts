import {SportEvent} from "./SportEvent";

export class WorkingDay {
    idWorkingDay: number;
    events: Array<SportEvent>;

    constructor(idWD: number) {
        this.idWorkingDay = idWD;
        this.events = new Array<SportEvent>();
    }

    public addEvents (event: SportEvent) {
        this.events.push(event);
    }
}