'use strict';

class World {
  constructor() {}

  init(x = 5, y = 5) {
    if (x === 0 && y ===0 ) {
      this.layout = [[]]
      return
    }

    this.layout = []
    for (var i = 0; i < x; i++) {
      let row = []
      for (var j = 0; j < y; j++) {
        row.push(0)
      }
      this.layout.push(row)
    }
  }
};

module.exports = World;
