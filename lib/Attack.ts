import { Hero } from './Hero';

export class Attack {
    constructor(
        private _attacker: Hero,
        private _defender: Hero
    ) { }

    resolve(roll: number): boolean {
        let isAHit = roll + this._attacker.getStrength().getModifier() >= this._defender.getArmorClass();
        let isACrit = roll === 20;

        if (isACrit) {
            this._defender.damage((1 + this._attacker.getStrength().getModifier()) * 2);
            return isACrit;
        } else if (isAHit) {
            this._defender.damage(1 + this._attacker.getStrength().getModifier());
        }

        return isAHit;
    }

}