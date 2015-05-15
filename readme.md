# README: Tic Tac Toe by Valeria Graffeo

## Contents


* **Tic Tac Toe**
* **Tic Tac Toe version 1.0 5/15/15**

  - This is a Single Page Application to play the game Tic Tac Toe in an internet browser.
  - The app is visible at: https://tictactoetheapp.firebaseapp.com/


* **Overview**
  - Two players can play this game on one machine.
  - The game is preceded by an introduction that allows the players to bet something, and allows to flip a (virtual) coin to determine who will be the player placing the token on the board first.

* **Example Usage**
  - The two players agree on what they want to bet (example: a beer, lunch, a cup of coffee..) and type it in the text field. They confirm the selection by pressing the "enter" key.
  - The players decide who wants heads or tails on the coin, then flip the coin by clicking on it once.
  - When the players are ready to begin the game, they click on the dark blue-green box on the bottom of the screen "Ok, let's play! Click to start."
  - The classic game will then begin.
  - Players alternate placing Xs and Os following the screen that tells whose turn it is.
  - After each game the players click the "rematch" button until one player reaches 3 wins.

* **Getting Started**
  - installation & prerequisites: no installation necessary.
  Requisites: an internet connection and a browser (Google Chrome preferred.)

* **Detailed Usage and Developer Info**
  - The app is linked to two .js files: app.js and tictactoe.js
  app.js calls the functions when the document has loaded.
  tictactoe.js contains the javascript functions and the handlers for jQuery. Both files have plenty of comments to explain how I developed the code.
  - The app runs on index.html and it is styles using CSS with the files contained in the /styles folder.
  - Limitations and known issues: The application is optimized and tested on Google Chrome.
  The only known bug on Firefox and Safari on Macintosh is having to reload the app the very frst time that the page has loaded. The bug does not occur in local, so it could be related to the Firebase hosting.

* **Colophon**
  - This app was developed by Valeria Graffeo as first project assignment in the Web Develoment Immersive Course at General Assembly Boston in May 2015.
  - Animate.css by Daniel Eden: http://daneden.github.io/animate.css/

* **Required Notes**
  - The work-in-progress notes required by the assignment are available at notes/notes.html






