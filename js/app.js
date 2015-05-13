
'use strict';
var myDataRef = new Firebase('https://rfvdorq5z99.firebaseio-demo.com/');

var Tictactoe = Tictactoe || {};

$(document).ready(function(){
// before the game starts, show the flipcoin div to decide who goes
// first (so will be player "X")
Tictactoe.flipcoin();

// The game
Tictactoe.game();

// when clicking on the rematch button we clear the board and start a new game
 $(document).on("click", "button", function() {
    Tictactoe.clearGame();
    Tictactoe.game();
  });

});








