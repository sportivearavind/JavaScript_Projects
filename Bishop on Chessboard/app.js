// Select all the boxes on the chessboard
const boxes = document.querySelectorAll(".chess-board .row div");

boxes.forEach((box, index) => {
  // Calculate the row and column for each box
  const row = Math.floor(index / 8);
  const col = index % 8;

  // Add event listener for mouse enter
  box.addEventListener("mouseenter", () => highlightDiagonals(row, col));

  // Add event listener for mouse leave
  box.addEventListener("mouseleave", () => clearHighlights());
});

function highlightDiagonals(row, col) {
  boxes.forEach((box, index) => {
    const r = Math.floor(index / 8);
    const c = index % 8;

    // Check if the box is on the same diagonal
    if (Math.abs(r - row) === Math.abs(c - col)) {
      box.classList.add("highlight");
    }
  });
}

function clearHighlights() {
  boxes.forEach((box) => {
    box.classList.remove("highlight");
  });
}
