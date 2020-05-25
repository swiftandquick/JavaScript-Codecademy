const robot = {
  // Default, non-function properties should have underscore.  
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  // Lets give it a energy level getter.  
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  /* Since we want to have the energy level to be modified as the robot 
   * performs different tasks, we will give it a setter.  
  */
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0) {
      this._numOfSensors = num;
    } else {
      return 'Pass in a number that is greater than or equal to 0';
    }
  }
};

robot.numOfSensors = 100;
console.log(robot.numOfSensors);