
'use strict';
var Tictactoe = Tictactoe || {};

$(document).ready(function(){
// builds an array where the moves will be stored
  Tictactoe.moves = [];

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

// message to prompt the current play to place a token
    $(this).html(token);
    $('#yourturn').html('"' + Tictactoe.players[player] + '" it is your turn!');
    $('#yourturn').html('"' + Tictactoe.players[player] + '" it is your turn!');

// checks for winner
    Tictactoe.checkForWinner(token);
    });
});





