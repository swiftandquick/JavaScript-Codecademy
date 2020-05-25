let userName = '';

userName ? console.log(`Hello, $(userName)!`) : console.log('Hello!');

userQuestion = "Eight Balls!";
console.log("\n" + userQuestion);

let randomNumber = Math.floor(Math.random() * 8);

console.log("\n" + randomNumber);

let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBalls = "It is certain";
    break;
  case 1:
    eightBalls = "It is decidedly so";
    break;
  case 2:
    eightBalls = "Reply hazy try again";
    break;
  case 3:
    eightBalls = "Cannot predict now";
    break;
  case 4:
    eightBalls = "Do not count on it";
    break;
  case 5:
    eightBalls = "My resources say no";
    break;
  case 6:
    eightBalls = "Outlook not so good";
    break;
  case 7:
    eightBalls = "Signs point to yes";
    break;
  default:  // just in case
    eightBalls = "Value out of bound"; 
    break; 
}

console.log("\n" + eightBalls);