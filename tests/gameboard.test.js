import Gameboard from "../src/modules/gameboard";

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
      const x = 0;
      const y = 0;
      const length = 1;
      board.placeShip(x, y, length);
      expect(board.board[x][y]).toContain("=");
    });

    test("place ship of length 5 at 0, 0", () => {
      const board = new Gameboard("Player");
      const x = 0;
      const y = 0;
      const length = 5;
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
      board.placeShip(x, y, length);
      expect(board.board[x].toString()).toMatch(array.toString());
    });
  });
});
