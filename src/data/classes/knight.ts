import CharacterClass from "../../types/CharacterClass";

const knight: CharacterClass =  {
    name: "knight",
    hitDie: 'd8',
    requirements:  [{
        abilityScore: "dex",
        value: 9
    }, {abilityScore: "con", value: 9}],
    attackBonus: {
        1: 0,
        2: 1,
        3: 2,
        4: 3,
        5: 4,
        6: 5,
        7: 6,
        8: 7,
        9: 8,
        10: 9,
        11: 9,
        12: 9,
        13: 9,
        14: 9
    },
    experience: {
        1: 0,
        2: 2500,
        3: 5000,
        4: 10000,
        5: 18500,
        6: 37000,
        7: 85000,
        8: 140000,
        9: 270000,
        10: 400000,
        11: 530000,
        12: 660000,
        13: 790000,
        14: 920000
    },
    savingThrows: {
        1: {
            d: 12,
            w: 13,
            p: 14,
            b: 15,
            s: 16
        },
        2: {
            d: 12,
            w: 13,
            p: 14,
            b: 15,
            s: 16
        },
        3: {
            d: 12,
            w: 13,
            p: 14,
            b: 15,
            s: 16
        },
        4: {
            d: 10,
            w: 11,
            p: 12,
            b: 13,
            s: 14
        },
        5: {
            d: 10,
            w: 11,
            p: 12,
            b: 13,
            s: 14
        },
        6: {
            d: 10,
            w: 11,
            p: 12,
            b: 13,
            s: 14
        },
        7:{
            d: 8,
            w: 9,
            p: 10,
            b: 10,
            s: 12
        } ,
        8:{
            d: 8,
            w: 9,
            p: 10,
            b: 10,
            s: 12
        } ,
        9:{
            d: 8,
            w: 9,
            p: 10,
            b: 10,
            s: 12
        } ,
        10:{
            d: 6,
            w: 7,
            p: 8,
            b: 8,
            s: 10
        } ,
        11:{
            d: 6,
            w: 7,
            p: 8,
            b: 8,
            s: 10
        } ,
        12:{
            d: 6,
            w: 7,
            p: 8,
            b: 8,
            s: 10
        } ,
        13:{
            d: 4,
            w: 5,
            p: 6,
            b: 5,
            s: 8
        } ,
        14:{
            d: 4,
            w: 5,
            p: 6,
            b: 5,
            s: 8
        } 
    },
    
} 
export default knight;