import { AbilityScores } from "../types/Retainer";
import classes from '../data/classes';
import { diceTotal } from "./roll";
export default function generateClass(abilityScores: AbilityScores) {
    const roll = diceTotal('1d12');

    const potentialClass = classes[roll];

    
    if(potentialClass.requirements) {
        let isValid = true;
        potentialClass.requirements.forEach(requirement => {
            if(abilityScores[requirement.abilityScore as keyof AbilityScores] < requirement.value) {
                isValid = false;
            }
        })
        if(!isValid) return generateClass(abilityScores);
    }
    return potentialClass;
}
