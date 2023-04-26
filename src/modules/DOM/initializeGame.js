import { printBoards, printShips } from "./printBoard";
import Game from "../game";

const newGame = new Game();
newGame.gameLoop();
printBoards();
printShips(newGame.boards);

(function rotateShips() {
  const ship = newGame.boards[0].ships.five;
  const five = document.querySelectorAll(".player .length-5");
  const arr = Array.from(five);
  arr.forEach((element) => {
    element.addEventListener("click", () => {
      newGame.boards[0].changeAxis(ship);
      printBoards();
      printShips(newGame.boards);
      rotateShips();
    });
  });
})();
