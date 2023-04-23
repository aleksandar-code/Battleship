jest.mock("nanoid");
import Gameboard from "../src/modules/gameboard";

describe("gameboard", () => {
  test("shows owner", () => {
    const newGameboard = new Gameboard("Player");
    expect(newGameboard.who()).toMatch("Player");
  });
});
