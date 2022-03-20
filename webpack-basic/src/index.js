import { Hw_10_1 } from "./js/hw_10_1_changecolors";
import { Hw_10_2_1 } from "./js/hw_10_2_1";
import { Hw_10_2_2 } from "./js/hw_10_2_2";
import { Hw_10_2_3 } from "./js/hw_10_2_3";
import { Timer } from "./js/hw_10_3_timer";

//==================================================================
let timeout = 1000;
let hw_10_1 = new Hw_10_1(timeout);
hw_10_1.init();

//==================================================================
let hw_10_2_1 = new Hw_10_2_1();
hw_10_2_1.delay(2000).then(hw_10_2_1.logger);
hw_10_2_1.delay(1000).then(hw_10_2_1.logger);
hw_10_2_1.delay(1500).then(hw_10_2_1.logger);

//==================================================================
const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];
let hw_10_2_2 = new Hw_10_2_2();
hw_10_2_2.toggleUserState(users, "Mango").then(hw_10_2_2.logger());
hw_10_2_2.toggleUserState(users, "Lux").then(hw_10_2_2.logger());

//==================================================================
let hw_10_2_3 = new Hw_10_2_3();
hw_10_2_3
  .makeTransaction({ id: 70, amount: 150 })
  .then(hw_10_2_3.logSuccess)
  .catch(hw_10_2_3.logError);

hw_10_2_3
  .makeTransaction({ id: 71, amount: 230 })
  .then(hw_10_2_3.logSuccess)
  .catch(hw_10_2_3.logError);

hw_10_2_3
  .makeTransaction({ id: 72, amount: 75 })
  .then(hw_10_2_3.logSuccess)
  .catch(hw_10_2_3.logError);

hw_10_2_3
  .makeTransaction({ id: 73, amount: 100 })
  .then(hw_10_2_3.logSuccess)
  .catch(hw_10_2_3.logError);

//==================================================================
let promotion = new Date("April 01, 2022 00:00:00");
let timer = new Timer(promotion);
timer.init();
