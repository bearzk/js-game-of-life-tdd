'use strict';

const Cell = require('./Cell');

class World {

  constructor (x = 5, y = 5, speed = 'normal') {
    if (x === 0 && y ===0 ) {
      this.layout = [[]];
      this.xMax = 0;
      this.yMax = 0;
      this.speed = speed;
      return;
    }

    this.layout = [];
    for (var i = 0; i < x; i++) {
      let row = [];
      for (var j = 0; j < y; j++) {
        row.push(new Cell(0, i, j));
      }
      this.layout.push(row);
    }

    this.xMax = x - 1;
    this.yMax = y - 1;
  }

  init () {
    for (let row of this.layout) {
      for (let cell of row) {
        cell._setStatus(Math.random() > 0.5 ? 1 : 0);
      }
    }
    return this;
  }

  evolve () {
    this._prepare();
    for (let row of this.layout) {
      for (let cell of row) {
        cell.evolve()
      }
    }
  }

  checkNeighbours (coordinate) {
    let res = [];
    let indices = this.__getNeighboursIndices(coordinate);
    for (let index of indices) {
      res.push(this.layout[index.x][index.y].getStatus());
    }
    return res;
  }

  _prepare () {
    for (let row of this.layout) {
      for (let cell of row) {
        cell.prepare(
          this.checkNeighbours({
              x: cell.getX(),
              y: cell.getY()
            })
        );
      }
    }
  }

  __getNeighboursIndices (coordinate) {
    let indices = [];

    if (coordinate.x < 0 || coordinate.x > this.xMax) {
      return indices;
    }

    if (coordinate.y < 0 || coordinate.y > this.yMax) {
      return indices;
    }

    if (coordinate.x - 1 >= 0) {
      if (coordinate.y - 1 >= 0) {
        indices.push({x: coordinate.x - 1, y: coordinate.y - 1 });
      }

      if (coordinate.y + 1 <= this.yMax) {
        indices.push({x: coordinate.x - 1, y: coordinate.y + 1});
      }

      indices.push({x: coordinate.x - 1, y: coordinate.y});
    }

    if (coordinate.x + 1 <= this.xMax) {
      if (coordinate.y - 1 >= 0) {
        indices.push({x: coordinate.x + 1, y: coordinate.y - 1});
      }

      if (coordinate.y + 1 <= this.yMax) {
        indices.push({x: coordinate.x + 1, y: coordinate.y + 1});
      }

      indices.push({x: coordinate.x + 1, y: coordinate.y});
    }

    if (coordinate.y - 1 >= 0) {
      indices.push({x: coordinate.x, y: coordinate.y - 1});
    }

    if (coordinate.y + 1 <= this.yMax) {
      indices.push({x: coordinate.x, y: coordinate.y + 1});
    }

    return indices;
  }

};

module.exports = World;
