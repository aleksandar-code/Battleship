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

  placeShip(ship) {
    const { x, y, length } = ship;
    let occupied = false;
    for (let i = 0; i < length; i += 1) {
      if (this.board[x][y + i][0] === "") {
        this.board[x][y + i] = ["="];
      } else {
        occupied = true;
      }
    }

    if (occupied === true) return false;
    return true;
  }

  changeAxis(ship) {
    const { x, y, length } = ship;
    let occupied = false;
    for (let i = 1; i < length; i += 1) {
      if (ship.rotated === false && this.board[x + i][y][0] === "") {
        this.board[x + i][y] = ["="];
        this.board[x][y + i] = [""];
      } else if (ship.rotated === true && this.board[x][y + i][0] === "") {
        this.board[x][y + i] = ["="];
        this.board[x + i][y] = [""];
      } else {
        occupied = true;
      }
    }

    if (occupied === true) return false;
    for (let i = 0; i < this.ships.length; i += 1) {
      if (this.ships[i].uuid === ship.uuid) {
        this.ships[i].rotated = !this.ships[i].rotated;
      }
    }
    return true;
  }
}
