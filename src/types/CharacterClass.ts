export default interface CharacterClass {
    name: string;
    attackBonus: AttackBonus;
    experience: Experience;
    hitDie: string;    
    savingThrows: SavingThrows,
    spells?: Spells,
    requirements?: Requirement[]
}

export interface Experience {
    [key: number]: number;
}

export interface SavingThrows {
    [key: number]: SaveArray;
}

export interface SaveArray {
    d: number,
    w: number,
    p: number,
    b: number,
    s: number,
}

export interface Spells {
    [key: number]: SpellArray;
}

export interface SpellArray {
    [key: number]: number;
}

export interface AttackBonus {
    [key: number]: number;
}

export interface Requirement {
    abilityScore: string;
    value: number;
}

