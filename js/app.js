
'use strict';
var Tictactoe = Tictactoe || {};

$(document).ready(function(){
// builds an array where the moves will be stored
  Tictactoe.moves = [];

// determine whose turn it is
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

// adds the token to the board
    $(this).html(token);
    $('#yourturn').html('"' + Tictactoe.players[player] + '" it is your turn!');
    $('#yourturn').html('"' + Tictactoe.players[player] + '" it is your turn!');

// checks for winner
    Tictactoe.checkForWinner(token);
  });

});





