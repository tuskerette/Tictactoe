'use strict';
var Tictactoe = Tictactoe || {};

Tictactoe.players = [1, 2];

var player = 0;
function turn() {
  player = 1 - player;
  return player;
};

Tictactoe.grid = [["", "", ""],
                  ["", "", ""],
                  ["", "", ""]];


var getWinner = function () {
for (var i = 0; i > Tictactoe.length; i++) {
if (Tictactoe.grid[[0,0]] === 1) {
  alert("Winner is X");
}

}

}


// var getWinner = function() {
//   var winner = false;

//   for (var i = 0; i <Tictactoe.moves.length; i++) {

//   }


// };












// function getWinner() {
// var winner;

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













