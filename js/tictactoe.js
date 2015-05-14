'use strict';
var Tictactoe = Tictactoe || {};

Tictactoe.player = 0;
Tictactoe.players = ["X", "O"];
// gameOver becomes true when we have a winner or it is a tie
Tictactoe.gameOver = false;

// score counters
Tictactoe.xScore = 0;
Tictactoe.oScore = 0;

// //set a counter for the number of games, and the newPlayer variable
// to tell who is the starting player in the games after the first one.
Tictactoe.numOfGames = 0;
Tictactoe.newPlayer = "";
// set a variable to store the bet
Tictactoe.bet = "";

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
  Tictactoe.tieGame();
  Tictactoe.numOfGames++;


// At the end of the game (we have a winner or it is a tie) a rematch button apperars.
  if (Tictactoe.gameOver) {
    $('#yourturn').hide();
    $('#rematch').show();
    $('#rematch').html('REMATCH?');
    $('#rematch').addClass('animated bounce');
    }
  });
};


// // function to decide who starts. It alternates between games
Tictactoe.whoStarts = function() {
    if (Tictactoe.numOfGames % 2 === 0) {
      Tictactoe.newPlayer = "X";
      } else {
      Tictactoe.newPlayer = "O";
    }
    return Tictactoe.newPlayer;
  }


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
Tictactoe.tieGame = function() {
  if (Tictactoe.count === 9) {
    Tictactoe.gameOver = true;
  };
};

// reset the board
Tictactoe.clearGame = function() {
  $('#rematch').hide();
  $('#winner').hide();
  $('#gameboard div').html('');
  $('#yourturn').show();
  $('#yourturn').html('"' + Tictactoe.whoStarts() + '" it is your turn!');
  $('#gameboard div').unbind();
  this.gameOver = false;
  this.moves = [];
  this.count = 0;
};




// first slide, welcome and set the bet
Tictactoe.letsBet = function() {
  $('.firstscreen').show();
  $('.firstscreen').prepend("<p><h1><strong>Welcome!</strong></h1></p><p>Let's play, but first,<br />let's make things more interesting...<br />Let's bet something.</p>");
  $('#bet').show();
  $('.firstscreen').append('<div id="firsttothree"></div>');
  $('#firsttothree').append("* The player who wins 3 games is the winner.");
  $('input[name="bet"]').keypress(function(e) {
   if(e.which == 13) {
    Tictactoe.bet = $(this).val().toUpperCase();
      Tictactoe.whoGoesFirst();
    }
  });
};


// second slide, deciding who goes first
Tictactoe.whoGoesFirst = function() {
$('.firstscreen').unbind();
$('.firstscreen').html("<p>OK, you are playing for<br /><h3>" + this.bet + "!!!</h3>WOW, that's a good one! <br />Who goes first?<br />To make it fair, let's flip a coin.</p>" );
$('.firstscreen').append('<div id="coin"></div>');
$('.firstscreen').append('<div id="close"></div>');
$('#coin').addClass('animated pulse');
$('#close').html("Heads or Tails?<br />Flip the coin");
$('#close').addClass('animated flip');
$('#coin').on("click", function() {
  $('.theprize span').html(Tictactoe.bet);
  Tictactoe.flipcoin();
  });
};



// third slide, flipping the coin
Tictactoe.flipcoin = function() {
  $('#coin').removeClass('animated pulse');
  $('#coin').addClass('animated flip');
  // $('#close').show();
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
    }, 1500);


  $('#close').html("OK, let's play! <br />Click to start.");
  $('#close').on("click", function() {
    $('.firstscreen').hide();
    $('.firstscreen').unbind();
    Tictactoe.game();
 });
};

// last slide, the champion wins the prize
Tictactoe.champion = function() {

  if (Tictactoe.xScore === 3) {
    $('.firstscreen').show();
    $('.firstscreen').html('<p><br /><br /><h1>REMATCH?!?<br />WHAT?<br />NO REMATCH!<br />"O"<br /> You owe me<br />' + this.bet + '!</h1></p>');
  } else if (Tictactoe.oScore === 3) {
    $('.firstscreen').show();
    $('.firstscreen').html('<p><br /><br /><h1>REMATCH?!?<br />WHAT?<br />NO REMATCH!<br />"X"<br /> You owe me<br />' + this.bet + '!</h1></p>');
  }
$('.firstscreen').on("click", function() {
  location.reload();
});
};
