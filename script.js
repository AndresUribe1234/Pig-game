"use strict";

let turnScore = 0;

// Roll dice button
const rollDiceButton = document.querySelector(".roll-dice");
rollDiceButton.addEventListener("click", rollDice);
function rollDice() {
  let diceResult = Math.trunc(Math.random() * 6 + 1);
  let diceImage = document.querySelector(".dice-outcome");
  console.log(diceResult);
  document.querySelector(".dice-outcome-container").classList.remove("hidden");

  if (diceResult === 1) {
    turnScore = 0;
  } else {
    turnScore = turnScore + diceResult;
  }
  console.log(turnScore);

  if (diceResult === 1) {
    diceImage.src = "/Pics/9025599_dice_one_icon.png";
  } else if (diceResult === 2) {
    diceImage.src = "/Pics/9025595_dice_two_icon.png";
  } else if (diceResult === 3) {
    diceImage.src = "/Pics/9025544_dice_three_icon.png";
  } else if (diceResult === 4) {
    diceImage.src = "/Pics/9025598_dice_four_icon.png";
  } else if (diceResult === 5) {
    diceImage.src = "/Pics/9025574_dice_five_icon.png";
  } else if (diceResult === 6) {
    diceImage.src = "/Pics/9025543_dice_six_icon.png";
  }
}
