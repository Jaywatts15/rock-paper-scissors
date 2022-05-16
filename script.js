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


// collects player input
let playerInput = ""
let playerSelection = ""

// Takes two parameters (playerSelection and computerSelection)
// and returns a string that declares the winner of the round
// Take player input and compare to computerSelection

function playRound() {
  computerPlay();

  console.log(computerSelection);

  playerInput = prompt("Rock, paper, or scissors?");

  playerSelection = playerInput.toLowerCase();

  switch (playerSelection) {
    // If player chooses rock
    case "rock":
      switch (computerSelection) {
        case "rock":
          console.log("It's a Tie!");
          break;
        case "paper":
          console.log("You Lose! Paper beats Rock!");
          break;
        case "scissors":
          console.log("You Win! Rock beats Scissors!");
          break;
        default:
          console.log("Error. Try Again.");
      }
      break;
      // If player chooses paper
    case "paper":
      switch (computerSelection) {
        case "rock":
          console.log("You Win! Paper beats Rock!");
          break;
        case "paper":
          console.log("It's a Tie!");
          break;
        case "scissors":
          console.log("You Lose! Scissors beat Paper!");
          break;
        default:
          console.log("Error. Try Again.");
      }
      break;
      // if player chooses scissors
    case "scissors":
      switch (computerSelection) {
        case "rock":
          console.log("You Lose! Rock beats Scissors!");
          break;
        case "paper":
          console.log("You Win! Scissors beat Paper!");
          break;
        case "scissors":
          console.log("It's a Tie!");
          break;
        default:
          console.log("Error. Try Again.");
      }
      break;
    default:

  }
};

//  Function to play 5 rounds of the game

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(window.playerSelection, computerSelection)
  }
}

console.log(game());