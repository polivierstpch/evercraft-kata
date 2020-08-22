import { Hero, Attack } from '../Evercraft';

describe('Attack', () => {
    let defender: Hero;
    let attack: Attack;

    beforeEach(() => {
        defender = new Hero();
        attack = new Attack(defender);
    });

    test.each([
        ['should not hit when roll is below armor class',
            { roll: 9, isHit: false, resultHp: 5 }],
        ['should hit when roll is equal to armor class',
            { roll: 10, isHit: true, resultHp: 4 }],
        ['should hit when roll is over armor class',
            { roll: 11, isHit: true, resultHp: 4 }],
        ['should be a critical hit on a roll of 20', // critical hit is always a hit
            { roll: 20, isHit: true, resultHp: 3 }]
    ])('%s', (_, data) => {
        expect(attack.resolve(data.roll)).toBe(data.isHit);
        expect(defender.getHitPoints()).toBe(data.resultHp);
    });
});