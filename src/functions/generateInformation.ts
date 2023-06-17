import { backgrounds } from "../data/backgrounds";
import names from "../data/names";
import { CharacterInformation } from "../types/Retainer";
import { diceTotal } from "./roll";

export default function generateInformation(): CharacterInformation {
    const background = backgrounds[diceTotal('1d100')];
    const name = getName();
    
    

    return {
        background,
        name
    }
}

function getName(name?: string) {
    if(!name) name = names[diceTotal('1d500') + 1];
    const surname = names[diceTotal('1d500') + 1];
    if(surname === name) {
        return getName(name);
    }
    return name + " " + surname;
}
