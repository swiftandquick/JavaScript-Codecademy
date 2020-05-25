/* Arrow method is the preferential option to write functions.  
Alternatively, you can write the following:  
function getUSerChoice(getUserInput) { // Content goes here.  }
*/

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Invalid input.')
  }
};

const getComputerChoice = () => {
  //We have three different outputs, 0, 1, and 2.  
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0: 
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    default:
      return;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  // Ternary operator does not work with return statements.  
  if (userChoice === computerChoice) {
    return 'Tie!';
  } else if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      return 'You won!';
    } else {
      return 'You lost!';
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'You won!';
    } else {
      return 'You lost!';
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return 'You won!';
    } else {
      return 'You lost!';
    }
  } else if (userChoice === 'bomb') {
    return 'You destroyed your opponent, congratulations!';
  }
  else {
    return 'Invalid input(s).';
  }
};

const playGame = () => {
  // Your can change your input here, 'bomb' input is an automatic win.  
  const userChoice = getUserChoice('bomb'); 
  const computerChoice = getComputerChoice();
  console.log('Your choice: ' + userChoice + ".");
  console.log('Computer choice: ' + computerChoice + ".");
  console.log(determineWinner(userChoice, computerChoice));
};

// Call the function playGame();
playGame();

/* Testing functions. 
console.log(getUserChoice('PAPER'));
console.log(getUserChoice('fox'));
console.log(getComputerChoice());
console.log(determineWinner('rock', 'rock'));
console.log(determineWinner('scissors', 'paper'));
console.log(determineWinner('paper', 'scissors'));
console.log(determineWinner('box', 'box2')); */