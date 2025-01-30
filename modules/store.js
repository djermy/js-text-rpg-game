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
  if (playerStats.currentWeapon.get() < weapons.length - 1) {
    if (playerStats.gold.get() >= 30) {
      playerStats.gold.set(30, "-");
      playerStats.currentWeapon.set(1, "+");
      goldText.innerText = playerStats.gold.get();
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "You now have a " + newWeapon + ".";
      playerStats.inventory.set(newWeapon, "+");
      text.innerText +=
        " In your inventory you have: " + playerStats.inventory.get();
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
  if (playerStats.inventory.get().length > 1) {
    playerStats.gold.set(15, "+");
    goldText.innerText = playerStats.gold.get();
    let currentWeapon = playerStats.inventory.set(null, "-");
    text.innerText = "You sold a " + currentWeapon + ".";
    text.innerText +=
      " In your inventory you have: " + playerStats.inventory.get();
  } else {
    text.innerText = "Don't sell your only weapon!";
  }
}
