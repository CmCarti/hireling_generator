export default interface Item {
    name: string,
    quantity: number,
    type: ItemType,
    description?: string,
    weight?: number,
    value?: number,
    properties?: WeaponProperties | ArmorProperties
}

export type ItemType = 'weapon' | 'armor' | 'gear' | 'treasure';

export interface WeaponProperties {
    damageDie: string,
    qualities?: WeaponQuality[],
}

export interface WeaponQuality {
    name: string,
    description: string,
}

export interface ArmorProperties {
    armorClass: number,
    isShield?: boolean,
}
