import { Hero, Attack } from '../Evercraft';

describe('Attack', () => {
    let attacker: Hero;
    let defender: Hero;
    let attack: Attack;

    beforeEach(() => {
        attacker = new Hero();
        defender = new Hero();
        attack = new Attack(attacker, defender);
    });

    test.each([
        ['should not hit when roll is below armor class',
            { roll: 9, attackerStrength: 10, isHit: false, resultHp: 5 }],
        ['should hit when roll is equal to armor class',
            { roll: 10, attackerStrength: 10, isHit: true, resultHp: 4 }],
        ['should hit when roll is over armor class',
            { roll: 11, attackerStrength: 10, isHit: true, resultHp: 4 }],
        ['should be a critical hit on a roll of 20', // critical hit is always a hit
            { roll: 20, attackerStrength: 10, isHit: true, resultHp: 3 }],
        ['should be a hit more easily when stronger',
            { roll: 8, attackerStrength: 14, isHit: true, resultHp: 2 }],
        ['should be harder to hit when weaker',
            { roll: 10, attackerStrength: 7, isHit: false, resultHp: 5 }],
    ])('%s', (_, data) => {
        attacker.getStrength().setScore(data.attackerStrength);
        expect(attack.resolve(data.roll)).toBe(data.isHit);
        expect(defender.getCurrentHitPoints()).toBe(data.resultHp);
    });

    test.each([
        ['should be harder to hit when defender is dextrous',
            { roll: 11, defenderDexterity: 14, isHit: false, resultHp: 5 }],
        ['should be easier to hit when defender is clumsy',
            { roll: 9, defenderDexterity: 7, isHit: true, resultHp: 4 }],
        ['should be a critical hit on a roll of 20', 
            { roll: 20, defenderDexterity: 10, isHit: true, resultHp: 3 }],
    ])('%s', (_, data) => {
        defender.getDexterity().setScore(data.defenderDexterity);
        expect(attack.resolve(data.roll)).toBe(data.isHit);
        expect(defender.getCurrentHitPoints()).toBe(data.resultHp);
    });
});