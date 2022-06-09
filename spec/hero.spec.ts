import { Hero, Alignment } from '../Evercraft';

describe('Hero', () => {
    let hero: Hero;
    beforeEach(() => hero = new Hero());

    describe('#name', () => {
        it('should default to empty string', () => {
            expect(hero.name).toBe('');
        });

        it('should be able to be changed', () => {
            hero.name = 'Kalderan';
            expect(hero.name).toBe(name);
        });
    });

    describe('#alignment', () => {
        it('should default to neutral', () => {
            expect(hero.alignment).toBe(Alignment.Neutral);
        });

        it('can be changed', () => {
            hero.alignment = Alignment.Good;
            expect(hero.alignment).toBe(Alignment.Good);
        });
    });

    describe('#armorClass', () => {
        it('should default to 10', () => {
            expect(hero.armorClass).toBe(10);
        });

        it('should be raised when dextrous', () => {
            hero.dexterity.score = 14;
            expect(hero.armorClass).toBe(12);
        });
    });

    describe('#hitPoints', () => {
        it('should default to 5', () => {
            expect(hero.maxHitPoints).toBe(5);
        });

        it('should be raised when hardy', () => {
            hero.constitution.score = 14;
            expect(hero.maxHitPoints).toBe(7);
        });

        it('should be lowered when feeble', () => {
            hero.constitution.score = 7;
            expect(hero.maxHitPoints).toBe(3);
        });

        it('should not go below 0', () => {
            hero.constitution.score = 1;
            expect(hero.maxHitPoints).toBe(1);
        });

    });


    describe('#currentHitPoints', () => {
        it('should get lowered when damaged', () => {
            hero.damage(1);
            expect(hero.currentHitPoints).toBe(4);
        });
        it('should default to 5', () => {
            expect(hero.currentHitPoints).toBe(5);
        });

        it('should be raised when hardy', () => {
            hero.constitution.score = 14;
            expect(hero.currentHitPoints).toBe(7);
        });

        it('should be lowered when feeble', () => {
            hero.constitution.score = 7;
            expect(hero.currentHitPoints).toBe(3);
        });

        it('should not go below 0', () => {
            hero.constitution.score = 1;
            expect(hero.currentHitPoints).toBe(1);
        });
    });

    describe('#isAlive', () => {
        it('should default to true', () => {
            expect(hero.isAlive()).toBe(true);
        });

        it('should still be alive when slightly damaged', () => {
            hero.damage(1);
            expect(hero.isAlive()).toBe(true);
        });

        it('should be dead when hitpoints reaches 0', () => {
            hero.damage(5);
            expect(hero.isAlive()).toBe(false);
        });

        it('should be dead when hitpoints are lower than 0', () => {
            hero.damage(6);
            expect(hero.isAlive()).toBe(false);
        });
    });
});
