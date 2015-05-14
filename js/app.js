
'use strict';
var myDataRef = new Firebase('https://rfvdorq5z99.firebaseio-demo.com/');

var Tictactoe = Tictactoe || {};

$(document).ready(function(){

// first slide
Tictactoe.letsBet();


// when clicking on the rematch button we clear the board and start a new game
 $(document).on("click", "button", function() {
    Tictactoe.champion();
    Tictactoe.clearGame();
    Tictactoe.game();
  });

});








