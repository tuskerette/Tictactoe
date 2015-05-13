
'use strict';
var myDataRef = new Firebase('https://rfvdorq5z99.firebaseio-demo.com/');

var Tictactoe = Tictactoe || {};

$(document).ready(function(){
// before the game starts, we show the flipcoin div to decide who goes
// first (is player "X")
Tictactoe.flipcoin();

// The game
Tictactoe.game();

 $(document).on("click", "button", function() {
    Tictactoe.clearGame();
    Tictactoe.game();
  });

});








