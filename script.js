// Create a rock paper scissors game in which the user
// plays with the computer

const array = ["rock", "paper", "scissors"];
let computerSelection = ""

// randomly returns 'Rock' 'Paper' or 'Scissors'
function computerPlay() {
  let randInt = Math.floor(Math.random() * (2 + 1));
  computerSelection = array[randInt];
  return computerSelection;
};


//  player input
let playerInput = ""
let playerSelection = ""

// scorekeeping
let wins = 0
let losses = 0
let ties = 0

// Final Scores
let playerWins = 0
let computerWins = 0

// Takes two parameters (playerSelection and computerSelection)
// and returns a string that declares the winner of the round
// Take player input and compare to computerSelection

// Helper functions for easier readability of playRound function

function playRock() {
  switch (computerSelection) {
    case "rock":
      console.log("It's a Tie!");
      ties = ties + 1
      break;
    case "paper":
      console.log("You Lose! Paper beats Rock!");
      losses = losses + 1
      computerWins = computerWins + 1
      break;
    case "scissors":
      console.log("You Win! Rock beats Scissors!");
      wins = wins + 1
      playerWins = playerWins + 1
      break;
    default:
      console.log("Error. Try Again.");
  }
};

function playPaper() {
  switch (computerSelection) {
    case "rock":
      console.log("You Win! Paper beats Rock!");
      wins = wins + 1
      playerWins = playerWins + 1
      break;
    case "paper":
      console.log("It's a Tie!");
      ties = ties + 1
      break;
    case "scissors":
      console.log("You Lose! Scissors beat Paper!");
      losses = losses + 1
      computerWins = computerWins + 1
      break;
    default:
      console.log("Error. Try Again.");
  }
};

function playScissors() {
  switch (computerSelection) {
    case "rock":
      console.log("You Lose! Rock beats Scissors!");
      losses = losses + 1
      computerWins = computerWins + 1
      break;
    case "paper":
      console.log("You Win! Scissors beat Paper!");
      wins = wins + 1
      playerWins = playerWins + 1
      break;
    case "scissors":
      console.log("It's a Tie!");
      ties = ties + 1
      break;
    default:
      console.log("Error. Try Again.");
  }
};

// Main Function

function playRound() {
  computerPlay();

  playerInput = prompt("Rock, paper, or scissors?");

  playerSelection = playerInput.toLowerCase();

  switch (playerSelection) {
    // If player chooses rock
    case "rock":
      playRock();
      break;
      // If player chooses paper
    case "paper":
      playPaper();
      break;
      // if player chooses scissors
    case "scissors":
      playScissors();
      break;
    default:

  }
};

//  Function to play 5 rounds of the game

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection)
  }
  // message like: You win with x wins, y losses and z ties
  if (playerWins > computerWins) {
    console.log("You win the game!");
  } else if (playerWins < computerWins) {
    console.log("You lose the game!");
  } else if (playerWins === computerWins) {
    console.log("You tie the game!");
  }

};

console.log(game());