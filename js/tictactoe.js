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


// TDD attempt at creating the checkForWinner function
// Tictactoe.checkForWinner = function(token) {
//   var winner;
//   return winner;
// };


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
    if(!winner && Tictactoe.turnCount === 9) {
      alert("Rematch?");
    } else {
    return winner;
    }
  };
};


// creates a variable that keep count of the turns
    Tictactoe.turnCount = function(){
    var count = [];
      for (var i = 0; i < Tictactoe.turn.length; i ++) {
        count += 1;
      };
      return count;
}
console.log(Tictactoe.turnCount());


// make a function to clear the board. A button will appear when the case is matched: checkForWinner is true or tie.
// Clear the board and restarts the game


















