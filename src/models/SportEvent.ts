import {Prediction} from "./Prediction";
import {Result} from "./Result";

export class SportEvent {
    date: Date;
    visitant: string;
    local: string;
    sport: string;
    predictions: Array<Prediction>;
    results: Array<Result>

    constructor(date: Date, visitant: string, local: string, sport: string) {
        this.date = date; this.visitant = visitant; this.local = local; this.sport = sport
        this.predictions = new Array<Prediction>();
        this.results = new Array<Result>();
    }

    public addPrediction (prediction: Prediction) {
        this.predictions.push(prediction);
    }

    public addResults (result: Result) {
        this.results.push(result);
    }
}