import { adventuringGear, clericArmor, fighterArmor, fighterWeapons, friarWeapons, hunterArmor, hunterWeapons, knightArmor, knightWeapons, magicUserWeapons, thiefArmor, thiefWeapons } from "../data/equipment";
import { Equipment } from "../types/Retainer";
import { diceTotal } from "./roll";

export default function generateEquipment(className: string): Equipment {
    const torches = diceTotal('1d6');
    const ironRations = diceTotal('1d6');
    const goldPieces = diceTotal('3d6');
    const gear1 = diceTotal('1d12');
    const gear2 = diceTotal('1d12');
    switch(className) {
        case "thief": {
            const armorRoll = diceTotal('1d6');
            const weapon1 = diceTotal('1d6');
            const weapon2 = diceTotal('1d6');
            return {
                torches,
                ironRations,
                goldPieces,
                gear: [adventuringGear[gear1], adventuringGear[gear2]],
                armor: thiefArmor[armorRoll],
                weapons: [thiefWeapons[weapon1], thiefWeapons[weapon2]],
            }
            
        }
        case "hunter": {
            const armorRoll = diceTotal('1d6');
            const weapon1 = diceTotal('1d6');
            const weapon2 = diceTotal('1d6');
            return {
                torches,
                ironRations,
                goldPieces,
                gear: [adventuringGear[gear1], adventuringGear[gear2]],
                armor: hunterArmor[armorRoll],
                weapons: [hunterWeapons[weapon1], hunterWeapons[weapon2]],
            }
        }
        case "fighter": {
            const armorRoll = diceTotal('1d6');
            const weapon1 = diceTotal('1d6');
            const weapon2 = diceTotal('1d6');
            return {
                torches,
                ironRations,
                goldPieces,
                gear: [adventuringGear[gear1], adventuringGear[gear2]],
                armor: fighterArmor[armorRoll],
                weapons: [fighterWeapons[weapon1], fighterWeapons[weapon2]],
            }
        }
        case "magicUser": {
            const weaponRoll = diceTotal('1d4');
            return {
                torches,
                ironRations,
                goldPieces,
                armor: "None",
                gear: [adventuringGear[gear1], adventuringGear[gear2]],
                weapons: [magicUserWeapons[weaponRoll]],
            }
        }
        case "friar": {
            const weaponRoll = diceTotal('1d4');
            return {
                torches,
                ironRations,
                goldPieces,
                armor: "None",
                gear: [adventuringGear[gear1], adventuringGear[gear2]],
                weapons: [friarWeapons[weaponRoll]],
            }
        }
        case "knight": {
            const armorRoll = diceTotal('1d6');
            const weapon1 = diceTotal('1d6');
            const weapon2 = diceTotal('1d6');
            return {
                torches,
                ironRations,
                goldPieces,
                gear: [adventuringGear[gear1], adventuringGear[gear2]],
                armor: knightArmor[armorRoll],
                weapons: [knightWeapons[weapon1], knightWeapons[weapon2]],
            }
        }
        
        case "cleric": 
        default: {
            const armorRoll = diceTotal('1d6');
            const weapon1 = diceTotal('1d6');
            const weapon2 = diceTotal('1d6');
            return {
                torches,
                ironRations,
                goldPieces,
                gear: [adventuringGear[gear1], adventuringGear[gear2]],
                armor: clericArmor[armorRoll],
                weapons: [clericArmor[weapon1], clericArmor[weapon2]],
            }
        }
        
    }
}

