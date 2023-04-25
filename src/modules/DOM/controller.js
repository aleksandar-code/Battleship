import { printBoards, printShips } from "./printBoard";
import Game from "../game";

const newGame = new Game();
newGame.gameLoop();
printBoards();
printShips(newGame.boards);

const ship = newGame.boards[0].ships.five;
newGame.boards[0].changeAxis(ship);
printBoards();
printShips(newGame.boards);

const five = document.querySelectorAll(".player .length-5");
console.log(five);
const arr = Array.from(five);

arr.forEach((element) => {
  element.addEventListener("click", () => {
    newGame.boards[0].changeAxis(ship);
    printBoards();
    printShips(newGame.boards);
  });
});
