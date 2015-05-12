
'use strict';
var myDataRef = new Firebase('https://rfvdorq5z99.firebaseio-demo.com/');

var Tictactoe = Tictactoe || {};

$(document).ready(function(){
// builds an array where the moves will be stored.
// made a variable to keep track of the moves. Will be used to
// determine if a game is a tie.
  Tictactoe.moves = [];
  Tictactoe.count = 0;

// determine whose turn it is, and places the token only once per div
  $('#gameboard div').one("click", function(e) {
    Tictactoe.turn();
    var token;
    if (player === 0) {
      token = "O";
    } else {
      token = "X";
    }
// add the moves to the moves array and determines which player played that square
    Tictactoe.moves[$(this).data('index')] = token;

// puts the token in the div, that is one spot
    $(this).html(token);

// message to prompt the current play to place a token
    $('#yourturn').html('"' + Tictactoe.players[player] + '" it is your turn!');
    $('#yourturn').html('"' + Tictactoe.players[player] + '" it is your turn!');

// checks for winner
    Tictactoe.checkForWinner(token);
    Tictactoe.count++;
    Tictactoe.endOfGame();

// at the end of the game (we have a winner or it is a tie) a button appears instead of the take turn line.
if (Tictactoe.gameOver) {
  $('#yourturn').html('<button type="button">REMATCH?!</button>');
}
});

// when the Rematch button is clicked, the page reloads and we can play a new game.
  $(document).on("click", "button", function() {
    location.reload();
  });
});





