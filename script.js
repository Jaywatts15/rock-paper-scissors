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
  switch (playerSelection) {
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

console.log(playRound(playerSelection, computerSelection));