// Create a rock paper scissors game in which the user
// plays with the computer

const array = ["rock", "paper", "scissors"];

// randomly returns 'Rock' 'Paper' or 'Scissors'
function computerPlay() {
  let randInt = Math.floor(Math.random() * (2 + 1));
  window.computerSelection = array[randInt]; //Global variable
};
computerPlay();
console.log(computerSelection);

// collects player input
let playerInput = prompt("Rock, paper, or scissors?");
let playerSelection = playerInput.toLowerCase();

// Takes two parameters (playerSelection and computerSelection)
// and returns a string that declares the winner of the round
// Take player input and compare to computerSelection

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      console.log("You Lose! Paper beats Rock!");
    } else if (computerSelection === "scissors") {
      console.log("You Win! Rock beats scissors!");
    } else if (computerSelection === "rock") {
      console.log("It's a tie!");
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      console.log("You Lose! Scissors beats Paper!");
    } else if (computerSelection === "rock") {
      console.log("You Win! Paper beats Rock!");
    } else if (computerSelection === "paper") {
      console.log("It's a tie!");
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      console.log("You Lose! Rock beats Scissors!");
    } else if (computerSelection === "Paper") {
      console.log("You Win! Scissors beats Paper!");
    } else if (computerSelection === "scissors") {
      console.log("It's a tie!");
    }
  }
};

console.log(playRound(playerSelection, computerSelection));