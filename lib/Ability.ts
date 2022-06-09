export class Ability {
    constructor(private _score: number = 10) { }

    get score(): number {
        return this._score;
    }

    set score(value: number) {
        if (value < 1 || value > 20)
            throw ('Ability score cannot be set below 1 or over 20!');
        this._score = value;
    }

    get modifier(): number {
        return Math.floor((this.score / 2) - 5);
    }
}

