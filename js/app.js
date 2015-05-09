
'use strict';
var Tictactoe = Tictactoe || {};

$(document).ready(function(){

  Tictactoe.moves = [];


  $('#gameboard div').on("click", function(e) {
    Tictactoe.getWinner(token);
    Tictactoe.turn();
    var token;
    if (player === 0) {
      token = "O";
    } else {
      token = "X";
    }

    Tictactoe.moves[$(this).data('index')] = token;
    $(this).html(token);

    Tictactoe.getWinner(token);

    $('#yourturn').html('"' + Tictactoe.players[player] + '" is your turn!');
    $('#yourturn').html('"' + Tictactoe.players[player] + '" is your turn!');
    Tictactoe.getWinner();
  });

  $('.square').click(function () {
    var x = $(this).data('row');
    var y = $(this).data('col');

    console.log(Tictactoe.moves);


  });

});





