import Ship from "../src/modules/ship";

describe("Ship", () => {
  test("add a hit to the ship", () => {
    const newShip = new Ship(1);
    newShip.hit();
    expect(newShip.hits).toEqual(1);
  });

  test("Ship is sunk", () => {
    const newShip = new Ship(5);
    newShip.hit();
    newShip.hit();
    newShip.hit();
    newShip.hit();
    newShip.hit();
    newShip.isSunk();
    expect(newShip.sunk).toBeTruthy();
  });

  test("Ship is not sunk", () => {
    const newShip = new Ship(5);
    newShip.hit();
    newShip.hit();
    newShip.hit();
    newShip.hit();
    newShip.isSunk();
    expect(newShip.sunk).toBeFalsy();
  });
});
