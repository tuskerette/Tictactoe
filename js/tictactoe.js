'use strict';
var Tictactoe = Tictactoe || {};

// determine the players and
// make a function to alternate the turns
Tictactoe.players = ["X", "O"];
var player = 0;
Tictactoe.turn = function () {
  player = 1 - player;
  return player;
};


// make a function to determine the winner
Tictactoe.checkForWinner = function(token) {
  var winner;
    if (Tictactoe.moves[0] === token &&
      Tictactoe.moves[1] === token &&
      Tictactoe.moves[2] === token) {
      winner = token;
      alert("Congratulations " + token + ", you won!");
    } else if (Tictactoe.moves[3] === token &&
      Tictactoe.moves[4] === token &&
      Tictactoe.moves[5] === token) {
      winner = token;
      alert("Congratulations " + token + ", you won!");
    } else if (Tictactoe.moves[6] === token &&
      Tictactoe.moves[7] === token &&
      Tictactoe.moves[8] === token) {
      winner = token;
      alert("Congratulations " + token + ", you won!");
    } else if (Tictactoe.moves[0] === token &&
      Tictactoe.moves[3] === token &&
      Tictactoe.moves[6] === token) {
      winner = token;
      alert("Congratulations " + token + ", you won!");
    } else if (Tictactoe.moves[1] === token &&
      Tictactoe.moves[4] === token &&
      Tictactoe.moves[7] === token) {
      winner = token;
      alert("Congratulations " + token + ", you won!");
    } else if (Tictactoe.moves[2] === token &&
      Tictactoe.moves[5] === token &&
      Tictactoe.moves[8] === token) {
      winner = token;
      alert("Congratulations " + token + ", you won!");
    } else if (Tictactoe.moves[0] === token &&
      Tictactoe.moves[4] === token &&
      Tictactoe.moves[8] === token) {
      winner = token;
      alert("Congratulations " + token + ", you won!");
    } else if (Tictactoe.moves[2] === token &&
      Tictactoe.moves[4] === token &&
      Tictactoe.moves[6] === token) {
      winner = token;
      alert("Congratulations " + token + ", you won!");
    }
    return function() {
    if(winner === false) {
      alert("Rematch?");
    } else {
    return winner;
    }
  };
};


















