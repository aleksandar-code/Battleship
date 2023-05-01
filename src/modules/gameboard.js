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

    this.remainingSlots = this.board.flat(Infinity);
  }

  who() {
    return this.owner;
  }

  randomlyChooseSlot() {
    const index = Math.floor(Math.random() * this.remainingSlots.length);
    const randomCoords = this.remainingSlots[index];
    this.remainingSlots.splice(index, 1);
    return [randomCoords.x, randomCoords.y];
  }

  randomlyPlaceShips() {
    const keys = ["one", "two", "three", "four", "five"];
    const shipList = this.ships;
    let bool = false;
    keys.forEach((key) => {
      bool = false;
      while (bool === false) {
        const coords = this.randomlyChooseSlot();
        bool = this.placeShip(shipList[key], coords);
      }
    });

    const board = this.board.flat(Infinity);
    let bool2 = true;
    let count = 0;
    board.forEach((node) => {
      if (count > 3) bool2 = false;
      if (node.ship !== null && bool2 === true && node.ship.length !== 1) {
        const index = node.ship.length - 1;
        const ship = shipList[keys[index]];
        const returnBool = this.changeAxis(ship);
        if (returnBool === true) count += 1;
      }
    });
    this.prettyPrintBoard();
  }

  placeShips() {
    const coords = [
      [4, 4],
      [3, 3],
      [2, 2],
      [1, 1],
      [0, 0],
    ];

    const keys = ["one", "two", "three", "four", "five"];
    const shipList = this.ships;
    keys.forEach((key, index) => {
      this.placeShip(shipList[key], coords[index]);
    });
  }

  receiveAttack(x, y) {
    const node = this.board[x][y];
    let bool;
    if (node.ship === null && node.bombed === false) {
      node.bombed = true;
      bool = false;
    } else if (node.ship !== null && node.bombed === false) {
      node.bombed = true;
      node.ship.hit();
      bool = true;
    }
    return bool;
  }

  isGameLost() {
    const array = [];
    Object.values(this.ships).forEach((value) => {
      array.push(value.sunk);
    });

    const bool = array.every((element) => {
      let returnValue = false;
      if (element === true) {
        returnValue = true;
      }
      return returnValue;
    });

    return bool;
  }

  placeShip(ship, currentCoords) {
    const [x, y] = currentCoords;
    const { length } = ship;
    let occupied = false;
    const arr = [];

    // remove ship from board if it already exists
    const shipCoords = ship.fullCoords;
    shipCoords.forEach((element) => {
      this.board[element.x][element.y].ship = null;
    });

    if (ship.rotated === false) {
      for (let i = 0; i < length; i += 1) {
        if (y + length - 1 > 9 || x > 9 || x < 0 || y > 9 || y < 0) {
          occupied = true;
        } else if (this.board[x][y + i].ship === null) {
          this.board[x][y + i].ship = ship;
          arr.push({ x, y: y + i });
        } else {
          occupied = true;
        }
      }
    } else if (ship.rotated === true) {
      for (let i = 0; i < length; i += 1) {
        if (x + length - 1 > 9 || x > 9 || x < 0 || y > 9 || y < 0) {
          occupied = true;
        } else if (this.board[x + i][y].ship === null) {
          this.board[x + i][y].ship = ship;
          arr.push({ x: x + i, y });
        } else {
          occupied = true;
          break;
        }
      }
    }
    Object.entries(this.ships).forEach(([key, value]) => {
      if (value.length === length) {
        this.ships[key].x = x;
        this.ships[key].y = y;
        this.ships[key].fullCoords = arr;
      }
    });
    if (occupied === true) return false;

    return true;
  }

  changeAxis(ship) {
    const { x, y, length } = ship;
    let occupied = false;
    const arr = [{ x, y }];
    const ifOccupied = ship.fullCoords;
    const shipCoords = ship.fullCoords;
    const toRotate = [];

    shipCoords.forEach((element) => {
      this.board[element.x][element.y].ship = null;
    });
    this.board[x][y].ship = ship;

    for (let i = 1; i < length; i += 1) {
      if (
        x + length - 1 <= 9 &&
        ship.rotated === false &&
        this.board[x + i][y].ship === null
      ) {
        toRotate.push(this.board[x + i][y]);
        this.board[x][y + i].ship = null;
        arr.push({ x: x + i, y });
      } else if (
        y + length - 1 <= 9 &&
        ship.rotated === true &&
        this.board[x][y + i].ship === null
      ) {
        toRotate.push(this.board[x][y + i]);
        this.board[x + i][y].ship = null;
        arr.push({ x, y: y + i });
      } else {
        occupied = true;
        ifOccupied.forEach((element) => {
          this.board[element.x][element.y].ship = ship;
        });
        break;
      }
    }

    if (occupied === true) {
      Object.entries(this.ships).forEach(([key, value]) => {
        if (value.length === length) {
          this.ships[key].fullCoords = shipCoords;
          this.ships[key].x = x;
          this.ships[key].y = y;
        }
      });
    }

    if (occupied === true) return false;

    toRotate.forEach((_, index) => {
      toRotate[index].ship = ship;
    });

    Object.entries(this.ships).forEach(([key, value]) => {
      if (value.length === length) {
        this.ships[key].rotated = !ship.rotated;
        this.ships[key].fullCoords = arr;
        this.ships[key].x = x;
        this.ships[key].y = y;
      }
    });
    return true;
  }

  prettyPrintBoard() {
    const myBoard = JSON.parse(JSON.stringify(this.board));

    myBoard.forEach((row, x) => {
      row.forEach((col, y) => {
        if (col.ship) {
          if (col.ship.rotated) {
            myBoard[x][y] = `^${col.ship.length}`;
          } else if (col.ship.rotated === false) {
            myBoard[x][y] = `<${col.ship.length}`;
          }
        } else {
          myBoard[x][y] = null;
        }
      });
    });
  }
}
