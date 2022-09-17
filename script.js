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

  if (globalScore.playerOne >= 100 || globalScore.playerTwo >= 100) {
    return;
  }
  document.querySelector(".dice-outcome-container").classList.remove("hidden");
  document.querySelector("img").classList.remove("hidden");
  currentPlayerColor();

  if (diceResult === 1) {
    turnScore = 0;
    turnLogic(playerOneTurn);
    playerOneTurn = !playerOneTurn;
    currentPlayerColor();
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

function currentPlayerColor() {
  if (playerOneTurn) {
    document.querySelector(".left-side").classList.add("current-player");
    document.querySelector(".right-side").classList.remove("current-player");
  } else {
    document.querySelector(".right-side").classList.add("current-player");
    document.querySelector(".left-side").classList.remove("current-player");
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
    document.querySelector(".left-side .turn-score").textContent = "0";
    if (globalScore["playerOne"] >= 100) {
      document.querySelector(".left-side").classList.add("winner");
      document.querySelector(".left-side").classList.remove("current-player");
      document.querySelector("img").classList.add("hidden");
      document
        .querySelector(".left-side .wins-message")
        .classList.remove("hidden");
      document
        .querySelector(".left-side .turn-score-container")
        .classList.add("hidden");
      return;
    }
    playerOneTurn = !playerOneTurn;
    currentPlayerColor();
  } else {
    globalScore["playerTwo"] = globalScore["playerTwo"] + turnScore;
    turnScore = 0;
    document.querySelector(".right-side .final-score").textContent =
      globalScore["playerTwo"];
    document.querySelector(".right-side .turn-score").textContent = "0";
    if (globalScore["playerTwo"] >= 100) {
      document.querySelector(".right-side").classList.add("winner");
      document.querySelector(".right-side").classList.remove("current-player");
      document.querySelector("img").classList.add("hidden");
      document
        .querySelector(".right-side .wins-message")
        .classList.remove("hidden");
      document
        .querySelector(".right-side .turn-score-container")
        .classList.add("hidden");
      return;
    }
    playerOneTurn = !playerOneTurn;
    currentPlayerColor();
  }
  //   document.querySelector("img").classList.add("hidden");
}

// New game button
const newGameButton = document.querySelector(".new-game");
newGameButton.addEventListener("click", newGame);
function newGame() {
  globalScore.playerOne = 0;
  globalScore.playerTwo = 0;
  turnScore = 0;
  playerOneTurn = true;

  document.querySelector(".left-side .final-score").textContent =
    globalScore["playerOne"];
  document.querySelector(".right-side .final-score").textContent =
    globalScore["playerTwo"];
  document.querySelector(".left-side .turn-score").textContent = turnScore;
  document.querySelector(".right-side .turn-score").textContent = turnScore;
  document.querySelector(".left-side").classList.remove("current-player");
  document.querySelector(".right-side").classList.remove("current-player");
  document.querySelector("img").classList.add("hidden");
  document.querySelector(".left-side").classList.remove("winner");
  document.querySelector(".right-side").classList.remove("winner");
  document
    .querySelector(".left-side .turn-score-container")
    .classList.remove("hidden");
  document
    .querySelector(".right-side .turn-score-container")
    .classList.remove("hidden");
  document.querySelector(".left-side .wins-message").classList.add("hidden");
  document.querySelector(".right-side .wins-message").classList.add("hidden");
}
