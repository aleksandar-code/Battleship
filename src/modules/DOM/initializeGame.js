import { printBoards, printShips } from "./printBoard";
import Game from "../game";

const newGame = new Game();
newGame.gameLoop();
printBoards();
printShips(newGame.boards);

(function rotateShips() {
  const realPlayerShips = Object.values(newGame.boards[0].ships);
  const realComputerShips = Object.values(newGame.boards[1].ships);
  const playerShips = document.querySelectorAll(".player .ship");
  const computerShips = document.querySelectorAll(".computer .ship");
  const playersShips = [Array.from(playerShips), Array.from(computerShips)];
  const realPlayersShips = [realPlayerShips, realComputerShips];
  playersShips.forEach((arr, i) => {
    arr.forEach((element) => {
      element.addEventListener("click", () => {
        const index = element.classList[0][1] - 1;
        newGame.boards[i].changeAxis(realPlayersShips[i][index]);
        printBoards();
        printShips(newGame.boards);
        rotateShips();
      });
    });
  });
})();

(function dragAndDrop() {
  const playerShips = document.querySelectorAll(".player .ship");
  const computerShips = document.querySelectorAll(".computer .ship");
  const playersShips = [Array.from(playerShips), Array.from(computerShips)];

  playersShips.forEach((arr) => {
    arr.forEach((_, i) => {
      arr[i].setAttribute("draggable", true);
    });
  });
})();
