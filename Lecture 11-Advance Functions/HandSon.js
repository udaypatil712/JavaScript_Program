const team = {
  name: "Indian Cricket Team",
  /* this will store an object with two properties -> {id: 1, scores: [10, 34, 80]} */
  players: [
        { id: 1, scores: [10, 14, 80] },
        { id: 2, scores: [10, 34, 80] }
    ],

  display: function () {
    // loop over players and display their id and scores
    for(let i=0;i<this.players.length;i++){
        console.log("id:", this.players[i].id, "scores:", this.players[i].scores);
    }
  },

  addPlayers: function (id) {
    /* assume always a new player is coming with unique id, this function should create 
    a new player with this id and empty scores array, then push this player to players array
    */
    this.players.push({id : id , scores :[]});
  },

  addScore: function (id, score) {
    /* find the player with this id, and push this score to its score array */
    this.players.push({id : id , scores : score});
  },

  averageScore: function (id,aveScore) {
    /* find the player with this id and calculate its avg score and return it*/
    let sum=0;
    let lengthOfScores=0
    let t=0;
   

    for(let i=0;i<this.players.length;i++){
        if(id  === this.players[i].id){
            t=i;
          lengthOfScores=this.players[i].scores.length;
        }
    }
    for(let i=0;i<lengthOfScores;i++){
        sum = sum + this.players[t].scores[i];
    }
    aveScore = (sum / lengthOfScores);
    return aveScore;

  },

  teamAverage: function () {
    //optional
    /* calculate the average of scores of all players combined */
    let matchesOfAllPlayers=0
    let scoresOfAllPlayers=0;
    for(let i = 0 ; i < this.players.length;i++){
        matchesOfAllPlayers += this.players[i].scores.length;
        for(let j = 0 ; j < this.players[i].scores.length ; j++){
           scoresOfAllPlayers += this.players[i].scores[j];
        }
    }
    // console.log(matchesOfAllPlayers);
    // console.log(scoresOfAllPlayers);
    let teamAve = scoresOfAllPlayers / matchesOfAllPlayers;
    console.log({teamAve})
  },
};

// team.display();

// team.addPlayers(3);
// team.display();

// team.addScore(3,[122,23,34]);
// team.display();

// console.log(team.averageScore(1,0));

// team.teamAverage();