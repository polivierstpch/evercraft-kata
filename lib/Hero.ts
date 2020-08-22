import { Ability } from './Ability';
import { Alignment } from './Alignment';

export class Hero {
    constructor(
        private _name: string = "",
        private _alignment: Alignment = Alignment.Neutral,
        private _hitPoints: number = 5,
        private _damage: number = 0,
        private _str: Ability = new Ability(),
        private _dex: Ability = new Ability(),
        private _con: Ability = new Ability(),
        private _int: Ability = new Ability(),
        private _wis: Ability = new Ability(),
        private _cha: Ability = new Ability()
    ) { }

    isAlive(): boolean {
        return this.getHitPoints() > 0;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string): void {
        this._name = value;
    }

    getAlignment(): Alignment {
        return this._alignment;
    }

    setAlignment(alignment: Alignment): void {
        this._alignment = alignment;
    }

    getStrength(): Ability {
        return this._str;
    }

    getDexterity(): Ability {
        return this._dex;
    }

    getConstitution(): Ability {
        return this._con;
    }

    getIntelligence(): Ability {
        return this._int;
    }

    getWisdom(): Ability {
        return this._wis;
    }

    getCharisma(): Ability {
        return this._cha;
    }

    getArmorClass(): number {
        return 10;
    }

    getHitPoints(): number {
        return this._hitPoints - this._damage;
    }

    damage(value: number): void {
        this._damage += value;
    }
}