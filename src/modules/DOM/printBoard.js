const printShips = (boards) => {
  const array = document.querySelectorAll(".player .slot");
  const boardData = Object.values(boards[0].ships);
  // const array2 = document.querySelectorAll(".computer .slot");
  // const boardData2 = Object.values(boards[1].ships);

  boardData.forEach((ship) => {
    const element = document.createElement("div");
    element.classList.add(`l${ship.length}`);
    element.classList.add("ship");
    if (ship.rotated === true) element.classList.add("rotated");
    const data = { x: ship.x, y: ship.y };
    array.forEach((slot, index) => {
      if (
        Number(slot.dataset.X) === data.x &&
        Number(slot.dataset.Y) === data.y
      ) {
        array[index].appendChild(element);
      }
      ship.fullCoords.forEach((coords) => {
        if (
          Number(slot.dataset.X) === coords.x &&
          Number(slot.dataset.Y) === coords.y
        ) {
          array[index].dataset.empty = "false";
        }
      });
    });
  });

  // boardData2.forEach((ship) => {
  //   const element = document.createElement("div");
  //   element.classList.add(`l${ship.length}`);
  //   element.classList.add("ship");
  //   if (ship.rotated === true) element.classList.add("rotated");
  //   const data = { x: ship.x, y: ship.y };
  //   array2.forEach((slot, index) => {
  //     if (
  //       Number(slot.dataset.X) === data.x &&
  //       Number(slot.dataset.Y) === data.y
  //     ) {
  //       array2[index].appendChild(element);
  //     }
  //     ship.fullCoords.forEach((coords) => {
  //       if (
  //         Number(slot.dataset.X) === coords.x &&
  //         Number(slot.dataset.Y) === coords.y
  //       ) {
  //         array2[index].dataset.empty = "false";
  //       }
  //     });
  //   });
  // });
};

const printBoards = () => {
  const board = document.querySelectorAll(".board");
  document.querySelectorAll(".ship").forEach((elem) => elem.remove());
  board[0].innerHTML = "";
  board[1].innerHTML = "";
  for (let i = 0; i < 2; i += 1) {
    for (let x = 0; x < 10; x += 1) {
      const row = document.createElement("div");
      row.classList.add("row");
      for (let y = 0; y < 10; y += 1) {
        const slot = document.createElement("div");
        slot.classList.add("slot");
        slot.dataset.X = x;
        slot.dataset.Y = y;
        slot.dataset.empty = "true";
        row.appendChild(slot);
      }
      board[i].appendChild(row);
    }
  }
};

export { printBoards, printShips };
