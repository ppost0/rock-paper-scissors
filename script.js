
//declarations
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const resultsList = document.querySelector('.resultslist');
const scoreboard = document.querySelector('.scoreboard');
const playerScoreDisplay = document.querySelector('.playerScore');
const computerScoreDisplay = document.querySelector('.computerScore');
const playerScoreNumber = document.querySelector('.playerScoreNumber');
const computerScoreNumber = document.querySelector('.computerScoreNumber');
const matchOutcome = document.querySelector('.matchoutcome');
const playAgainBtn = document.querySelector('.playagainbtn');
const playerChoices = document.querySelectorAll('.playerchoice');
const matchHistoryContainer = document.querySelector('.matchhistorycontainer');
const matchHistoryList =  document.querySelector('.matchhistorylist');

let playerScore = 0;
let computerScore = 0;



//play again button hidden until game is over
playAgainBtn.style.visibility = 'hidden';




//runs when player makes a choice
function playerSelect(selection) {
  const result = document.createElement('li');
  result.textContent = `${playRound(selection)}`;
  if (result.textContent.includes('won')) {
    playerScore++;
    playerScoreNumber.textContent++;
    if (playerScore === 5 && playerScore > computerScore) {
      matchOutcome.textContent = `Victory! You win ${playerScore} to ${computerScore}!`
      playAgainBtn.style.visibility = 'visible';
      playerChoices.forEach((choice) => choice.disabled = true);
      let match = document.createElement('li');
      match.textContent = `Victory ${playerScore} to ${computerScore}`;
      matchHistoryList.appendChild(match);
    }
  } else if (result.textContent.includes('lost')) {
    computerScore++;
    computerScoreNumber.textContent++;
    if (computerScore === 5 && computerScore > playerScore) {
      matchOutcome.textContent = `Defeat! You lose ${computerScore} to ${playerScore}!`
      playAgainBtn.style.visibility = 'visible';
      playerChoices.forEach((choice) => choice.disabled = true);
      let match = document.createElement('li');
      match.textContent = `Defeat ${computerScore} to ${playerScore}`;
      matchHistoryList.appendChild(match);
    }
  }
  resultsList.appendChild(result);


  console.log(result.textContent);
}



//player selection event listeners

rock.addEventListener('click', () => playerSelect('rock'));

paper.addEventListener('click', () => playerSelect('paper'));

scissors.addEventListener('click', () => playerSelect('scissors'));

playAgainBtn.addEventListener('click', () => restartGame());




// Computer's random selection
function computerPlay() {
  let options = ['rock', 'paper', 'scissors'];
  let index = Math.floor(Math.random() * 3);
  return options[index];
}



// Play out a round between the user and computer
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection ||
  prompt('Rock, paper, or scissors?').toLowerCase();

  computerSelection = computerPlay();

  let options = ['rock', 'paper', 'scissors']

  if (playerSelection === 'rock') {
    if (computerSelection === 'rock') {
      return 'Round tied with rock!';
    }
    if (computerSelection === 'paper') {
      return 'Round lost! Paper beats rock';
    }
    if (computerSelection === 'scissors') {
      return 'Round won! Rock beats scissors';
    }
  }
  if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      return 'Round won! Paper beats rock';
    }
    if (computerSelection === 'paper') {
      return 'Round tied with paper!';
    }
    if (computerSelection === 'scissors') {
      return 'Round lost! Scissors beat paper';
    }
  }
  if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      return 'Round lost! Rock beats scissors';
    }
    if (computerSelection === 'paper') {
      return 'Round won! Scissors beat paper';
    }
    if (computerSelection === 'scissors') {
      return 'Round tied with scissors!';
    }
  }
}





//doesnt clear match history
function restartGame() {
  playAgainBtn.style.visibility = 'hidden';
  playerScore = 0;
  computerScore = 0;
  playerScoreNumber.textContent = 0;
  computerScoreNumber.textContent = 0;
  matchOutcome.textContent = '';
  resultsList.innerHTML = '';
  console.clear();
  playerChoices.forEach((choice) => choice.disabled = false);
}






