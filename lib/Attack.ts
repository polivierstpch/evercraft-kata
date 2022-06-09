import { Hero } from './Hero';

export class Attack {
    constructor(
        private _attacker: Hero,
        private _defender: Hero
    ) { }

    resolve(roll: number): boolean {
        let isAHit = roll + this._attacker.strength.modifier >= this._defender.armorClass;
        let isACrit = roll === 20;

        if (isACrit) {
            this._defender.damage((1 + this._attacker.strength.modifier) * 2);
            return isACrit;
        } else if (isAHit) {
            this._defender.damage(1 + this._attacker.strength.modifier);
        }

        return isAHit;
    }

}