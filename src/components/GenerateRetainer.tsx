import { useState } from "react";
import Retainer from "../types/Retainer";
import generateAbilityScores from "../functions/generateAbilityScores";
import generateAdventurer from "../functions/generateAdventurer";

const GenerateRetainer = () => {
  const [retainer, setRetainer] = useState<Retainer>();
  const [level, setLevel] = useState(1);
  function generateTheRetainer() {
    const adventurer = generateAdventurer(level);

    console.log(adventurer);
    setRetainer(adventurer);
  }

  return (
    <div>
      <select
        value={level.toString()}
        onChange={(e) => setLevel(parseInt(e.target.value))}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <button onClick={generateTheRetainer}>Generate</button>
      {retainer !== undefined && (
        <>
          <div>Name: {retainer.characterInformation.name}</div>
          <div
            style={{
              textTransform: "capitalize",
            }}
          >
            Class: {retainer.characterClass.name}
          </div>
          <div>Background: {retainer.characterInformation.background}</div>

          <div>Hit Points: {retainer.hp}</div>
          <div>
            Experience Needed: {retainer.characterClass.experience[level + 1]}
          </div>
          <div>
            <div>Ability Scores</div>
            <div>STR: {retainer.abilityScores.str}</div>
            <div>INT: {retainer.abilityScores.int}</div>
            <div>WIS: {retainer.abilityScores.wis}</div>
            <div>DEX: {retainer.abilityScores.dex}</div>
            <div>CON: {retainer.abilityScores.con}</div>
            <div>CHA: {retainer.abilityScores.cha}</div>
          </div>
          <div>
            <div>Gold Pieces: {retainer.equipment.goldPieces}</div>

            <div>
              Equipment: {retainer.equipment.torches}{" "}
              {retainer.equipment.torches === 1 ? "Torch" : "Torches"},{" "}
              {retainer.equipment.ironRations}{" "}
              {retainer.equipment.ironRations === 1
                ? "Iron Ration"
                : "Iron Rations"}
              , Waterskin, Tinder Box,{" "}
              {retainer.equipment.gear.map((g, i) =>
                i !== retainer.equipment.gear.length - 1 ? g + ", " : g
              )}
            </div>

            <div>Armor: {retainer.equipment.armor}</div>
            <div>
              Weapons:{" "}
              {retainer.equipment.weapons.map((w, i) =>
                i === retainer.equipment.weapons.length - 1 ? w : w + ", "
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default GenerateRetainer;
