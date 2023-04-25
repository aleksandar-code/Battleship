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
