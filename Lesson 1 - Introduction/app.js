const kelvin = 0;
// Set a constant varaible kelvin to 0.  
const celsius = kelvin - 273;
// Convert kelvin to celsius.  
let fahrenheit = celsius * (9 / 5) + 32
// Convert fahrenheit to celsius.  
fahrenheit = Math.floor(fahrenheit);
// Round the fahrenheit to the nearest lower integer. 
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33 / 100);
// Convert fahrenheit to newton.  
newton = Math.floor(newton);
// Round down. 
console.log(`The temperature is ${newton} degrees Newton.`);