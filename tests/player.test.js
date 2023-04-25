import Player from "../src/modules/player";

describe("Player", () => {
  describe("Set user ship's head current x and y coordinates", () => {
    test("Set x and y coords depending on what slot the user mouse is", () => {
      const player = new Player();
      const x = 0;
      const y = 0;
      player.setCoords([x, y]);
      expect(player.currentMouseCoords).toEqual([x, y]);
    });
  });
  describe("Get user ship's head current x and y coordinates", () => {
    test("Get x and y coords depending on what slot the user mouse is", () => {
      const player = new Player();
      const x = 0;
      const y = 0;
      player.currentMouseCoords = [x, y];
      expect(player.getCoords()).toEqual([x, y]);
    });
  });
});
