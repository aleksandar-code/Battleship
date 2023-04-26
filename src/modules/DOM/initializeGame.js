import { printBoards, printShips } from "./printBoard";
import Game from "../game";

const newGame = new Game();
newGame.gameLoop();
printBoards();
printShips(newGame.boards);

(function rotateShips() {
  const realShips = Object.values(newGame.boards[0].ships);
  const ships = document.querySelectorAll(".player .ship");
  const arr = Array.from(ships);
  arr.forEach((element) => {
    element.addEventListener("click", () => {
      const index = element.classList[0][1] - 1;
      newGame.boards[0].changeAxis(realShips[index]);
      printBoards();
      printShips(newGame.boards);
      rotateShips();
    });
  });
})();
