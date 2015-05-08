
'use strict';
var Tictactoe = Tictactoe || {};

$(document).ready(function(){

  Tictactoe.moves = [[],[]];

  $('#gameboard div').on("click", function(e) {
    turn();
    if (player === 0) {
      $(this).html("O");
    } else {
      $(this).html("X");
    }
    $('#yourturn').html('"' + players[player] + '" is your turn!');



    Tictactoe.moves.push($(this).attr('id'));
    console.log(Tictactoe.moves);

  });



});





