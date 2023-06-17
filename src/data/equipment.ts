import Item from "../types/Item";



  


export const adventuringGear: Record<number, string> = {
    1: "Bedroll",
    2: "Chalk (10 sticks)",
    3: "Crowbar",
    4: "Hammer and 12 Iron Spikes",
    5: "Ink, quill and 5 sheets of paper",
    6: "Lantern and 3 flasks of oil",
    7: "Pole (10')",
    8: "Rope (50')",
    9: "Rope(50') and Grappling Hook",
    10: "Shovel",
    11: "Sledgehammer",
    12: "Small Sack"
}     


export const clericArmor: Record<number, string> = {
    1: "Leather",
    2: "Leather + Shield",
    3: "Chainmail",
    4: "Chainmail + Shield",
    5: "Plate mail",
    6: "Plate mail + Shield"
}

// keys are numbers 1-12, values are: Club, Mace, Sling, Sling, Staff, Warhammer
export const clericWeapons: Record<number, string> = {
    1: "Club",
    2: "Mace",
    3: "Sling",
    4: "Sling",
    5: "Staff",
    6: "Warhammer"
}

/**
Make an object with the following data, using the numbers as keys
 Knight Armors:
    1. Chainmail
    2. Chainmail + Shield
    3. Chainmail + shield
    4. Plate Mail
    5. Plate Mail
    6. Plate Mail + Shield    
 */
export const knightArmor: Record<number, string> = {
    1: "Chainmail",
    2: "Chainmail + Shield",
    3: "Chainmail + shield",
    4: "Plate Mail",
    5: "Plate Mail + Shield",
    6: "Plate Mail + Shield"
}


export const knightWeapons: Record<number, string> = {
    1: "Dagger",
    2: "Lance",
    3: "Lance",
    4: "Mace",
    5: "Short Sword",
    6: "Sword"
}

/*
    Magic User weapons: 
    1. Dagger
    2. Staff
    3. Dagger x 3
    4. Staff
*/
export const magicUserWeapons: Record<number, string> = {
    1: "Dagger",
    2: "Staff",
    3: "Dagger x 3",
    4: "Staff"
}

/*
    Friar Weapons
    1. Club
    2. Dagger
    3. Sling
    4. Staff
*/
export const friarWeapons: Record<number, string> = {
    1: "Club",
    2: "Dagger",
    3: "Sling",
    4: "Staff"
}

/* 
    Fighter Armor: 
    1. Leather
    2. Leather + Shield
    3. Chainmail
    4. Chainmail + Shield
    5. Plate Mail
    6. Plate Mail + Shield
*/

export const fighterArmor: Record<number, string> = {
    1: "Leather",
    2: "Leather + Shield",
    3: "Chainmail",
    4: "Chainmail + Shield",
    5: "Plate Mail",
    6: "Plate Mail + Shield"
}

/*
    Fighter Weapons: 
    1. Dagger
    2. Mace
    3. Shortbow
    4. Short Sword
    5. Spear
    6. Sword
*/

export const fighterWeapons: Record<number, string> = {
    1: "Dagger",
    2: "Mace",
    3: "Shortbow",
    4: "Short Sword",
    5: "Spear",
    6: "Sword"
}

/*
    Thief armor:
    1. None
    2. None
    3. None
    4. Leather
    5. Leather
    6. Leather
*/
export const thiefArmor: Record<number, string> = {
    1: "None",
    2: "None",
    3: "None",
    4: "Leather",
    5: "Leather",
    6: "Leather"
}

/*
    Thief weapons:
    1. Club
    2. Dagger(x3)
    3. Sling
    4. Shortbow
    5. Short Sword
    6. Sword
*/
export const thiefWeapons: Record<number, string> = {
    1: "Club",
    2: "Dagger x 3",
    3: "Sling",
    4: "Shortbow",
    5: "Short Sword",
    6: "Sword"
}

/*
    Hunter armor: 
    1. Leather
    2. Leather
    3. Leather
    4. Leather + Shield
    5. Leather + Shield
    6. Leather + Shield
*/
export const hunterArmor: Record<number, string> = {
    1: "Leather",
    2: "Leather",
    3: "Leather",
    4: "Leather + Shield",
    5: "Leather + Shield",
    6: "Leather + Shield"
}

/*
    Hunter weapons:
    1. Dagger
    2. Sling
    3. Longbow
    4. Shortbow
    5. Short Sword
    6. Sword
*/
export const hunterWeapons: Record<number, string> = {
    1: "Dagger",
    2: "Sling",
    3: "Longbow",
    4: "Shortbow",
    5: "Short Sword",
    6: "Sword"
}

