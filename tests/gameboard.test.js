import Gameboard from "../src/modules/gameboard";

describe("Gameboard", () => {
  describe("receiveAttack", () => {
    test("Receive attack on board", () => {
      const board = new Gameboard("Player");
      const x = 0;
      const y = 0;
      board.receiveAttack(x, y);
      expect(board.board[x][y].bombed).toBe(true);
    });

    test("Receive attack on board and hit a ship", () => {
      const board = new Gameboard("Player");
      const ship = board.ships.one;
      const x = 0;
      const y = 0;
      board.board[x][y].ship = ship;
      board.receiveAttack(x, y);
      expect(board.board[x][y].ship.hits).toEqual(1);
    });
  });

  describe("placeShip", () => {
    test("place ship of length 1 at 0, 5", () => {
      const board = new Gameboard("Player");
      const ship = board.ships.one;
      const x = 0;
      const y = 5;

      expect(board.placeShip(ship, [x, y])).toBe(true);
    });

    test("place ship of length 5 at 0, 5", () => {
      const board = new Gameboard("Player");
      const ship = board.ships.five;
      const x = 0;
      const y = 5;
      expect(board.placeShip(ship, [x, y])).toBe(true);
    });

    test("can't place ship of length 5 at 0, 6", () => {
      const board = new Gameboard("Player");
      const ship = board.ships.five;
      const x = 0;
      const y = 6;

      expect(board.placeShip(ship, [x, y])).toBe(false);
    });

    test("can't place ship of length 1 at 10, 6", () => {
      const board = new Gameboard("Player");
      const ship = board.ships.one;
      const x = 10;
      const y = 6;
      expect(board.placeShip(ship, [x, y])).toBe(false);
    });

    test("Can't place ship if a slot is occupied", () => {
      const board = new Gameboard("Player");
      const ship = board.ships.one;
      const shipTwo = board.ships.two;
      const x = 0;
      const y = 0;
      board.placeShip(ship, [x, y]);
      expect(board.placeShip(shipTwo, [x, y])).toBe(false);
    });
  });

  describe("changeAxis", () => {
    test("Place ship on the Y axis", () => {
      const board = new Gameboard("Player");
      const ship = board.ships.five;
      const x = 0;
      const y = 0;
      board.placeShip(ship, [x, y]);
      expect(board.changeAxis(ship)).toBeTruthy();
    });

    test("Remove the ship from previous axis", () => {
      const board = new Gameboard("Player");
      const ship = board.ships.five;
      const shipTwo = board.ships.two;
      const x = 0;
      const y = 0;

      board.placeShip(ship, [x, y]);
      board.changeAxis(ship);
      expect(board.placeShip(shipTwo, [x, 1])).toBeTruthy();
    });

    test("Can change axis multiple times", () => {
      const board = new Gameboard("Player");
      const ship = board.ships.five;
      const x = 0;
      const y = 0;
      board.placeShip(ship, [x, y]);
      board.changeAxis(ship);
      board.changeAxis(ship);
      expect(board.board[x][y + 1].ship).not.toBe(null);
    });
  });

  describe("Is game lost?", () => {
    const board = new Gameboard("Player");

    const coords = [
      [4, 4],
      [3, 3],
      [2, 2],
      [1, 1],
      [0, 0],
    ];

    const keys = ["one", "two", "three", "four", "five"];
    const ships = board.ships;

    keys.forEach((key) => {
      coords.forEach((coord) => {
        board.placeShip(ships[key], coord);
      });
    });

    test("Game isn't lost, all ships are not sunk", () => {
      expect(board.isGameLost()).toBeFalsy();
    });

    test("Game is lost, all ships are sunk", () => {
      keys.forEach((key) => {
        ships[key].sunk = true;
      });

      expect(board.isGameLost()).toBeTruthy();
    });
  });
});
