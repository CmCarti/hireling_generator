import Retainer from "../types/Retainer";
import generateAbilityScores from "./generateAbilityScores";
import generateClass from "./generateClass";
import generateEquipment from "./generateEquipment";
import generateInformation from "./generateInformation";
import { diceTotal } from "./roll";

export default function generateAdventurer(level = 1): Retainer {
  const abilityScores = generateAbilityScores();
  const characterClass = generateClass(abilityScores);
  const hp = diceTotal(`${level}${characterClass.hitDie}`);
  const equipment = generateEquipment(characterClass.name);
  const characterInformation = generateInformation();

  return {
    abilityScores,
    characterClass,
    equipment,
    hp,
    characterInformation,
  };
}
