import { Hero } from './Hero';

export class Attack {
    constructor(
        private _defender: Hero
    ) { }

    resolve(roll: number): boolean {
        let isAHit = roll >= this._defender.getArmorClass();
        let isACrit = roll === 20;

        if (isACrit) {
            this._defender.damage(2);
            return isACrit;
        } else if (isAHit) {
            this._defender.damage(1);
        }

        return isAHit;
    }

}