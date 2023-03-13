//lets make a scoreboard
const playerScoreboard = document.getElementById("player-score");
const computerScoreboard = document.getElementById("computer-score");
const result = document.getElementById("result");
result.textContent = "Let's play";
let computerScore = 0;
let playerScore = 0;
playerScoreboard.textContent = `Player: 0`;
computerScoreboard.textContent = `Computer: 0`;

// random number generator with a max of 3
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return `rock`;
  } else if (choice === 1) {
    return `paper`;
  } else return `scissors`;
}

//game core
function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  if (playerSelection === computerSelection) {
    result.textContent = `It's a draw`;
  } else if (
    (playerSelection === `rock` && computerSelection === `scissors`) ||
    (playerSelection === `paper` && computerSelection === `rock`) ||
    (playerSelection === `scissors` && computerSelection === `paper`)
  ) {
    result.textContent = `Congratulations, ${playerSelection} beats ${computerSelection}`;
    return 1;
  } else {
    result.textContent = `Too bad, ${computerSelection} beats ${playerSelection}`;
    return 2;
  }
}

// add a point to the score
function score(point) {
  if (point === 1) {
    playerScore++;
    playerScoreboard.textContent = `Player: ${playerScore}`;
  } else if (point === 2) {
    computerScore++;
    computerScoreboard.textContent = `Computer: ${computerScore}`;
  }
}

// resets the score
function reset() {
  playerScoreboard.textContent = `Player: 0`;
  computerScoreboard.textContent = `Computer: 0`;
  computerScore = 0;
  playerScore = 0;
}

//add the event listeners

const weapons = document.querySelectorAll(".btn");
weapons.forEach((weapon) =>
  weapon.addEventListener("click", (e) => {
    console.log(e)
    let round = playRound(e.srcElement.attributes[1].value); // send the evern as a paremeter to playRound function
    console.log(e.srcElement.attributes[1].value)
    score(round); // take the playRound return value as a parameter to the score function
    if (playerScore === 5) {
      result.textContent = `CONGRATULATIONS, YOU WIN`;
      reset();
    } else if (computerScore === 5) {
      result.textContent = `OH NO, YOU LOST`;
      reset();
    }
    if (result.textContent === `CONGRATULATIONS, YOU WIN` || result.textContent === `OH NO, YOU LOST`){
      result.classList.add('red');
    }
    else {
      result.classList.remove('red');
    }
  })
);
