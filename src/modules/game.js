import Gameboard from "./gameboard";
import Player from "./player";
import Computer from "./computer";
// Game has 2 gameboards, 10 ships, 2 players each having a board and 5 ships, a game loop

export default class Game {
  constructor() {
    this.player = new Player();
    this.computer = new Computer();
    this.boards = [new Gameboard(this.player), new Gameboard(this.computer)];
  }

  gameloop() {
    this.boards[0].build();
  }
}
