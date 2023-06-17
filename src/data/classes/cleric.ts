import CharacterClass from "../../types/CharacterClass";

const cleric: CharacterClass =  {
    name: "cleric",
    hitDie: 'd6',
    attackBonus: {
        1: 0,
        2: 1,
        3: 1,
        4: 2,
        5: 2,
        6: 3,
        7: 3,
        8: 4,
        9: 4,
        10: 5,
        11: 5,
        12: 6,
        13: 6,
        14: 7
    },
    experience: {
        1: 0,
        2: 1500,
        3: 3000,
        4: 6000,
        5: 12000,
        6: 25000,
        7: 50000,
        8: 100000,
        9: 200000,
        10: 300000,
        11: 400000,
        12: 500000,
        13: 600000,
        14: 700000
    },
    savingThrows: {
        1: {
            d: 11,
            w: 12,
            p: 14,
            b: 16,
            s: 15
        },
        2: {
            d: 11,
            w: 12,
            p: 14,
            b: 16,
            s: 15
        },
        3: {
            d: 11,
            w: 12,
            p: 14,
            b: 16,
            s: 15
        },
        4: {
            d: 11,
            w: 12,
            p: 14,
            b: 16,
            s: 15
        },
        5: {
            d: 9,
            w: 10,
            p: 12,
            b: 14,
            s: 12
        },
        6: {
            d: 9,
            w: 10,
            p: 12,
            b: 14,
            s: 12
        },
        7:{
            d: 9,
            w: 10,
            p: 12,
            b: 14,
            s: 12
        } ,
        8:{
            d: 9,
            w: 10,
            p: 12,
            b: 14,
            s: 12
        } ,
        9:{
            d: 6,
            w: 7,
            p: 9,
            b: 11,
            s: 9
        } ,
        10:{
            d: 6,
            w: 7,
            p: 9,
            b: 11,
            s: 9
        } ,
        11:{
            d: 6,
            w: 7,
            p: 9,
            b: 11,
            s: 9
        } ,
        12:{
            d: 6,
            w: 7,
            p: 9,
            b: 11,
            s: 9
        } ,
        13:{
            d: 3,
            w: 5,
            p: 7,
            b: 8,
            s: 7
        } ,
        14:{
            d: 3,
            w: 5,
            p: 7,
            b: 8,
            s: 7
        } 
    },
    spells: {
        1: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0},
        2: {1: 1, 2: 0, 3: 0, 4: 0, 5: 0},
        3: {1: 2, 2: 0, 3: 0, 4: 0, 5: 0},
        4: {1: 2, 2: 1, 3: 0, 4: 0, 5: 0},
        5: {1: 2, 2: 2, 3: 0, 4: 0, 5: 0},
        6: {1: 2, 2: 2, 3: 1, 4: 1, 5: 0},
        7: {1: 2, 2: 2, 3: 2, 4: 1, 5: 1},
        8: {1: 3, 2: 3, 3: 2, 4: 2, 5: 1},
        9: {1: 3, 2: 3, 3: 3, 4: 2, 5: 2},
        10: {1: 4, 2: 4, 3: 3, 4: 3, 5: 2},
        11: {1: 4, 2: 4, 3: 4, 4: 3, 5: 3},
        12: {1: 5, 2: 5, 3: 4, 4: 4, 5: 3},
        13: {1: 5, 2: 5, 3: 5, 4: 4, 5: 4},
        14: {1: 6, 2: 5, 3: 5, 4: 5, 5: 4},
    }
} 
export default cleric;