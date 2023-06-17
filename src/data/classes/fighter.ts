import CharacterClass from "../../types/CharacterClass";

const fighter: CharacterClass =  {
    name: "fighter",
    hitDie: 'd8',
    attackBonus: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        11: 10,
        12: 10,
        13: 10,
        14: 10
    },
    experience: {
        1: 0,
        2: 2000,
        3: 4000,
        4: 8000,
        5: 16000,
        6: 32000,
        7: 64000,
        8: 120000,
        9: 240000,
        10: 360000,
        11: 480000,
        12: 600000,
        13: 720000,
        14: 840000
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
export default fighter;