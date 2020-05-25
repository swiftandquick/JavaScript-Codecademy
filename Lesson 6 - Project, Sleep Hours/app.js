const getSleepHours = day => {
  switch (day) {
    case 'monday': 
    case 'tuesday': 
    case 'wednesday': 
    case 'thursday': 
    case 'friday': 
      return 8; 
    case 'saturday':
    case 'sunday':
      return 9;
  }
};

/* You can return the result without curly braces and return command.  
Call the getSleepHours 7 times then add the daily sleeping hours together. */
const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'); 

// You can return the result without curly braces and return command.  
const getIdealSleepHours = idealHours => idealHours * 7;

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  // Ideal sleep hours is 8 hours per day.  
  const idealSleepHours = getIdealSleepHours(8);
	// Use let instead of const since viarable will change.  
  let suggestion; 
  let hour_difference = 0; 
  // You can put console.log inside a function, but I return it instead.  
  if (actualSleepHours === idealSleepHours) {
    suggestion = 'You have a perfect amount of sleep.';
    return suggestion; 
  } else if (actualSleepHours > idealSleepHours) {
    hour_difference = actualSleepHours - idealSleepHours;
    suggestion = 'You sleep more than you should be.\n' + "You sleep " + hour_difference + " more than other people."; 
    return suggestion;
  } else {
    hour_difference = idealSleepHours - actualSleepHours;
    suggestion = 'You should get some rest.\n' + "You sleep " + hour_difference + " less than other people";
    return suggestion;
  }
};

/*
console.log(getSleepHours('monday'));
console.log(getSleepHours('tuesday'));
console.log(getSleepHours('wednesday'));
console.log(getSleepHours('thursday'));
console.log(getSleepHours('friday'));
console.log(getSleepHours('saturday'));
console.log(getSleepHours('sunday'));
*/

console.log("You slept for " + getActualSleepHours() + " hours last week.");
console.log("The ideal weekly sleep hours is " + getIdealSleepHours() + ".");
console.log(calculateSleepDebt());