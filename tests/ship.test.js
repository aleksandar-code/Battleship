import Ship from "../src/modules/ship";

describe("Ship", () => {
  test("add a hit to the ship", () => {
    const newShip = new Ship(1);
    newShip.hit();
    expect(newShip.hits).toEqual(1);
  });

  test("check if ship is sunk", () => {
    const newShip = new Ship(1);
    newShip.hit();
    newShip.isSunk();
    expect(newShip.sunk).toBeTruthy();
  });
});
