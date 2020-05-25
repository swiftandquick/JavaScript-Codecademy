const team = {
  _players: [
    { firstName: 'John', lastName: 'Wick', age: 30},
    { firstName: 'Tony', lastName: 'Stark', age: 50},
    { firstName: 'James', lastName: 'Camera', age: 80}
  ],
  _games: [
    { opponent: 'Z Fighters', teamPoints: 42, opponentPoints: 35},
    { opponent: 'Konoha 11', teamPoints: 23, opponentPoints: 30},
    { opponent: 'Gotei 13', teamPoints: 15, opponentPoints: 16}
  ],
  
  // Use getter method to retrieve player and opponent information.  
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  // Add players and opponents to the array via push method.  
  addPlayers(firstName, lastName, age) {
    let player = {
      firstName: firstName, 
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },  
  addGame(oppName, points, oppPoints) {
    const game = {
      opponent: oppName, 
      points: points,
      opponentPoints: oppPoints
    }
    this.games.push(game);
  }
}

team.addPlayers('Goku', 'Black', 52);
team.addPlayers('Mother', 'Russia', 30);
team.addPlayers('Diana', 'Prince', 34);
console.log("\nPlayer database: ");
console.log(team.players);

team.addGame("Straw Hat Grand Fleet", 39, 19);
team.addGame("Guardians of the Galaxy", 24, 24);
team.addGame("Sinister Six", 19, 42);
console.log("\nGame database: ");
console.log(team.games);