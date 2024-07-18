const boxes = document.querySelectorAll(".box");
const resetButton = document.querySelector(".reset");
const resultDiv = document.querySelector(".result");
let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleBoxClick(event) {
  const box = event.target;
  const boxIndex = box.getAttribute("data-index");

  if (board[boxIndex] !== "" || !gameActive) {
    return;
  }

  updateBox(box, boxIndex);
  checkResult();
}

function updateBox(box, index) {
  board[index] = currentPlayer;
  box.textContent = currentPlayer;
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkResult() {
  let roundWon = false;

  for (let i = 0; i < winningCombinations.length; i++) {
    const winCombination = winningCombinations[i];
    const a = board[winCombination[0]];
    const b = board[winCombination[1]];
    const c = board[winCombination[2]];

    if (a === "" || b === "" || c === "") {
      continue;
    }

    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    resultDiv.textContent = `Player ${currentPlayer === "X" ? "O" : "X"} Wins!`;
    resultDiv.style.display = "block";
    gameActive = false;
    return;
  }

  if (!board.includes("")) {
    resultDiv.textContent = "Draw!";
    resultDiv.style.display = "block";
    gameActive = false;
    return;
  }
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  resultDiv.style.display = "none";
  currentPlayer = "X";
  boxes.forEach((box) => (box.textContent = ""));
}

boxes.forEach((box) => box.addEventListener("click", handleBoxClick));
resetButton.addEventListener("click", resetGame);
