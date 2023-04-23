import Ship from "./ship";

export default class Gameboard {
  constructor(owner) {
    this.owner = owner;
    this.board = [
      [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
      [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
      [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
      [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
      [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
      [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
      [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
      [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
      [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
      [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
    ];
    this.ships = [
      new Ship(1),
      new Ship(2),
      new Ship(3),
      new Ship(4),
      new Ship(5),
    ];
  }

  who() {
    return this.owner;
  }

  receiveAttack(x, y) {
    if (this.board[x][y][0] === "") {
      this.board[x][y] = ["X"];
    } else if (this.board[x][y][0] === "=") {
      this.board[x][y] = ["BOOM"];
    }
  }

  placeShip(x, y, length) {
    for (let i = 0; i < length; i += 1) {
      this.board[x][y + i] = ["="];
    }

    // check for edge cases where ship cannot be placed because there's already another ship
    // so if a ship was already placed at one slot where the new ship will be placed it cannot work
    // throw an error
  }
}
