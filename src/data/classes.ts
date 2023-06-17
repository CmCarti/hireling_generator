import CharacterClass from "../types/CharacterClass"
import cleric from "./classes/cleric";
import fighter from "./classes/fighter";
import friar from "./classes/friar";
import hunter from "./classes/hunter";
import knight from "./classes/knight";
import magicUser from "./classes/magicUser";
import thief from "./classes/thief";

const classes: CharacterClassCollection = {
    1: cleric, 
    2: fighter, // Fighter 2-4
    3: fighter,
    4: fighter,
    5: magicUser, // Magic User
    6: thief, // Thief 6-8
    7: thief,
    8: thief,
    9: hunter, // Hunter 9-10
    10: hunter,
    11: knight, // Knight
    12: friar, // Friar
}

export default classes;

export interface CharacterClassCollection {
    [key: number]: CharacterClass;
}