import CharacterClass from "./CharacterClass";

export default interface Retainer {
    abilityScores: AbilityScores,
    characterClass: CharacterClass,
    equipment: Equipment
    hp: number,
    characterInformation: CharacterInformation

}

export interface CharacterInformation {
    background: string;
    name: string;
}

export interface Equipment {
    torches: number,
    ironRations: number,
    goldPieces: number,
    gear: string[],
    armor: string,
    weapons: string[],
}

export interface AbilityScores {
    str: number,
    int: number,
    wis: number,
    dex: number,
    con: number,
    cha: number,
}