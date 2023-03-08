
// function that choses between 3 options randomly.
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
    computerSelection = getComputerChoice()
    if (playerSelection === computerSelection) {
      return(`It's a Draw`);
    } else if (
      (playerSelection === `rock` && computerSelection === `scissors`) ||
      (playerSelection === `paper` && computerSelection === `rock`) ||
      (playerSelection === `scissors` && computerSelection === `paper`)
    ) {
      return(`Congratulations, ${playerSelection} beats ${computerSelection} you win!`);
    } else {
      return(`Too bad, ${computerSelection} beats ${playerSelection} you lose!`);
    }
  }

  //game loop
  for (let i = 0; i < 5; i++) {
    console.log(playRound(window.prompt().toLowerCase()));
  }