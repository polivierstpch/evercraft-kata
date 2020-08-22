import { Ability } from '../Evercraft';

describe('Ability', () => {
    let ability: Ability;

    beforeEach(() => ability = new Ability());

    it('defaults to 10', () => {
        expect(ability.getScore()).toBe(10);
    });

    it('should not be able to be set over 20', () => {
        expect(() => ability.setScore(21)).toThrow('Ability score cannot be set below 1 or over 20!');
    });

    it.each([
        [1, -5], [2, -4], [3, -4], [4, -3], [5, -3],
        [6, -2], [7, -2], [8, -1], [9, -1], [10, +0],
        [11, +0], [12, +1], [13, +1], [14, +2], [15, +2],
        [16, +3], [17, +3], [18, +4], [19, +4], [20, +5]
    ])('score of i% has modifier of i%', (score, modifier) => {
        ability.setScore(score);
        expect(ability.getModifier()).toBe(modifier);
    });
});