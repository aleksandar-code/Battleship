const shapeBoats = (boat) => {
  const array = Array.from(boat);
  array.forEach((element, index) => {
    if (index === 0 && !element.classList.contains("rotated")) {
      array[index].style.cssText = "border-right: none;";
      array[index].parentNode.style.cssText = "border-right: none;";
    } else if (
      index === array.length - 1 &&
      !element.classList.contains("rotated")
    ) {
      array[index].style.cssText = "border-left: none";
      array[index].parentNode.style.cssText = "border-left: none;";
    } else if (!element.classList.contains("rotated")) {
      array[index].style.cssText = "border-left: none; border-right: none";
      array[index].parentNode.style.cssText =
        "border-left: none; border-right: none;";
    } else if (index === 0 && element.classList.contains("rotated")) {
      array[index].style.cssText = "border-bottom: none;";
      array[index].parentNode.style.cssText = "border-bottom: none;";
    } else if (
      index === array.length - 1 &&
      element.classList.contains("rotated")
    ) {
      array[index].style.cssText = "border-top: none";
      array[index].parentNode.style.cssText = "border-top: none;";
    } else if (element.classList.contains("rotated")) {
      array[index].style.cssText = "border-top: none; border-bottom: none";
      array[index].parentNode.style.cssText =
        "border-top: none; border-bottom: none;";
    }
  });
};

const printShips = (boards) => {
  const board = document.querySelectorAll(".board");
  const array = Array.from(board[0].children);
  const array2 = Array.from(board[1].children);
  const boardData = boards[0].board.flat(Infinity);
  const boardData2 = boards[1].board.flat(Infinity);
  boardData.forEach((node, index) => {
    if (node.ship !== null) {
      const ship = document.createElement("div");
      ship.classList.add(`l${node.ship.length}`);
      ship.classList.add("ship");
      if (node.ship.rotated === true) ship.classList.add("rotated");
      array[index].appendChild(ship);
    }
  });

  boardData2.forEach((node, index) => {
    if (node.ship !== null) {
      const ship = document.createElement("div");
      ship.classList.add(`l${node.ship.length}`);
      ship.classList.add("ship");
      if (node.ship.rotated === true) ship.classList.add("rotated");
      array2[index].appendChild(ship);
    }
  });
  const length5 = document.querySelectorAll(".player .l5");
  const length4 = document.querySelectorAll(".player .l4");
  const length3 = document.querySelectorAll(".player .l3");
  const length2 = document.querySelectorAll(".player .l2");

  const lengthComputer5 = document.querySelectorAll(".computer .l5");
  const lengthComputer4 = document.querySelectorAll(".computer .l4");
  const lengthComputer3 = document.querySelectorAll(".computer .l3");
  const lengthComputer2 = document.querySelectorAll(".computer .l2");
  shapeBoats(length5);
  shapeBoats(length4);
  shapeBoats(length3);
  shapeBoats(length2);
  shapeBoats(lengthComputer5);
  shapeBoats(lengthComputer4);
  shapeBoats(lengthComputer3);
  shapeBoats(lengthComputer2);
};

const printBoards = () => {
  const board = document.querySelectorAll(".board");
  board[0].innerHTML = "";
  board[1].innerHTML = "";
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
