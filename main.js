import { goCave, goStore } from "./modules/locations.js";
import { fightDragon } from "./modules/monsters.js";
import { button1, button2, button3 } from "./modules/constants.js";

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
