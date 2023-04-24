import Node from "./node";
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

    (() => {
      this.board.forEach((row, x) => {
        row.forEach((_, y) => {
          this.board[x][y] = new Node(x, y);
        });
      });
    })();

    this.ships = {
      one: new Ship(1),
      two: new Ship(2),
      three: new Ship(3),
      four: new Ship(4),
      five: new Ship(5),
    };
  }

  who() {
    return this.owner;
  }

  receiveAttack(x, y) {
    const node = this.board[x][y];
    if (node.ship === null && node.bombed === false) {
      node.bombed = true;
    } else if (node.ship !== null && node.bombed === false) {
      node.bombed = true;
      node.ship.hit();
    }
  }

  // add a set ship head coords function

  placeShip(ship) {
    const { x, y, length } = ship;
    let occupied = false;
    for (let i = 0; i < length; i += 1) {
      if (y + length - 1 > 9 || x > 9 || x < 0 || y > 9 || y < 0) {
        occupied = true;
      } else if (this.board[x][y + i].ship === null) {
        this.board[x][y + i].ship = ship;
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
