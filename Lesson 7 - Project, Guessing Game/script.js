/* The JS code here is connected to another JS file called game.js.  
You have to read the codes there to come up with the solution.  
*/

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(targetGuess - humanGuess);
  const computerDifference = Math.abs(targetGuess - computerGuess);
  // Only returns if the following statement is true.  
  return humanDifference <= computerDifference; 
  /* Alternatively, you can do this: 
  if (humanDifference <= computerDifference) {
  	return true;
  } else {
  	return false;
  }
  */
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => currentRoundNumber++;
