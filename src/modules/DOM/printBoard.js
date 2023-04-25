const printShips = (boards) => {
  const board = document.querySelectorAll(".board");
  const array = Array.from(board[0].children);
  const boardData = boards[0].board.flat(Infinity);
  console.log(array);
  console.log(boardData);
  boardData.forEach((node, index) => {
    if (node.ship !== null) {
      array[index].textContent = `ship ${node.ship.length}`;
      console.log(index);
      console.log(node);
    }
  });
};

const printBoards = () => {
  const board = document.querySelectorAll(".board");
  for (let i = 0; i < 100; i += 1) {
    const slot = document.createElement("div");
    slot.classList.add("slot");
    board[0].appendChild(slot);
  }

  for (let i = 0; i < 100; i += 1) {
    const slot = document.createElement("div");
    slot.classList.add("slot");
    board[1].appendChild(slot);
  }
};

export { printBoards, printShips };
