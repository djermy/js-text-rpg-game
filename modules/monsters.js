import { locations } from "./locations.js";
import { playerStats } from "./player.js";
import {
  monsterStats,
  monsterName,
  monsterHealthText,
  text,
  healthText,
  weapons,
  goldText,
  xpText,
} from "./constants.js";

const monsters = {
  slime: {
    id: 0,
    name: "slime",
    level: 2,
    health: 15,
  },
  fangedBeast: {
    id: 1,
    name: "fanged beast",
    level: 8,
    health: 60,
  },
  dragon: {
    id: 2,
    name: "dragon",
    level: 20,
    health: 300,
  },
};

let monsterHealth;

export function fightSlime() {
  goFight(monsters.slime);
}

export function fightBeast() {
  goFight(monsters.fangedBeast);
}

export function fightDragon() {
  goFight(monsters.dragon);
}

export function goFight(monster) {
  update(locations[3]);
  monsterHealth = monster.health;
  monsterStats.style.display = "block";
  monsterName.innerText = monster.name;
  monsterHealthText.innerText = monsterHealth;
}

export function attack(monster) {
  text.innerText = `The ${monster.name} attacks.`;
  text.innerText += `You attack it with your ${playerStats.currentWeapon.get()}.`;
  health -= getMonsterAttackValue(monster.level);
  if (isMonsterHit()) {
    monsterHealth -=
      weapons[playerStats.currentWeapon.get()].power +
      Math.floor(Math.random() * playerStats.xp.get()) +
      1;
  } else {
    text.innerText += " You miss.";
  }
  healthText.innerText = playerStats.health.get();
  monsterHealthText.innerText = monsterHealth;
  if (playerStats.health.get() <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    if (monster.name === "dragon") {
      winGame();
    } else {
      defeatMonster();
    }
  }
  if (Math.random() <= 0.1 && playerStats.inventory.get().length !== 1) {
    text.innerText += ` Your ${playerStats.inventory.set(null, "--")} breaks.`;
    playerStats.currentWeapon.set("-");
  }
}

export function dodge(monster) {
  text.innerText = `You dodge the attack from the ${monster.name}`;
}

export function getMonsterAttackValue(monster) {
  const hit =
    monster.level * 5 - Math.floor(Math.random() * playerStats.xp.get());
  console.log(hit);
  return hit > 0 ? hit : 0;
}

function isMonsterHit() {
  return Math.random() > 0.2 || playerStats.health.get() < 20;
}

export function defeatMonster(monster) {
  playerStats.gold.set(Math.floor(monster.level * 6.7), "+");
  playerStats.xp.set(monster.level, "+");
  goldText.innerText = playerStats.gold.get();
  xpText.innerText = playerStats.xp.get();
  update(locations[4]);
}

export function lose() {
  update(locations[5]);
}

export function winGame() {
  update(locations[6]);
}

export function restart() {
  playerStats.reset();
  goldText.innerText = playerStats.gold.get();
  healthText.innerText = playerStats.health.get();
  xpText.innerText = playerStats.xp.get();
  goTown();
}
