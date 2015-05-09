'use strict';
var Tictactoe = Tictactoe || {};

Tictactoe.players = ["X", "O"];

var player = 0;
Tictactoe.turn = function () {
  player = 1 - player;
  return player;
};

Tictactoe.grid = [["", "", ""],
                  ["", "", ""],
                  ["", "", ""]];



  Tictactoe.getWinner = function (token) {
  var winner;
  if (Tictactoe.grid[0] === token &&
      Tictactoe.grid[1] === token &&
      Tictactoe.grid[2] === token) {
      winner = token;
    } else if (Tictactoe.grid[3] === token &&
      Tictactoe.grid[4] === token &&
      Tictactoe.grid[5] === token) {
      winner = token;
    } else if (Tictactoe.grid[6] === token &&
      Tictactoe.grid[7] === token &&
      Tictactoe.grid[8] === token) {
      winner = token;
    } else if (Tictactoe.grid[0] === token &&
      Tictactoe.grid[3] === token &&
      Tictactoe.grid[6] === token) {
      winner = token;
    } else if (Tictactoe.grid[1] === token &&
      Tictactoe.grid[4] === token &&
      Tictactoe.grid[7] === token) {
      winner = token;
    } else if (Tictactoe.grid[2] === token &&
      Tictactoe.grid[5] === token &&
      Tictactoe.grid[8] === token) {
      winner = token;
    } else if (Tictactoe.grid[0] === token &&
      Tictactoe.grid[4] === token &&
      Tictactoe.grid[8] === token) {
      winner = token;
    } else if (Tictactoe.grid[2] === token &&
      Tictactoe.grid[4] === token &&
      Tictactoe.grid[6] === token) {
      winner = token;
  };
  return winner;
};





// for(var i = 0; i < Tictactoe.moves.length; i++) {


//   }
// } //end of for loop


// } //end of getWinner



// };



// winner combinations
// 1, 2, 3
// 4, 5, 6
// 7, 8, 9
// 1, 4, 7
// 2, 5, 8
// 3, 6, 9
// diagonals
// 1, 5, 9
// 3, 5, 7

// if(Tictactoe.moves[i].indexOf('sq1') !== -1 && Tictactoe.moves[i].indexOf('sq2') !== -1 && Tictactoe.moves[i].indexOf('sq3') !== -1) {
//   return winner;
// } else if (Tictactoe.moves[i].indexOf('sq4') !== -1 && Tictactoe.moves[i].indexOf('sq5') !== -1 && Tictactoe.moves[i].indexOf('sq6') !== -1) {
//     return winner;
//   } else if (){













