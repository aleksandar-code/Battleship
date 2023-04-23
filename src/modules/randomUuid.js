/* eslint-disable no-bitwise */

const crypto = require("crypto");

function uuidv4() {
  return crypto.randomUUID();
}

export default uuidv4;
