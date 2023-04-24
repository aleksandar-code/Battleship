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
      ship.x = x;
      ship.y = y;
      expect(board.placeShip(ship)).toBe(true);
    });

    test("place ship of length 5 at 0, 5", () => {
      const board = new Gameboard("Player");
      const ship = board.ships.five;
      const x = 0;
      const y = 5;
      ship.x = x;
      ship.y = y;
      expect(board.placeShip(ship)).toBe(true);
    });

    test("can't place ship of length 5 at 0, 6", () => {
      const board = new Gameboard("Player");
      const ship = board.ships.five;
      const x = 0;
      const y = 6;
      ship.x = x;
      ship.y = y;

      expect(board.placeShip(ship)).toBe(false);
    });

    test("can't place ship of length 1 at 10, 6", () => {
      const board = new Gameboard("Player");
      const ship = board.ships.one;
      const x = 10;
      const y = 6;
      ship.x = x;
      ship.y = y;
      expect(board.placeShip(ship)).toBe(false);
    });

    test("Can't place ship if a slot is occupied", () => {
      const board = new Gameboard("Player");
      const ship = board.ships.one;
      const shipTwo = board.ships.two;
      const x = 0;
      const y = 0;
      ship.x = x;
      ship.y = y;
      shipTwo.x = y;
      shipTwo.y = y;
      board.placeShip(ship);
      expect(board.placeShip(shipTwo)).toBe(false);
    });
  });

  describe("changeAxis", () => {
    test("Place ship on the Y axis", () => {
      const board = new Gameboard("Player");
      const ship = board.ships.five;
      const x = 0;
      const y = 0;
      ship.x = x;
      ship.y = y;
      board.placeShip(ship);
      expect(board.changeAxis(ship)).toBeTruthy();
    });

    test("Remove the ship from previous axis", () => {
      const board = new Gameboard("Player");
      const ship = board.ships.five;
      const shipTwo = board.ships.two;
      const x = 0;
      const y = 0;
      ship.x = x;
      ship.y = y;
      shipTwo.x = x;
      shipTwo.y = 1;
      board.placeShip(ship);
      board.changeAxis(ship);
      expect(board.placeShip(shipTwo)).toBeTruthy();
    });

    test("Can change axis multiple times", () => {
      const board = new Gameboard("Player");
      const ship = board.ships.five;
      const x = 0;
      const y = 0;
      ship.x = x;
      ship.y = y;
      board.placeShip(ship);
      board.changeAxis(ship);
      board.changeAxis(ship);
      expect(board.board[x][y + 1].ship).not.toBe(null);
    });
  });

  describe("Is game lost?", () => {
    const board = new Gameboard("Player");
    const ship1 = board.ships.one;
    const ship2 = board.ships.two;
    const ship3 = board.ships.three;
    const ship4 = board.ships.four;
    const ship5 = board.ships.five;

    ship1.x = 4;
    ship1.y = 4;
    ship2.x = 3;
    ship2.y = 3;
    ship3.x = 2;
    ship3.y = 2;
    ship4.x = 1;
    ship4.y = 1;
    ship5.x = 0;
    ship5.y = 0;

    const array = [ship1, ship2, ship3, ship4, ship5];

    array.forEach((ship) => {
      board.placeShip(ship);
    });

    test("Game isn't lost, all ships are not sunk", () => {
      expect(board.isGameLost()).toBeFalsy();
    });

    test("Game isn't lost, all ships are not sunk", () => {
      ship1.sunk = true;
      ship2.sunk = true;
      ship3.sunk = true;
      ship4.sunk = true;
      ship5.sunk = true;

      expect(board.isGameLost()).toBeTruthy();
    });
  });
});
