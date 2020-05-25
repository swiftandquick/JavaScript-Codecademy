let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below

let greenEnergy = obj => {
  // Replace fuel type to avocado oil via pass by reference.  
  obj['Fuel Type'] = 'avocado oil';
}

let remotelyDisable = obj => {
  // Create a new property via pass by reference.  
  obj.disabled = true;
}

greenEnergy(spaceship);

remotelyDisable(spaceship);

console.log(spaceship);