// A ship has a length, tracks number received hits, a sunk boolean

import uuidv4 from "./randomUuid";

export default class Ship {
  constructor(length) {
    this.uuid = uuidv4();
    this.length = length;
    this.hits = 0;
    this.sunk = false;
    this.rotated = false;
    this.x = null;
    this.y = null;
  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    if (this.hits === this.length) {
      this.sunk = true;
    }
  }
}