"use strict";

let turnScore = 0;
let playerOneTurn = true;
let globalScore = { playerOne: 0, playerTwo: 0 };

// Roll dice button
const rollDiceButton = document.querySelector(".roll-dice");
rollDiceButton.addEventListener("click", rollDice);
function rollDice() {
  let diceResult = Math.trunc(Math.random() * 6 + 1);
  let diceImage = document.querySelector(".dice-outcome");
  console.log(diceResult);
  document.querySelector(".dice-outcome-container").classList.remove("hidden");
  document.querySelector("img").classList.remove("hidden");

  if (diceResult === 1) {
    turnScore = 0;
    turnLogic(playerOneTurn);
    playerOneTurn = !playerOneTurn;
  } else {
    turnScore = turnScore + diceResult;
    turnLogic(playerOneTurn);
  }

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

function turnLogic(playerOneTurn) {
  if (playerOneTurn) {
    document.querySelector(".left-side .turn-score").textContent = turnScore;
  } else {
    document.querySelector(".right-side .turn-score").textContent = turnScore;
  }
}

// Hold button
const holdButton = document.querySelector(".hold");
holdButton.addEventListener("click", holdLogic);
function holdLogic() {
  if (playerOneTurn) {
    globalScore["playerOne"] = globalScore["playerOne"] + turnScore;
    turnScore = 0;
    document.querySelector(".left-side .final-score").textContent =
      globalScore["playerOne"];
    playerOneTurn = !playerOneTurn;
  } else {
    globalScore["playerTwo"] = globalScore["playerTwo"] + turnScore;
    turnScore = 0;
    document.querySelector(".right-side .final-score").textContent =
      globalScore["playerTwo"];
    playerOneTurn = !playerOneTurn;
  }
  document.querySelector("img").classList.add("hidden");
}
