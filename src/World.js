'use strict';

const Cell = require('./Cell');

class World {
  constructor(x = 5, y = 5) {
    if (x === 0 && y ===0 ) {
      this.layout = [[]]
      return
    }

    this.layout = []
    for (var i = 0; i < x; i++) {
      let row = []
      for (var j = 0; j < y; j++) {
        row.push(new Cell());
      }
      this.layout.push(row)
    }
  }

  init () {
    for (let row of this.layout) {
      for (let cell of row) {
        cell.setStatus(Math.random() > 0.5 ? 1 : 0);
      }
    }
  }
};

module.exports = World;
