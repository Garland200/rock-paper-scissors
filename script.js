// Getting references to elements
const choices = document.querySelectorAll('.choice');
const message = document.getElementById('message');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;

// Add event listeners to each choice button
choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const playerChoice = choice.getAttribute('data-choice');
    playGame(playerChoice);
  });
});

// Function to play one round of the game
function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);
  updateScores(result);
  displayResult(result, playerChoice, computerChoice);
}

// Function to randomly select the computer's choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(player, computer) {
  if (player === computer) {
    return 'tie';
  }
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'scissors' && computer === 'paper') ||
    (player === 'paper' && computer === 'rock')
  ) {
    return 'player';
  }
  return 'computer';
}

// Function to update the scores
function updateScores(result) {
  if (result === 'player') {
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
  } else if (result === 'computer') {
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
  }
}

// Function to display the result of the round
function displayResult(result, playerChoice, computerChoice) {
  if (result === 'tie') {
    message.textContent = `It's a tie! Both chose ${playerChoice}.`;
  } else if (result === 'player') {
    message.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
  } else {
    message.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
  }
}
