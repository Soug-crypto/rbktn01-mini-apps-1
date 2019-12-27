document.addEventListener("DOMContentLoaded", function() {
  var turn = 'X',
    winner, board = [
      [],
      [],
      []
    ];

  marker = (square) => {

    var announcementDiv = document.getElementById('announcement'),
      id = square.id,
      row = Math.floor(id / 3),
      position = id % 3;

    if (!winner) {
      if (document.getElementById(id).innerText === "") {
        document.getElementById(id).innerText = turn;
        board[row][position] = turn;
        turn === 'X' ? turn = 'O' : turn = 'X';
      }

      if (validateALL(board)) {
        turn === 'X' ? winner = 'O' : winner = 'X';
        announcementDiv.innerText = 'The winner is: ' + winner;
      }
    }

  };

  function validator(board, type) {
    var acc = '';
    for (var i = 0; i < board.length; i++) {
      type === "di" ? acc += board[i][i] : null;
      type === "offDi" ? acc += board[i][2 - i] : null;

      for (var j = 0; j < board.length; j++) {
        type === "col" ? acc += board[j][i] : null;
        type === "row" ? acc += board[i][j] : null;
      }
      if (acc === "XXX" || acc === "OOO") {
        return true
      }
      acc = ''
    }
    return false
  };

  function validateALL(board) {
    var result = false;
    ["col", "row", "di", "offDi"].forEach((val) => {
      result = result || validator(board, val)
    })
    return result
  };

  resetAll = () => {
    board = [
      [],
      [],
      []
    ];
    let boardDiv = document.getElementsByClassName("grid-container")
    console.log(Array.isArray(boardDiv[0].children))


    Array.prototype.forEach.call(boardDiv[0].children, (elem) => {
      elem.innerHTML = ""
    })
  }
});
