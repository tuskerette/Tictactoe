'use strict';
var Tictactoe = Tictactoe || {};

// determine the players and
// make a function to alternate the turns
Tictactoe.players = ["X", "O"];
var player = 0;
Tictactoe.turn = function () {
  player = 1 - player;
  return player;
};

// make a property of the object called game over equals to false by default and flags the winning cases and the tie case becoming true.
Tictactoe.gameOver = false;

// make a function to determine the winner
Tictactoe.checkForWinner = function(token) {
  var winner;
    if (Tictactoe.moves[0] === token &&
      Tictactoe.moves[1] === token &&
      Tictactoe.moves[2] === token) {
      winner = token;
    } else if (Tictactoe.moves[3] === token &&
      Tictactoe.moves[4] === token &&
      Tictactoe.moves[5] === token) {
      winner = token;
    } else if (Tictactoe.moves[6] === token &&
      Tictactoe.moves[7] === token &&
      Tictactoe.moves[8] === token) {
      winner = token;
    } else if (Tictactoe.moves[0] === token &&
      Tictactoe.moves[3] === token &&
      Tictactoe.moves[6] === token) {
      winner = token;
    } else if (Tictactoe.moves[1] === token &&
      Tictactoe.moves[4] === token &&
      Tictactoe.moves[7] === token) {
      winner = token;
    } else if (Tictactoe.moves[2] === token &&
      Tictactoe.moves[5] === token &&
      Tictactoe.moves[8] === token) {
      winner = token;
    } else if (Tictactoe.moves[0] === token &&
      Tictactoe.moves[4] === token &&
      Tictactoe.moves[8] === token) {
      winner = token;
    } else if (Tictactoe.moves[2] === token &&
      Tictactoe.moves[4] === token &&
      Tictactoe.moves[6] === token) {
      winner = token;
    }
    if(winner) {
      $('#winner').show();
      $('#winner').addClass('animated bounce');
      $('#winner').html('"' + token + '" WINS!');
      Tictactoe.gameOver = true;
    }
    return winner;
  };

// make a function that determines if it is a tie
Tictactoe.endOfGame = function() {
  if (Tictactoe.count === 9) {
    Tictactoe.gameOver = true;
  }
};


Tictactoe.flipcoin = function() {
  $('.flipcoin').show();
  $('#coin').addClass('animated flip');
  var getRandom = function() {
    return Math.random();
  }
  var win = getRandom();
  if (win >= 0.5) {
    win = "Heads";
  } else {
    win = "Tails";
  }

  $('#coin').one("click", function() {
    $('#coin').html('<h2><br />' + win + '</h2>');
  });

  $('#close').show();
  $('#close').html("Alright, let's play!");
  $('#close').on("click", function() {
   $('.flipcoin').hide();
 });
}














