
'use strict';
var Tictactoe = Tictactoe || {};

$(document).ready(function(){

<<<<<<< Updated upstream



=======
  Tictactoe.moves = [];


  $('#gameboard div').on("click", function(e) {
    turn();
    var token;
    if (player === 0) {
      token = "O";

    } else {
      token = "X";
    }

    Tictactoe.moves[$(this).data('index')] = token;
    $(this).html(token);

    if (Tictactoe.getWinner(token)) {
      return winner;
    } else {
      console.log("This could be a tie, but I am not sure yet");
    };



    $('#yourturn').html('"' + players[player] + '" is your turn!');
>>>>>>> Stashed changes

    $('#yourturn').html('"' + Tictactoe.players[player] + '" is your turn!');
    getWinner();
});

  $('.square').click(function () {
    var x = $(this).data('row');
    var y = $(this).data('col');

<<<<<<< Updated upstream

=======


    console.log(Tictactoe.moves);
>>>>>>> Stashed changes

  });


<<<<<<< Updated upstream
=======




>>>>>>> Stashed changes
});





