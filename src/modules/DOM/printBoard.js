const printBoards = () => {
  const playerBoard = document.querySelectorAll(".board");
  for (let i = 0; i < 100; i += 1) {
    const slot = document.createElement("div");
    slot.classList.add("slot");
    playerBoard[0].appendChild(slot);
  }

  for (let i = 0; i < 100; i += 1) {
    const slot = document.createElement("div");
    slot.classList.add("slot");
    playerBoard[1].appendChild(slot);
  }
};

export default printBoards;
