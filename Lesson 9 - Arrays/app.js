let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Remove last element. 
secretMessage.pop();
// console.log(secretMessage);

// Check array length. 
secretMessage.length;
// console.log(secretMessage);

// Add an element in the end. 
secretMessage.push('Program');
// console.log(secretMessage);

// Change the content on an index.  
secretMessage[7] = 'right';
// console.log(secretMessage);

// Remove first element.  
secretMessage.shift();
// console.log(secretMessage);

// Add an element at the start.  
secretMessage.unshift('Programming');
// console.log(secretMessage);

// Replace a part of the elements with a new string.  
secretMessage.splice(6, 5, 'know');
// console.log(secretMessage);

// Combine the message, separate the elements with space.  
console.log(secretMessage.join(' '));