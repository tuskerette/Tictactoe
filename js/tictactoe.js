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

// make a property of the object called game over equals to false by default and flags the winning cases and the tie case becoming true.
Tictactoe.gameOver = false;

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
    if(winner) {
      Tictactoe.gameOver = true;
    }
    return winner;
  };

// make a function that determines if it is a tie
Tictactoe.endOfGame = function() {
  if (Tictactoe.count === 9) {
    Tictactoe.gameOver = true;
  }
};


// A button appears in app.js when either checkForWinner is true or countTurns === 9 === true;



















