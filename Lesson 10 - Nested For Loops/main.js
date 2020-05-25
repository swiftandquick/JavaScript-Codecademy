let input = 'You guys need to eat healthy!';
const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
  // console.log(input[i]);
  for (let k = 0; k < vowels.length; k++) {
    // console.log(vowels[k]);
    if (input[i] === vowels[k]) {
      resultArray.push(input[i]);
      if (input[i] === 'e' || input[i] === 'u') {
        resultArray.push(input[i]);
      }
    }
  }
}

// Join array elements together into a single string, then capitalize.  
console.log(resultArray.join('').toUpperCase());