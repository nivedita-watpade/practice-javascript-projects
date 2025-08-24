// const choices = ['rock', 'paper', 'scissors'];

// // Function: get random computer choice
// function getComputerChoice() {
//   const randomIndex = Math.floor(Math.random() * choices.length);
//   return choices[randomIndex];
// }

// rock beats scissors
// scissors beats paper
// paper beats rock

// =============== Commented code after refactoring =====================

"use strict";

// const btnRock = document.querySelector(".rock-btn");
// const btnPaper = document.querySelector(".paper-btn");
// const btnScissor = document.querySelector(".scissors-btn");
const btnSelect = document.querySelectorAll(".select-btn");
const btnReset = document.querySelector(".reset-btn");
const result = document.querySelector(".result-txt");
const scoreOfPlayer = document.querySelector(".player-score");
const scoreOfComputer = document.querySelector(".computer-score");
const highScoreEl = document.querySelector(".high-score");
const choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let highScore = 0;
console.log(btnSelect);
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function displayWinner(e) {
  //console.log(e.target.textContent.trim());
  const userChoice = e.target.textContent.trim();
  const computerChoice = getComputerChoice();
  if (userChoice === computerChoice) {
    result.textContent = `You both choose ${userChoice} : Its Draw !!`;
    result.style.color = "#e2c539";
  }
  if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Scissors" && computerChoice === "Paper") ||
    (userChoice === "Paper" && computerChoice === "Rock")
  ) {
    result.textContent = `You choose ${userChoice}, Computer choose ${computerChoice}: You Win !!`;
    result.style.color = "#00941a";
    playerScore = playerScore + 1;
    scoreOfPlayer.textContent = playerScore;
  }

  if (
    (userChoice === "Scissors" && computerChoice === "Rock") ||
    (userChoice === "Paper" && computerChoice === "Scissors") ||
    (userChoice === "Rock" && computerChoice === "Paper")
  ) {
    result.textContent = `You choose ${userChoice}, Computer choose ${computerChoice}: You loose !!`;
    result.style.color = "#da0101ff";
    computerScore = computerScore + 1;
    scoreOfComputer.textContent = computerScore;
  }

  if (playerScore > computerScore) {
    highScore = playerScore;
    highScoreEl.textContent = `${highScore} : (Player Score)`;
  } else {
    highScore = computerScore;
    highScoreEl.textContent = `${highScore} : (Computer Score)`;
  }

  // if (userChoice === "Rock" && computerChoice === "Scissors") {
  //   result.textContent = `You choose ${userChoice}, Computer choose ${computerChoice}: You Win !!`;
  // }

  // if (userChoice === "Scissors" && computerChoice === "Paper") {
  //   result.textContent = `You choose ${userChoice}, Computer choose ${computerChoice}: You Win !!`;
  // }
  // if (userChoice === "Paper" && computerChoice === "Rock") {
  //   result.textContent = `You choose ${userChoice}, Computer choose ${computerChoice}: You Win !!`;
  // }

  // if (userChoice === "Scissors" && computerChoice === "Rock") {
  //   result.textContent = `You choose ${userChoice}, Computer choose ${computerChoice}: You loose !!`;
  // }
  // if (userChoice === "Paper" && computerChoice === "Scissors") {
  //   result.textContent = `You choose ${userChoice}, Computer choose ${computerChoice}: You loose !!`;
  // }
  // if (userChoice === "Rock" && computerChoice === "Paper") {
  //   result.textContent = `You choose ${userChoice}, Computer choose ${computerChoice}: You loose !!`;
  // }
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  highScore = 0;
  scoreOfPlayer.textContent = playerScore;
  scoreOfComputer.textContent = computerScore;
  highScoreEl.textContent = highScore;
  result.textContent = `Make your move`;
  result.style.color = "#364153";
}

// btnRock.addEventListener("click", displayWinner);
// btnPaper.addEventListener("click", displayWinner);
// btnScissor.addEventListener("click", displayWinner);

for (let i = 0; i <= btnSelect.length - 1; i++) {
  btnSelect[i].addEventListener("click", displayWinner);
}

btnReset.addEventListener("click", reset);
