const editPlayer1 = document.getElementById("player1-edit-link");
const editPlayer2 = document.getElementById("player2-edit-link");

editPlayer1.addEventListener("click", openEditForm1);
editPlayer2.addEventListener("click", openEditForm2);

function openEditForm1() {
  console.log("edit form");
  document.getElementById("register1").style.display = "flex";
  document.getElementById('backdrop').style.display = 'block';
  const confirmButton1 = document.getElementById("confirm1");
  const cancelButton1 = document.getElementById("cancel1");
  cancelButton1.addEventListener("click", cancel) 
  function cancel() {
    document.getElementById("register1").style.display = "none";
    document.getElementById("player-name1").value = "";
    document.getElementById('backdrop').style.display = 'none';

  }
  confirmButton1.addEventListener("click", updateName1);
  function updateName1() {
    const nameInput1 = document.getElementById("player-name1");
    if (nameInput1.value == "") {
      alert("Please enter a name");
      return;
    }
    const name1 = nameInput1.value;
    document.getElementById("player1-name").textContent = name1;
    document.getElementById("register1").style.display = "none";
    document.getElementById('backdrop').style.display = 'none';
  }
}

function openEditForm2() {
  console.log("edit form");
  document.getElementById("register2").style.display = "flex";
  document.getElementById('backdrop').style.display = 'block';
  const confirmButton2 = document.getElementById("confirm2");
  const cancelButton2 = document.getElementById("cancel2");
  cancelButton2.addEventListener("click", cancel)
  function cancel() {
    document.getElementById("register2").style.display = "none";
    document.getElementById("player-name2").value = "";
    document.getElementById('backdrop').style.display = 'none';

  }
  confirmButton2.addEventListener("click", updateName2);
  function updateName2() {
    const nameInput2 = document.getElementById("player-name2");
    if (nameInput2.value == "") {
      alert("Please enter a name");
      return;
    }
    const name2 = nameInput2.value;
    document.getElementById("player2-name").textContent = name2;
    document.getElementById("register2").style.display = "none";
    document.getElementById('backdrop').style.display = 'none';
  }
}

const startNewGame = document.getElementById("start");
startNewGame.addEventListener("click", startGame);

function startGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  game = document.getElementById("game");
  game.style.display = "flex";
  let gameOver = document.getElementById("game-over");
  gameOver.style.display = "none";
  isOver = false;

  const cells = document.querySelectorAll(".grid-item");
  counter = 0;
  X_OR_Y = ["O", "X"];
  let XYDecision = [false];
  let playerTurn = document.getElementById("player-turn");
  playerTurn.textContent = document.getElementById(
    "player" + ((XYDecision[0] & 1) + 1) + "-name"
  ).textContent;
  let i = 0;
  for (var cell of cells) {
    cell.children[0].textContent = "";
    cell.index = i;
    cell.classList.remove("grid-item-chosen");
    cell.clicked = false;
    cell.addEventListener("click", function () {
      placeMark(this);
    });
    i++;
  }
  i = 0;

  function placeMark(cell) {
    if (cell.clicked) {
      console.log("Cell already clicked");
      return;
    }
    board[cell.index] = X_OR_Y[!XYDecision[0] & 1];
    XYDecision[0] = !XYDecision[0];
    console.log("Grid clicked:", cell);
    cell.children[0].textContent = X_OR_Y[XYDecision[0] & 1];
    playerTurn.textContent = document.getElementById(
      "player" + ((XYDecision[0] & 1) + 1) + "-name"
    ).textContent;
    cell.classList.add("grid-item-chosen");

    let winner = "";

    console.log(board);
    for (let i = 0; i < 9; i += 3) {
      if (
        board[i] != "" &&
        board[i] == board[i + 1] &&
        board[i] == board[i + 2] &&
        board[i] == X_OR_Y[!XYDecision[0] & 1]
      ) {
        winner = document.getElementById(
          "player" + ((XYDecision[0] & 1) + 1) + "-name"
        ).textContent;
        isOver = true;
      }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (
        board[i] != "" &&
        board[i] == board[i + 3] &&
        board[i] == board[i + 6] &&
        board[i] == X_OR_Y[!XYDecision[0] & 1]
      ) {
        winner = document.getElementById(
          "player" + ((XYDecision[0] & 1) + 1) + "-name"
        ).textContent;
        isOver = true;
      }
    }

    // Check diagonals
    if (
      board[0] != "" &&
      board[0] == board[4] &&
      board[0] == board[8] &&
      board[i] == X_OR_Y[!XYDecision[0] & 1]
    ) {
      winner = document.getElementById(
        "player" + ((XYDecision[0] & 1) + 1) + "-name"
      ).textContent;
      isOver = true;
    }
    if (
      board[2] != "" &&
      board[2] == board[4] &&
      board[2] == board[6] &&
      board[i] == X_OR_Y[!XYDecision[0] & 1]
    ) {
      winner = document.getElementById(
        "player" + ((XYDecision[0] & 1) + 1) + "-name"
      ).textContent;
      isOver = true;
    }

    for (let i = 0; i < 9; i += 3) {
      if (
        board[i] != "" &&
        board[i] == board[i + 1] &&
        board[i] == board[i + 2] &&
        board[i] == X_OR_Y[XYDecision[0] & 1]
      ) {
        winner = document.getElementById(
          "player" + ((!XYDecision[0] & 1) + 1) + "-name"
        ).textContent;
        isOver = true;
      }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (
        board[i] != "" &&
        board[i] == board[i + 3] &&
        board[i] == board[i + 6] &&
        board[i] == X_OR_Y[XYDecision[0] & 1]
      ) {
        winner = document.getElementById(
          "player" + ((!XYDecision[0] & 1) + 1) + "-name"
        ).textContent;
        isOver = true;
      }
    }

    // Check diagonals
    if (
      board[0] != "" &&
      board[0] == board[4] &&
      board[0] == board[8] &&
      board[i] == X_OR_Y[XYDecision[0] & 1]
    ) {
      winner = document.getElementById(
        "player" + ((!XYDecision[0] & 1) + 1) + "-name"
      ).textContent;
      isOver = true;
    }
    if (
      board[2] != "" &&
      board[2] == board[4] &&
      board[2] == board[6] &&
      board[i] == X_OR_Y[XYDecision[0] & 1]
    ) {
      winner = document.getElementById(
        "player" + ((!XYDecision[0] & 1) + 1) + "-name"
      ).textContent;
      isOver = true;
    }

    console.log("isover:" + isOver);

    cell.clicked = true;
    isAllClicked = false;
    for (var cell of cells) {
      if (cell.clicked) {
        isAllClicked = true;
        continue;
      }
      isAllClicked = false;
      break;
    }

    if (isOver) {
      console.log("game over");
      let gameOver = document.getElementById("game-over");
      gameOver.style.display = "flex";
      let gameOverText = document.getElementById("winner");
      gameOverText.textContent = winner;
      return;
    }

    if (isAllClicked && !isOver) {
      console.log("game over");
      let gameOver = document.getElementById("game-over");
      gameOver.style.display = "flex";
      let gameOverText = document.getElementById("game-over-text");
      gameOverText.textContent = "DRAW";
      return;
    }
  }

  startNewGame.addEventListener("click", startGame);
}
