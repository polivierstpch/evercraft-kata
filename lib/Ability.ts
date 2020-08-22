export class Ability {
    constructor(private _score: number = 10) { }

    getScore(): number {
        return this._score;
    }

    setScore(value: number) {
        if (value < 1 || value > 20)
            throw ('Ability score cannot be set below 1 or over 20!');
        this._score = value;
    }

    getModifier(): number {
        return Math.floor((this.getScore() / 2) - 5);
    }
}

