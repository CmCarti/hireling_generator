import {DiceRoller, DiceRoll} from '@dice-roller/rpg-dice-roller';
import {diceTotal} from './roll';


export default function generateStatistics() {

    return {
        str: diceTotal('3d6'),
        int: diceTotal('3d6'),
        wis: diceTotal('3d6'),
        dex: diceTotal('3d6'),
        con: diceTotal('3d6'),
        cha: diceTotal('3d6'),
    }

}