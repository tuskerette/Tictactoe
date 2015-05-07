// the grid
grid = [[null, null, null],
        [null, null, null],
        [null, null, null]];



function place_token (player, row, col) {
  grid[row][col] = player;
  console.log(grid);
}


place_token("X", 1, 0);
place_token("O", 2, 0);


// winner combinations
// 0,0 + 0,1 + 0,2
// 1,0 + 1,1 + 1,2
// 2,0 + 2,1 + 2,2
// 0,0 + 1,0 + 2,0
// 0,1 + 1,1 + 2,1
// 0,2 + 1,2 + 2,2
// diagonals
// 0,0 + 1,1 + 2,2
// 0,2 + 1,1 + 2,0


function clearBoard () {

}
