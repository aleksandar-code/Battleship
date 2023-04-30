import Gameboard from "./gameboard";
import Player from "./player";
import Computer from "./computer";
// Game has 2 gameboards, 10 ships, 2 players each having a board and 5 ships, a game loop

export default class Game {
  constructor() {
    this.player = new Player();
    const playerBoard = new Gameboard(this.player);
    this.computer = new Computer(playerBoard.board);
    const computerBoard = new Gameboard(this.computer);
    this.boards = [playerBoard, computerBoard];
  }

  gameLoop() {
    this.boards[0].placeShips();
    this.boards[1].randomlyPlaceShips();
    this.boards[1].prettyPrintBoard();
  }
}
