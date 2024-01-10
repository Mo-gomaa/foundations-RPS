// TODO: Create a function getComputerChoice that randomly returns either 'Rock', 'Paper' or 'Scissors'

// declare an array that contains the three values: rock, paper, scissors
// return a random item from the array
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
}
//  TODO: Create a function that plays a single round of RPS and should take two parameters (playerSelection, computerSelection) and returns a string that declares the winner of the round */
// rock beats scissors, paper beats rock, scissors beat paper
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    playRound();
  }
  if (playerSelection === "scissors" && computerSelection === "Rock") {
    return "You lose Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "Paper") {
    return "You lose Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose Scissors beat Paper";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win Scissors beat Paper";
  } else if (playerSelection === "rock" && computerSelection === "Scissors") {
    return "You win Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win Paper beats Rock";
  }
}
// you should make the playerSelection parameter case-insensitive
// replay the round if ties occur

playerSelection = prompt(
  "Make a choice! Rock, Paper or Scissors?:  "
).toLowerCase();
computerSelection = getComputerChoice();
// call the function
playRound(playerSelection, computerSelection);

// TODO: create game() and Use playRound to play best-of-five game that keeps score a winner or loser at the end
function game() {
  for (let i = 0; i < 6; i++) {
    playRound();
  }
}
