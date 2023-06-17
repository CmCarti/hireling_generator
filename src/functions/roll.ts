import {DiceRoller, DiceRoll} from '@dice-roller/rpg-dice-roller';
export function diceTotal(notation: string) {
    const roller = new DiceRoller;
    const roll = roller.roll(notation) as DiceRoll;
    const total = roll.total;
    return total;
}

export function diceValues(notation: string) {
    const roller = new DiceRoller;
    const roll = roller.roll(notation) as DiceRoll;

    return roll.output;
}
