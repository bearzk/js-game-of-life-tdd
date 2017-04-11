'use strict';

class Cell {
  constructor (status = 0) {
    this.setStatus(status);
  }

  __countLive (statuses) {
    return statuses.reduce((acc, val) => {
      return acc + val;
    }, 0);
  }

  getStatus () {
    return this.status;
  }

  setStatus (status) {
    this.status = !!status ? 1 : 0;
  }

  evolve (statuses) {
    let liveNeighbours = this.__countLive(statuses);

    if (!this.getStatus() && liveNeighbours == 3) {
      this.setStatus(1);
      return;
    }

    if (liveNeighbours < 2) {
      this.setStatus(0);
      return;
    }

    if (liveNeighbours == 2 || liveNeighbours == 3) {
      this.setStatus(1);
      return;
    }

    if (liveNeighbours > 3) {
      this.setStatus(0);
      return;
    }
  }
}

module.exports = Cell;
