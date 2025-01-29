let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let inventory = ["stick"];

export const playerStats = {
  xp: {
    get: getXp,
    set: setXp,
  },
  health: {
    get: getHealth,
    set: setHealth,
  },
  gold: {
    get: getGold,
    set: setGold,
  },
  currentWeapon: {
    get: getCurentWeapon,
    set: setCurrentWeapon,
  },
  inventory: {
    get: getInventory,
    set: setInventory,
  },
};

function getXp() {
  return xp;
}

function setXp(newXp, operator) {
  if (operator === "+") {
    xp += newXp;
  } else if (operator === "-") {
    xp -= newXp;
  } else {
    console.error("invalid operator");
  }
}

function getHealth() {
  return health;
}

function setHealth(newHealth, operator) {
  if (operator === "+") {
    health += newHealth;
  } else if (operator === "-") {
    health -= newHealth;
  } else {
    console.error("invalid operator");
  }
}

function getGold() {
  return gold;
}

function setGold(newGold, operator) {
  if (operator === "+") {
    gold += newGold;
  } else if (operator === "-") {
    gold -= newGold;
  } else {
    console.error("invalid operator");
  }
}

function getCurentWeapon() {
  return currentWeapon;
}

function setCurrentWeapon(newWeapon, operator) {
  if (operator === "+") {
    currentWeapon += newWeapon;
  } else if (operator === "-") {
    currentWeapon -= newWeapon;
  } else {
    console.error("invalid operator");
  }
}

function getInventory() {
  return inventory;
}

function setInventory(item, operator) {
  if (operator === "+") {
    inventory.push(item);
  } else if (operator === "-") {
    inventory.pop();
  } else {
    console.error("invalid operator");
  }
}
