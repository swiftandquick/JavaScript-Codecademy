const robot = {
  model: '1E78V2',
  energyLevel: 100,
  /* The this keyword references the calling object which provides access to the calling object’s properties.
  Arrow function does not work with the 'this' keyword, you have to write function in the following format.  */
  provideInfo() { 
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};

console.log(robot.provideInfo());