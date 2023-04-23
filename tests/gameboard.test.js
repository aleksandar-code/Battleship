import Gameboard from "../src/modules/gameboard";
import Ship from "../src/modules/ship";
describe("Gameboard", () => {
  describe("receiveAttack", () => {
    test("Receive attack on board", () => {
      const board = new Gameboard("Player");
      const x = 0;
      const y = 0;
      board.receiveAttack(x, y);
      expect(board.board[x][y]).toContain("X");
    });

    test("Receive attack on board and hit a ship", () => {
      const board = new Gameboard("Player");
      const x = 0;
      const y = 0;
      board.board = [
        [["="], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
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
      board.receiveAttack(x, y);
      expect(board.board[x][y]).toContain("BOOM");
    });
  });

  describe("placeShip", () => {
    test("place ship of length 1 at 0, 0", () => {
      const board = new Gameboard("Player");
      const ship = board.ships[0];
      const x = 0;
      const y = 0;
      ship.x = x;
      ship.y = y;
      board.placeShip(ship);
      expect(board.board[x][y]).toContain("=");
    });

    test("place ship of length 5 at 0, 0", () => {
      const board = new Gameboard("Player");
      const ship = board.ships[4];
      const x = 0;
      const y = 0;
      ship.x = x;
      ship.y = y;
      const array = [
        ["="],
        ["="],
        ["="],
        ["="],
        ["="],
        [""],
        [""],
        [""],
        [""],
        [""],
      ];
      board.placeShip(ship);
      expect(board.board[x].toString()).toMatch(array.toString());
    });

    test("Can't place ship if a slot is occupied", () => {
      const board = new Gameboard("Player");
      const ship = board.ships[0];
      const x = 0;
      const y = 0;
      ship.x = x;
      ship.y = y;
      board.placeShip(ship);

      expect(board.placeShip(ship)).toBeFalsy();
    });
  });

  describe("changeAxis", () => {
    test("Place ship on the Y axis", () => {
      const board = new Gameboard("Player");
      const x = 0;
      const y = 0;
      const length = 5;
      board.placeShip(x, y, length);

      expect(board.changeAxis(x, y, length)).toBeTruthy();
    });

    test("Remove the ship from previous axis", () => {
      const board = new Gameboard("Player");
      const ship = board.ships[4];
      const x = 0;
      const y = 0;
      const length = 5;
      board.placeShip(x, y, length);
      expect(board.changeAxis(ship)).toBeTruthy();
      console.log(board.board);
    });
  });
});
