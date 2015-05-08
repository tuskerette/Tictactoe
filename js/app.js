
'use strict';
var Tictactoe = Tictactoe || {};

$(document).ready(function(){



  $('#gameboard div').on("click", function(e) {
    if (player === 0) {
      $(this).html("X");
    } else {
      $(this).html("O");
    }
    turn();

    $('#yourturn').html('"' + Tictactoe.players[player] + '" is your turn!');
    getWinner();
});

  $('.square').click(function () {
    var x = $(this).data('row');
    var y = $(this).data('col');

    Tictactoe.grid[x][y] = Tictactoe.players[player];
    console.log(Tictactoe.grid);

  });


});





