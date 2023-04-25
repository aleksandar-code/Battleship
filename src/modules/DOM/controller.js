import printBoard from "./printBoard";
import Game from "../game";

const newGame = new Game();
printBoard(newGame.boards[0]);
printBoard(newGame.boards[1]);
