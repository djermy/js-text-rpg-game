import { playerStats } from "./player.js";
import { goldText, healthText, text, weapons, button2 } from "./constants.js";

export function buyHealth() {
  if (playerStats.gold.get() >= 10) {
    playerStats.gold.set(10, "-");
    playerStats.health.set(10, "+");
    goldText.innerText = playerStats.gold.get();
    healthText.innerText = playerStats.health.get();
  } else {
    text.innerText = "You do not have enough gold to buy health.";
  }
}

export function buyWeapon() {
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "You now have a " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "You do not have enough gold to buy a weapon.";
    }
  } else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellWeapon;
  }
}

function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift();
    text.innerText = "You sold a " + currentWeapon + ".";
    text.innerText += " In your inventory you have: " + inventory;
  } else {
    text.innerText = "Don't sell your only weapon!";
  }
}
