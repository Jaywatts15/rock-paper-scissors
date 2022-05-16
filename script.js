// randomly returns 'Rock' 'Paper' or 'Scissors'

const array = ["Rock", "Paper", "Scissors"]

function computerPlay() {
  let randInt = Math.floor(Math.random() * (2 + 1));
  window.computerSelection = array[randInt]
}

computerPlay()

console.log(computerSelection);

// Takes two parameters (playerSelection and computerSelection)
// and returns a string that declares the winner of the round
// Take player input and compare to computerSelection