export default class Node {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.display = "";
    this.ship = null;
    this.bombed = false;
  }
}
