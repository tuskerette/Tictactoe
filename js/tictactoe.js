'use strict';
var Tictactoe = Tictactoe || {};

Tictactoe.player = 0;
Tictactoe.players = ["X", "O"];
// gameOver becomes true when we have a winner or it is a tie
Tictactoe.gameOver = false;

// score counters
Tictactoe.xScore = 0;
Tictactoe.oScore = 0;

// function to alternate the turns between players
Tictactoe.turn = function () {
  Tictactoe.player = 1 - Tictactoe.player;
  return Tictactoe.player;
};


Tictactoe.game = function () {
// Array where the moves will be stored.
  Tictactoe.moves = [];
// variable used to check if the game is a tie.
  Tictactoe.count = 0;
// determine whose turn it is, and places the token only once per div
  $('#gameboard div').one("click", function(e) {
    Tictactoe.turn();
    var token;
    Tictactoe.player ? token = "X" : token = "O";

// Add the moves to the moves array and determines which player
// played that square
  Tictactoe.moves[$(this).data('index')] = token;
// puts the token in the spot
  $(this).html(token);
// message to prompt the current play to place a token
  $('#yourturn').html('"' + Tictactoe.players[Tictactoe.player] + '" it is your turn!');
  $('#yourturn').html('"' + Tictactoe.players[Tictactoe.player] + '" it is your turn!');


// Checks for winner and finish the game
  Tictactoe.checkForWinner(token);
  Tictactoe.count++;
  Tictactoe.endOfGame();


// At the end of the game (we have a winner or it is a tie) a rematch button apperars.
    if (Tictactoe.gameOver) {
    $('#yourturn').hide();
    $('#rematch').show();
    $('#rematch').html('REMATCH?');
    $('#rematch').addClass('animated bounce');
    }
  });
};

// function with the winning combinations
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

        if(winner === "X") {
        Tictactoe.xScore++;
        $('#xscore').html(Tictactoe.xScore);
          } else if (winner === "O") {
        Tictactoe.oScore++;
        $('#oscore').html(Tictactoe.oScore);
        }
    }

    return winner;
  };

// function that determines if it is a tie
Tictactoe.endOfGame = function() {
  if (Tictactoe.count === 9) {
    Tictactoe.gameOver = true;
  }
};


// reset the board
Tictactoe.clearGame = function() {
  $('#rematch').hide();
  $('#winner').hide();
  $('#yourturn').show();
  $('#gameboard div').html('');
  $('#yourturn').text('Game start! "X" it is your turn!');
  $('#gameboard div').unbind();
  this.gameOver = false;
  this.moves = [];
  this.count = 0;
  this.player = 0;
}



// flip coin function with the coins set to heads or tails
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

  setTimeout(function(){
    getRandom();
    $('#coin').html('<h2><br />' + win + '</h2>');
    }, 2000);

  $('#close').show();
  $('#close').text("OK, let's play! Click here.");
  $('#close').on("click", function() {
  $('.flipcoin').hide();
 });
}
