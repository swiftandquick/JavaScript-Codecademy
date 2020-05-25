let raceNumber = Math.floor(Math.random() * 1000);

const isEarlyRunner = false;
const runnerAge = 23; 

if (runnerAge > 18 && isEarlyRunner) {
  raceNumber += 1000; // ensure adult raceNumber is above 1000.  
  console.log(`Contestant number ${raceNumber}, your race starts at 9:30 am.`);
} else if (runnerAge > 18 && !isEarlyRunner) {
  raceNumber += 1000; // ensure adult raceNumber is above 1000.  
  console.log(`Contestant number ${raceNumber}, your race starts at 11:00 am.`);
} else if (runnerAge < 18) { 
  console.log(`Contestant number ${raceNumber}, your race starts at 12:30 pm.`);
} else { // some runners are exactly 18 years old
  console.log('Please see the registration desk.');
}