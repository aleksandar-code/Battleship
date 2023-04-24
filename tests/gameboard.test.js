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

  // describe("changeAxis", () => {
  //   test("Place ship on the Y axis", () => {
  //     const board = new Gameboard("Player");
  //     const ship = board.ships.five;
  //     const x = 0;
  //     const y = 0;
  //     ship.x = x;
  //     ship.y = y;
  //     board.placeShip(ship);

  //     expect(board.changeAxis(ship)).toBeTruthy();
  //   });

  //   test("Remove the ship from previous axis", () => {
  //     const board = new Gameboard("Player");
  //     const ship = board.ships.five;
  //     const x = 0;
  //     const y = 0;
  //     ship.x = x;
  //     ship.y = y;
  //     board.placeShip(ship);
  //     expect(board.changeAxis(ship)).toBeTruthy();
  //   });

  //   test("Can change axis multiple times", () => {
  //     const board = new Gameboard("Player");
  //     const ship = board.ships.five;
  //     const x = 0;
  //     const y = 0;
  //     ship.x = x;
  //     ship.y = y;
  //     const array = [
  //       ["="],
  //       ["="],
  //       ["="],
  //       ["="],
  //       ["="],
  //       [""],
  //       [""],
  //       [""],
  //       [""],
  //       [""],
  //     ];
  //     board.placeShip(ship);
  //     board.changeAxis(ship);
  //     board.changeAxis(ship);
  //     expect(board.board[x].toString()).toMatch(array.toString());
  //   });
  // });
});
