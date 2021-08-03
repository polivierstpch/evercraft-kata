import { Hero, Alignment } from '../Evercraft';

describe('Hero', () => {
    let hero: Hero;
    beforeEach(() => hero = new Hero());

    describe('#name', () => {
        it('should default to empty string', () => {
            expect(hero.getName()).toBe('');
        });

        it('should be able to be changed', () => {
            let name = 'Kalderan';
            hero.setName(name);
            expect(hero.getName()).toBe(name);
        });
    });

    describe('#alignment', () => {
        it('should default to neutral', () => {
            expect(hero.getAlignment()).toBe(Alignment.Neutral);
        });

        it('can be changed', () => {
            hero.setAlignment(Alignment.Good);
            expect(hero.getAlignment()).toBe(Alignment.Good);
        });
    });

    describe('#armorClass', () => {
        it('should default to 10', () => {
            expect(hero.getArmorClass()).toBe(10);
        });

        it('should be raised when dextrous', () => {
            hero.getDexterity().setScore(14);
            expect(hero.getArmorClass()).toBe(12);
        });
    });

    describe('#hitPoints', () => {
        it('should default to 5', () => {
            expect(hero.getMaxHitPoints()).toBe(5);
        });

        it('should be raised when hardy', () => {
            hero.getConstitution().setScore(14);
            expect(hero.getMaxHitPoints()).toBe(7);
        });

        it('should be lowered when feeble', () => {
            hero.getConstitution().setScore(7);
            expect(hero.getMaxHitPoints()).toBe(3);
        });

        it('should not go below 0', () => {
            hero.getConstitution().setScore(1);
            expect(hero.getMaxHitPoints()).toBe(1);
        });

    });


    describe('#currentHitPoints', () => {
        it('should get lowered when damaged', () => {
            hero.damage(1);
            expect(hero.getCurrentHitPoints()).toBe(4);
        });
        it('should default to 5', () => {
            expect(hero.getCurrentHitPoints()).toBe(5);
        });

        it('should be raised when hardy', () => {
            hero.getConstitution().setScore(14);
            expect(hero.getCurrentHitPoints()).toBe(7);
        });

        it('should be lowered when feeble', () => {
            hero.getConstitution().setScore(7);
            expect(hero.getCurrentHitPoints()).toBe(3);
        });

        it('should not go below 0', () => {
            hero.getConstitution().setScore(1);
            expect(hero.getCurrentHitPoints()).toBe(1);
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
