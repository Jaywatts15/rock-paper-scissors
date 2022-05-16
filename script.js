// Create a rock paper scissors game in which the user
// plays with the computer

const array = ["Rock", "Paper", "Scissors"];

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
  pass
};