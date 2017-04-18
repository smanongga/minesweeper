document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = new Object()
  board.cells = [

  ];

function startGame () {

  for (var i = 0; i < board.cells.length; i++){
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }

  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);

  // Don't remove this function call: it makes the game work!
  lib.initBoard()

  // var reset = document.getElementById('reset');
  //  reset.addEventListener('click', function(evt) { location.reload() })
}

var chooseMap = function(a) {
  if(a === undefined) {
    return 1;
  }
  else {
    return 3;
  }
}


     switch(chooseMap()) {
       case 1:
       createBoard (3,3);
         break;
       case 2:
       createBoard (4,4);
         break;
       case 3:
       createBoard (5,5);
         break;
       case 4:
       createBoard (6,6);
         break;
       default:
       createBoard (3,3);

}


// Generate Minsweeper Board

function createBoard (row,col) {
  for (var a = 0; a < row; a++) {
    for (var b = 0; b < col; b++) {
      board.cells.push({
        row: a,
        col: b,
        isMine: Boolean(Math.floor(Math.random()*1.3)),
        isMarked: false,
        hidden: true
      })
      console.log(board.cells)
    }
  }
}



// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
for (var i = 0; i < board.cells.length; i++) {
 if(board.cells[i].isMine && board.cells[i].isMarked) {
   return;
 }
 else if (board.cells[i].hidden && board.cells[i].isMine !== true) {
   return;
 }
}
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  // lib.displayMessage('You win!')
  lib.displayMessage('You win!')

}


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  count = 0;
var surroundingCells = getSurroundingCells(cell.row, cell.col);
for(var i = 0; i < surroundingCells.length; i++){
  if (surroundingCells[i].isMine === true){
    count++;
  }
}
return count;
}
