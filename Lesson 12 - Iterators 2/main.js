const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

// Choose a method that will return undefined
// "city" is an index here.  
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
// "city" is an array here.  
const longCities = cities.filter(city => city.length > 7);
console.log();
console.log(longCities.join(' '));
// Prints 'Edinburgh Eskisehir Medellin Yokohama'.  

// Choose a method that will return a single value
// "acc" is the cummulative string, it starts with only "C".  
// "currVal" gets the first index of the word, which is index 0.  
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0];
}, "C");
console.log();
console.log(word);
// Prints 'CODECADEMY'.  

// Choose a method that will return a new array
// "num" is each element inside the array of "nums".  
const smallerNums = nums.map(num => num - 5);
console.log();
console.log(smallerNums);
// Prints '[ -4, 45, 70, 195, 345, 520, 995 ]'.  

// Choose a method that will return a boolean value
// "num" is each element inside the array of "nums".  
const trueOrFalse = nums.every(num => num < 0);
// OR nums.some(num => num < 0);
console.log();
console.log(trueOrFalse);
// Is every number less than 0?  If not, it's false.  

const trueOrFalse2 = smallerNums.some(num => num < 0);
console.log();
console.log(trueOrFalse2);
// Now it should print true, since some smallerNums array has a negative number in -4.  