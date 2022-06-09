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
        return this.currentHitPoints > 0;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get alignment(): Alignment {
        return this._alignment;
    }

    set alignment(alignment: Alignment) {
        this._alignment = alignment;
    }

    get strength(): Ability {
        return this._str;
    }

    get dexterity(): Ability {
        return this._dex;
    }

    get constitution(): Ability {
        return this._con;
    }

    get intelligence(): Ability {
        return this._int;
    }

    get wisdom(): Ability {
        return this._wis;
    }

    get charisma(): Ability {
        return this._cha;
    }

    get armorClass(): number {
        return 10 + this._dex.modifier;
    }

    get maxHitPoints(): number {
        return Math.max(this._hitPoints + this._con.modifier, 1);
    }

    get currentHitPoints(): number {
        return this.maxHitPoints - this._damage;
    }

    damage(value: number): void {
        this._damage += value;
    }
}